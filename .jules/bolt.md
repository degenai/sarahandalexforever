## 2026-05-27 - DOM Element Caching in Interval Loops
**Learning:** The countdown logic in `desktop.html` and `mobile.html` repeated DOM queries (`document.getElementById`) for each tick interval (every 1000ms), resulting in continuous unnecessary overhead.
**Action:** Extract repeated logic into an IIFE and cache DOM queries *outside* the `setInterval` loop to prevent excessive browser reflow and layout thrashing in high-frequency functions.
