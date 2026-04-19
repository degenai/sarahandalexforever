## 2024-10-24 - Accessibility Fixes for Static Pages

**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-04-19 - Enhancing Embedded Media and Icon-only Elements

**Learning:** Found that while `aria-label` provides screen reader support, sighted users missing context for icon-only links benefit greatly from the native tooltip provided by the `title` attribute. Similarly, embedded `iframe`s lack context without a descriptive `title`, and pose a security risk without the `sandbox` attribute enforcing least privilege.
**Action:** Implement dual-labeling (both `aria-label` and `title` attributes) on icon-only interactive elements to provide screen reader support and native tooltips for sighted users. Ensure `iframe` elements have descriptive `title` attributes for better context and use the `sandbox` attribute for security.
