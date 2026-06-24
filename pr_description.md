🎯 **What:** Added `maxlength` attributes to all user-facing text inputs and textareas in the RSVP form.

⚠️ **Risk:** Missing input length limits allows overly large payload submissions, posing a potential Denial of Service (DoS) risk or causing memory issues at the form processing endpoint (Formspree).

🛡️ **Solution:** Enforced reasonable length limits natively in the browser before the form payload is generated.
