## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-04-24 - Dual-labeling and Iframe Titles
**Learning:** Icon-only links benefit from dual-labeling: `aria-label` for screen readers and `title` for sighted users to provide native tooltips. Furthermore, external embedded iframes (like YouTube) lack context for screen readers without a descriptive `title` attribute.
**Action:** Always include both `aria-label` and `title` on icon-only interactive elements. Ensure embedded `iframe` elements have a descriptive `title` attribute.
