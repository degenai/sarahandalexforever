## 2024-05-18 - Caching DOM elements and Date value
**Learning:** High-frequency callbacks like `setInterval` should cache DOM elements and use `.getTime()` to avoid implicit type coercions and redundant DOM lookups.
**Action:** Always extract static DOM lookups and Date calculations outside of `tick()` or animation loop functions.
