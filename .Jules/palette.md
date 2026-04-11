## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## 2024-11-04 - Semantic HTML for Screen Readers
**Learning:** Found that visual text headings were using generic `<div>` tags with typography classes (`<div class="names">`, `<div class="page-title">`) instead of semantic landmark tags like `<h1>`. Without proper structural headings, screen reader users cannot quickly navigate page outlines or distinguish primary content.
**Action:** When styling text to look like a heading, always use the corresponding semantic HTML tags (`<h1>` - `<h6>`) so structure matches visual importance.