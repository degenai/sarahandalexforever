## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-10-25 - Dual-Labeling and Iframe Accessibility
**Learning:** Found that while icon-only interactive elements had `aria-label` for screen readers, sighted users lacked native tooltips for understanding these elements. Additionally, embedded external content (like YouTube iframes) lacked descriptive titles.
**Action:** Implement dual-labeling by adding `title` attributes alongside `aria-label` for icon-only elements. For iframes, ensure descriptive `title` attributes are present to provide proper context to screen readers.
