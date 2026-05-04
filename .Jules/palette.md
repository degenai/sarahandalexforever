## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-05-04 - Dual-Labeling and iframe Accessibility
**Learning:** While `aria-label` is crucial for screen readers on icon-only elements, sighted users (especially those with cognitive or learning disabilities) benefit from native browser tooltips provided by the `title` attribute. Furthermore, `iframe` elements embedded in pages lack context for screen readers without a descriptive `title` attribute.
**Action:** Always implement dual-labeling (`aria-label` + `title` with matching descriptions) for icon-only interactive elements. Always provide descriptive `title` attributes for `iframe` elements.