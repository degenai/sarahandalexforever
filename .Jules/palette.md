## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2024-10-25 - Accessibility of Intentionally Hidden Elements
**Learning:** Elements that are intentionally hidden with very low opacity (e.g., `opacity: .07` for the "lantern" link) to act as Easter eggs or private portals remain invisible to sighted keyboard users who navigate via the Tab key unless explicitly handled.
**Action:** Always ensure that interactable elements with low opacity explicitly increase their opacity in the `:focus-visible` state, just as they would on `:hover`, so keyboard users have a visual indicator of their current focus.
