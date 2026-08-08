## 2024-10-24 - Accessibility Fixes for Static Pages
**Learning:** Found that custom visual styles often strip out native focus indicators, making keyboard navigation difficult. Also, decorative elements acting as links (like the lantern) need explicit ARIA labels to be meaningful to screen readers.
**Action:** Always verify keyboard focus state (`:focus-visible`) when overriding default link styles, and always add `aria-label` to icon-only interactive elements. Use `aria-current` for navigation states.

## EATEN — merged in PR #108 (2026-06-15)
A11y tooltips, title attributes, and focus-visible styles applied to lantern icon and YouTube iframe. Future Palette a11y PRs for these same elements are auto-rejected — the work is done. Do not re-propose lantern tooltips or iframe title changes for this repo.

## 2024-10-24 - Custom Form Validation Focus Management
**Learning:** Found that custom form validation (bypassing native `required` attributes via hidden inputs) breaks native browser focus management on submit errors, stranding keyboard users.
**Action:** Always manually shift focus back to the relevant field when a custom validation error is triggered to preserve logical tab order and screen reader context.

## 2024-10-25 - Fix Silent Validation Failure on Hidden Input and Orphaned Label
**Learning:** In the RSVP form, using the `required` attribute on a hidden input (like `name="attending"`) causes a silent validation failure where the browser blocks submission without displaying an error bubble since the hidden input can't be focused. Also, custom toggle buttons styled to mimic radio buttons must use `role="group"` with `aria-labelledby` rather than an orphaned `<label>` tag, because `<label>` is only valid for form controls like inputs, selects, and textareas.
**Action:** Remove `required` attributes from `type="hidden"` inputs if handled by custom validation scripts. Connect group labels to `role="group"` containers via `aria-labelledby` instead of using standard `<label>` tags.

## 2026-06-17 - Interactive Payment Handles
**Learning:** Found that important actionable items like payment handles (Venmo, Cash App) were rendered as plain text. This creates friction for users wanting to contribute as they cannot click to navigate directly to the payment app.
**Action:** When identifying textual external handles, ensure they are implemented as interactive links with proper styling (`.cal-btn`) and accessibility attributes (`aria-label`, `target="_blank"`, `rel="noopener"`) to improve usability.

## 2026-06-19 - Conditional RSVP Fields
**Learning:** When users regretfully decline, the form can still require irrelevant fields. Keep only relevant fields active and visible to reduce friction.
**Action:** Dynamically disable and visually de-emphasize `Party Size`, `Dietary Notes`, and `Song Request` when the user selects "Regretfully Declining".

## 2026-06-22 - Skip to Content Links
**Learning:** Keyboard users navigating the site have to tab through the navigation menu on every page before reaching the main content. This is a common accessibility issue.
**Action:** Always provide a "Skip to Content" link at the start of the `<body>` that becomes visible on focus, allowing keyboard users to bypass repetitive navigation.

## 2026-06-23 - Decorative Elements Must Be Hidden from Screen Readers
**Learning:** The "♥ ♥ ♥" design motifs used as section separators or within footer elements are being read aloud by screen readers as "black heart suit black heart suit black heart suit", creating unnecessary auditory clutter.
**Action:** Always add `aria-hidden="true"` to purely decorative text or icon elements that do not provide functional or contextual value.

## 2026-06-24 - Prefers Reduced Motion
**Learning:** The site's infinite star twinkling animation and page entrance animations can affect users with vestibular disorders.
**Action:** Add a global `@media (prefers-reduced-motion: reduce)` policy that forces animations and transitions to complete near-instantly for users who request reduced motion.

## 2024-10-26 - Focus Management on Async Form Submit
**Learning:** When a form submission relies on an asynchronous `fetch` request, the button is often disabled during the request. If the UI then completely swaps out the form for a success state without managing focus, keyboard users and screen readers are stranded with their focus on a now-disabled or hidden element (like the submit button). Similarly, if it fails, the user needs focus to return to the button to try again.
**Action:** When swapping UI states post-submit, explicitly programmatically set focus. Set focus to the new success container (which needs `tabindex="-1"`) on success, and restore focus to the submit button (after re-enabling it) on error.
