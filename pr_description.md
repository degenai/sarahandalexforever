💡 **What:** Added `:focus-visible` states to low-opacity elements across the application (`.view-switch` in `desktop.html` and `mobile.html`, and `a` tags in `private/index.html`).

🎯 **Why:** Elements intentionally hidden with low opacity (like the view-switch buttons and the private portal link) did not visibly indicate when they received keyboard focus. This change explicitly increases their opacity in the `:focus-visible` state, ensuring keyboard-only users can navigate these elements easily.

📸 **Before/After:**
- **Before:** Navigating to the mobile/desktop switch links via keyboard kept them at a barely visible opacity (`.18` or `.2`), making the current focus state indistinguishable.
- **After:** Focusing these links with the keyboard now transitions their opacity to a visible state (`.55` for `.view-switch`, `1` for the private portal link), matching the mouse `:hover` behavior.

♿ **Accessibility:**
- Ensures all interactive links meet WCAG Focus Visible (2.4.7) requirements regardless of their default styling logic.

💡 **Also added:** `maxlength` attributes to all user-facing text inputs and textareas in the RSVP form.

⚠️ **Risk:** Missing input length limits allows overly large payload submissions, posing a potential Denial of Service (DoS) risk or causing memory issues at the form processing endpoint (Formspree).

🛡️ **Solution:** Enforced reasonable length limits natively in the browser before the form payload is generated.
