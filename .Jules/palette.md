## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-04-30 - Dual-labeling and Iframe Titles
**Learning:** While `aria-label` is great for screen readers, sighted users don't see them on icon-only links. Additionally, `iframe` elements embedded for videos lacked context for screen reader users when title tags were missing.
**Action:** Implement dual-labeling for icon-only elements using both `aria-label` (for screen readers) and `title` (for native tooltips for sighted users). Always add descriptive `title` attributes to `iframe` elements to provide context.