
## 2024-05-18 - Caching DOM lookups and Date properties in high-frequency loops
**Learning:** High-frequency callbacks like `setInterval` or `requestAnimationFrame` introduce unnecessary overhead when querying the DOM (`document.getElementById`) or generating objects (`new Date()`) on every tick. Additionally, implicit type coercion on `Date` objects when subtracting uses more cycles than necessary.
**Action:** Always cache references to DOM elements outside the callback loop and use `.getTime()` to cache date boundaries as primitive numeric values when repeatedly performing mathematical operations inside loops.
