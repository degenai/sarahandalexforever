## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-11-20 - Discoverability of Hidden UI Elements
**Learning:** Interactable elements intentionally hidden with low opacity (like Easter eggs or private portals) are undiscoverable by sighted keyboard users if their focus state remains hidden.
**Action:** Always ensure that visually hidden interactable elements explicitly increase their opacity in the `:focus-visible` state.
