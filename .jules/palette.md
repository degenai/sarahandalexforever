## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## EATEN — merged in PR #108 (2026-06-15)
A11y tooltips, title attributes, and focus-visible styles applied to lantern icon and YouTube iframe. Future Palette a11y PRs for these same elements are auto-rejected — the work is done. Do not re-propose lantern tooltips or iframe title changes for this repo.
## 2026-06-17 - Interactive Payment Handles
**Learning:** Found that important actionable items like payment handles (Venmo, Cash App) were rendered as plain text. This creates friction for users wanting to contribute as they cannot click to navigate directly to the payment app.
**Action:** When identifying actionable text or external handles, ensure they are implemented as interactive links with proper styling (`.cal-btn`) and accessibility attributes (`aria-label`, `target="_blank"`, `rel="noopener"`) to improve usability.
