## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual-labeling and iframe titles
**Learning:** Icon-only interactive elements benefit from dual-labeling (`aria-label` for screen readers, `title` for native tooltips for sighted users). Furthermore, `iframe` elements embedded for content like YouTube videos must include descriptive `title` attributes so screen readers can announce their context.
**Action:** Consistently use both `aria-label` and `title` attributes on icon-only elements (e.g., the lantern link). Ensure all `iframe`s have descriptive `title` attributes.
