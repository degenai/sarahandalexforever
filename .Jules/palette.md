## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-05-30 - Dual-labeling and iframe titles
**Learning:** Icon-only interactive elements benefit from dual-labeling (`aria-label` and `title` attributes) to provide both screen reader support and native tooltips for sighted users. Additionally, `iframe` elements need descriptive `title` attributes to give proper context for screen readers.
**Action:** Always ensure dual-labeling for icon-only interactive elements and descriptive titles for `iframe` elements across the codebase.
