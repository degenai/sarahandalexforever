## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-10-25 - Dual Labeling and Iframe Accessibility
**Learning:** Screen readers announce `aria-label`, but sighted users need tooltips for icon-only elements. `title` provides these native tooltips. Also, `iframe` elements need explicit `title` attributes so screen readers can provide context before users enter the frame.
**Action:** Always implement dual-labeling (`aria-label` + `title`) on icon-only interactive elements. Ensure all `iframe` elements have descriptive `title` attributes.