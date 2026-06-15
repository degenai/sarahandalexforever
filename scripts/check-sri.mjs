// Verify every Subresource Integrity (SRI) hash on a remote <script>/<link>
// actually matches the bytes the CDN serves.
//
// Why this exists: SRI fails CLOSED. If an `integrity=` value is wrong (stale,
// or hallucinated by a bot — see wedding PR #114's fabricated GSAP hash), the
// browser refuses to execute the resource and the feature silently dies in prod.
// A bot can write a confident "verified" PR around a hash it never checked; this
// is the only thing that actually checks it.
//
// Exit non-zero on any mismatch or fetch failure. No deps (Node 20+ globals).

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const files = execSync("git ls-files '*.html'", { encoding: 'utf8' })
  .split('\n').map(s => s.trim()).filter(Boolean);

const tagRe = /<(?:script|link)\b[^>]*\bintegrity\s*=\s*["'][^"']+["'][^>]*>/gi;
const urlRe = /\b(?:src|href)\s*=\s*["'](https?:\/\/[^"']+)["']/i;
const integRe = /\bintegrity\s*=\s*["']([^"']+)["']/i;

let checked = 0, failed = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const tag of html.match(tagRe) || []) {
    const url = (tag.match(urlRe) || [])[1];
    const integ = (tag.match(integRe) || [])[1];
    if (!url || !integ) continue; // integrity on a local/relative asset — skip
    checked++;

    let buf;
    try {
      const res = await fetch(url, { redirect: 'follow' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      buf = Buffer.from(await res.arrayBuffer());
    } catch (e) {
      console.error(`::error file=${file}::SRI: could not fetch ${url} — ${e.message}`);
      failed++;
      continue;
    }

    // integrity may carry multiple space-separated hashes; any one matching passes
    const tokens = integ.trim().split(/\s+/);
    const ok = tokens.some((tok) => {
      const [algo, expected] = tok.split('-');
      if (!['sha256', 'sha384', 'sha512'].includes(algo) || !expected) return false;
      return createHash(algo).update(buf).digest('base64') === expected;
    });

    if (ok) {
      console.log(`ok   ${url}`);
    } else {
      const algo = tokens[0].split('-')[0] || 'sha384';
      const correct = `${algo}-${createHash(algo).update(buf).digest('base64')}`;
      console.error(
        `::error file=${file}::SRI MISMATCH for ${url}\n  in HTML: ${integ}\n  correct: ${correct}`
      );
      failed++;
    }
  }
}

console.log(`\nSRI: ${checked} checked, ${failed} bad`);
process.exit(failed ? 1 : 0);
