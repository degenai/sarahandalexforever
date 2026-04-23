## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-04-23 - Dual-Labeling & Iframe Accessibility
**Learning:** Icon-only interactive elements need both aria-label (for screen readers) and title (for sighted users). Iframes require descriptive titles for screen readers and sandbox attributes for security.
**Action:** Ensure dual-labeling on all icon-only links. Add title and sandbox attributes to all iframes.
