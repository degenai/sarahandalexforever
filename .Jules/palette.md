## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-04-14 - Dual-labeling Icon-Only Elements and Iframes
**Learning:** Found that while `aria-label` provides accessibility for screen readers on icon-only links, it doesn't offer a visual tooltip for sighted users. Additionally, `iframe` elements require a `title` attribute to provide context to screen readers.
**Action:** Implement dual-labeling by using both `aria-label` (for screen readers) and `title` (for native tooltips on hover) on icon-only interactive elements. Ensure all `iframe` elements have a descriptive `title` attribute.
