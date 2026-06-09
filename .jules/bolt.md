## 2025-01-24 - DOM Query Performance in Intervals
**Learning:** Calling `document.getElementById` inside high-frequency functions like `setInterval` or `requestAnimationFrame` creates unnecessary overhead and slows execution. Also, implicit type coercion from Date objects during repeated calculations creates a small overhead.
**Action:** Always cache DOM element references outside the interval/render loop, and call `.getTime()` once to get a raw timestamp number rather than doing math on Date objects inside the loop.
