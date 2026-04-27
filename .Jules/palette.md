## 2024-10-24 - Accessibility Fixes for Static Pages

**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-10-25 - Dual-labeling and Iframe Accessibility

**Learning:** Icon-only interactive elements need both `aria-label` (for screen readers) and `title` (native tooltip for sighted users). Additionally, `iframe` elements lack context for screen readers without a descriptive `title` attribute.
**Action:** Implement dual-labeling for all icon-only links/buttons and always ensure `iframe` embeds have descriptive `title` attributes.
