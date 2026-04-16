## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual-Labeling and Iframe Context
**Learning:** Found that while ARIA labels are essential for screen readers, sighted users also need context for icon-only interactive elements. Native tooltips using the `title` attribute provide this easily. Furthermore, embedded iframes need a descriptive `title` attribute for screen reader users to understand the embedded context before entering the iframe.
**Action:** Implement dual-labeling (`aria-label` + `title`) on icon-only interactive elements. Ensure all `iframe` elements have descriptive `title` attributes for better context.
