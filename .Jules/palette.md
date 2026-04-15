## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual Labeling and Iframe Context
**Learning:** Found that while `aria-label` provides screen reader support, icon-only links miss out on native tooltips for sighted users. Also found that `iframe` elements embedded from external sources need `title` attributes for full accessibility context.
**Action:** Always implement dual-labeling (`aria-label` AND `title`) on icon-only interactive elements. Ensure embedded media like `iframe` elements have descriptive `title` attributes for better context.
