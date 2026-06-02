## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.
## 2026-06-02 - Iframe Title Attributes
**Learning:** Iframes used for embedding external content (like YouTube videos) need descriptive `title` attributes for screen readers to properly announce their content and context.
**Action:** Always ensure `iframe` elements have a meaningful, context-specific `title` attribute based on verified information within the codebase, rather than relying on unverified assumptions.
