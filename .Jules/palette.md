## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-05-10 - Dual-labeling and iframe descriptions
**Learning:** Icon-only elements should have both `aria-label` for screen readers and `title` attributes for sighted users to provide native tooltips. Also, `iframe` elements need explicit `title` attributes so screen reader users understand the embedded content's purpose.
**Action:** Always implement dual-labeling for icon-only interactive elements and ensure all `iframe` elements have descriptive `title` attributes.