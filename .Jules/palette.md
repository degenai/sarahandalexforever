## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual-labeling and iframe titles
**Learning:** Found that icon-only interactive elements lacked `title` attributes for sighted users, and `iframe` elements lacked `title` attributes for better screen reader context.
**Action:** Implement dual-labeling (both `aria-label` and `title` attributes) on icon-only interactive elements to provide screen reader support and native tooltips for sighted users. Ensure `iframe` elements have descriptive `title` attributes for better context.
