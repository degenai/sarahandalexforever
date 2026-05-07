## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-05-07 - Dual Labeling and iframe titles
**Learning:** Adding a `title` attribute to icon-only links alongside `aria-label` provides a native tooltip for sighted mouse users while maintaining screen reader compatibility. Additionally, `iframe` elements need descriptive `title` attributes so screen readers can announce their content to visually impaired users.
**Action:** Consistently implement dual-labeling for icon-only interactive elements and ensure all `iframe`s have clear `title` attributes.
