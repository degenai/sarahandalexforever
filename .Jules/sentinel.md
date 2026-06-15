## REJECTED: SRI on CDN scripts — wrong threat model for this site

Sarah and Alex Forever is a static wedding site with zero auth, zero user data, zero sessions.
The threat model for Subresource Integrity (compromised CDN injects malicious JS) is
not realistic for a wedding RSVP page.

Risk of adding SRI: If GSAP pushes a patch, the hash breaks and the site silently loses
animation/functionality. The benefit does not outweigh the maintenance risk.

Decision: All SRI PRs are auto-rejected. Do not propose SRI for this repo again.
