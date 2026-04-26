## 2026-04-26 - Native Tooltips and Iframe Context
**Learning:** `aria-label` only helps screen readers. Sighted users interacting with icon-only links (like the hidden lantern portal) benefit from native tooltips provided by the `title` attribute. Furthermore, screen readers need context for embedded media; iframes without `title` attributes can cause confusion about what content is being loaded.
**Action:** Use "dual-labeling" for icon-only interactive elements by providing both `aria-label` (for screen readers) and `title` (for sighted users on hover). Always ensure `iframe` elements have a descriptive `title` attribute.

## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.