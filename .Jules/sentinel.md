## 2026-06-01 - Add Subresource Integrity (SRI) to external GSAP scripts
**Vulnerability:** External GSAP script loaded from CDN without integrity hashes.
**Learning:** This exposes the application to supply chain attacks if the CDN is compromised, allowing arbitrary script execution (XSS).
**Prevention:** Always use Subresource Integrity (SRI) with `integrity` and `crossorigin="anonymous"` for all scripts and styles loaded from external CDNs. Added to desktop and mobile HTML files.
