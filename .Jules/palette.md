## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2026-04-25 - Dual-Labeling Context
**Learning:** While `aria-label` provides screen reader support, sighted users may still miss context for icon-only interactive elements. Additionally, embedded iframes without `title` attributes lack context for screen readers.
**Action:** Implement dual-labeling for icon-only interactive elements using both `aria-label` and `title` attributes to provide screen reader support and native tooltips. Ensure `iframe` elements have descriptive `title` attributes for context.