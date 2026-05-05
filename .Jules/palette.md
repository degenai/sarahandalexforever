## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-05-05 - Dual-Labeling and Iframe Context
**Learning:** Found that while `aria-label` helps screen readers for icon-only links, sighted users lack context without a native tooltip. Additionally, screen readers need descriptive `title` attributes on `iframe` elements to understand embedded content context.
**Action:** Implement dual-labeling by combining `aria-label` and `title` for icon-only interactive elements, and always provide a meaningful `title` attribute for `iframes`.
