## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-04-28 - Dual-labeling and iframe title
**Learning:** Icon-only interactive elements need both `aria-label` (for screen readers) and `title` (for native tooltips for sighted users) to be fully accessible and usable. Also, `iframe` elements embedded in pages require a descriptive `title` attribute so screen readers can announce the frame's context properly.
**Action:** Always implement dual-labeling for icon-only elements and ensure all `iframe` elements have a descriptive `title` attribute.
