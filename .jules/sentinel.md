## REJECTED: SRI on CDN scripts — wrong threat model for this site

Sarah and Alex Forever is a static wedding site with zero auth, zero user data, zero sessions.
The threat model for Subresource Integrity (compromised CDN injects malicious JS) is
not realistic for a wedding RSVP page.

Risk of adding SRI: If GSAP pushes a patch, the hash breaks and the site silently loses
animation/functionality. The benefit does not outweigh the maintenance risk.

Additionally, a Sentinel PR (#114) proposed a hallucinated sha384 hash that would have
broken GSAP entirely. The verification script it claimed to use (verify_sri.py) does not exist.

Decision: All SRI PRs are auto-rejected. Do not propose SRI for this repo again.
Also do not propose iframe sandbox — the work is merged (PR #116, 2026-06-15).

## 2024-06-24 - Privacy Enhancement: YouTube NoCookie
**Vulnerability:** Embedded YouTube iframe uses standard domain, which tracks users with cookies upon page load.
**Learning:** In a static site with no cookie banner, third-party embedded content can introduce unexpected tracking cookies, violating user privacy.
**Prevention:** Always use the `youtube-nocookie.com` domain for embedded YouTube videos to prevent cookie tracking.

## 2024-06-27 - Privacy Enhancement: CSP mismatch for youtube-nocookie
**Vulnerability:** A previous fix to use `youtube-nocookie.com` did not update the CSP, causing the browser to block the video load.
**Learning:** When changing third-party embed domains, you must also update the Content Security Policy to allow the new domain and strictly forbid the tracking-enabled one.
**Prevention:** Always check for and update CSP headers in HTML when changing external URLs.
