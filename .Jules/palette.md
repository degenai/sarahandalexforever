## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-05-23 - Dual-Labeling for Thematic Icons
**Learning:** Thematic icon-only links (like the "lantern" acting as a secret portal) lack visual context for sighted users, even if they have an `aria-label` for screen readers. This is particularly important for non-standard UI elements that don't look like typical buttons or links.
**Action:** Implement dual-labeling: use `aria-label` for screen readers AND a `title` attribute for native tooltips, ensuring both user groups understand the icon's purpose.
