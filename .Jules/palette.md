## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-10-25 - Dual-Labeling and Iframe Security/A11y
**Learning:** Screen readers rely on `aria-label`, but sighted users rely on `title` attributes for tooltips on icon-only interactive elements. Furthermore, `iframe` elements need `title` attributes for screen reader context and `sandbox` attributes for least privilege security.
**Action:** Implement dual-labeling (both `aria-label` and `title` attributes) on icon-only interactive elements. Ensure `iframe` elements have descriptive `title` attributes and appropriate `sandbox` attributes.