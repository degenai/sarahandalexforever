
## 2024-05-29 - Missing Subresource Integrity on CDN Assets
**Vulnerability:** External GSAP script was loaded from cdnjs without Subresource Integrity (SRI) attributes (`integrity` and `crossorigin`).
**Learning:** Even well-known CDNs can be compromised, leading to XSS vulnerabilities. Missing SRI is a common oversight when copying script tags from documentation.
**Prevention:** Always include `integrity` and `crossorigin="anonymous"` attributes when loading external scripts or styles.
