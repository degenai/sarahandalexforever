## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual-Labeling and Iframe Context
**Learning:** While `aria-label` is crucial for screen readers on icon-only links, sighted users may still be confused about an icon's purpose without a tooltip. Additionally, iframes without a `title` attribute leave screen reader users with unhelpful raw URLs or generic frame announcements.
**Action:** Use dual-labeling for icon-only interactive elements (both `aria-label` for screen readers and `title` for a native hover tooltip). Always add a descriptive `title` attribute to `iframe` elements to provide context.
