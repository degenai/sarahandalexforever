## 2026-06-05 - Missing Subresource Integrity (SRI) on CDN Scripts
**Vulnerability:** The GSAP script sourced from Cloudflare CDN lacked `integrity` and `crossorigin` attributes, making the application vulnerable to XSS attacks if the CDN was compromised.
**Learning:** External scripts loaded from third-party CDNs must always include Subresource Integrity (SRI) to ensure the fetched content has not been tampered with. It is important to generate the integrity hash based on the actual script file, not an assumed value.
**Prevention:** Always add `integrity` and `crossorigin="anonymous"` attributes when adding external scripts to HTML files, ensuring the hash matches the resource's contents.
