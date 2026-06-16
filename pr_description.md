🎯 **What:** Add `maxlength` attributes to all user-facing text inputs in the RSVP form.

⚠️ **Risk:** Missing input length limits allows overly large payload submissions, which poses a potential Denial of Service (DoS) risk or data overflow at the form processing endpoint (Formspree).

🛡️ **Solution:** Enforce reasonable length limits natively in the browser before the form payload is generated.
