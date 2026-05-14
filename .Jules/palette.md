## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Dual Labeling & iFrame Context
**Learning:** Found that while ARIA labels (`aria-label`) are great for screen readers, sighted users navigating complex apps may also need context for icon-only interactive elements (like the private access lantern). Similarly, embedded content (like `iframe`s) needs a descriptive title attribute for screen readers to navigate them effectively.
**Action:** Always implement dual-labeling (both `aria-label` and `title` attributes) on icon-only interactive elements to provide screen reader support and native tooltips for sighted users. Ensure `iframe` elements have descriptive `title` attributes for better context.
