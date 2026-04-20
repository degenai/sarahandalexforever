## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-04-20 - Dual-labeling and iframe titles
**Learning:** Found that while `aria-label` helps screen readers, sighted users navigating by mouse can miss out on context for icon-only links without a native tooltip. Additionally, screen readers rely heavily on the `title` attribute of an `iframe` to describe embedded content.
**Action:** Implement dual-labeling by using both `aria-label` and `title` attributes on icon-only interactive elements. Ensure all `iframe` elements have descriptive `title` attributes to provide context.
