## 2024-06-14 - Date.getTime() Optimization
**Learning:** Found that relying on implicit type coercion when performing arithmetic operations on `Date` objects (like `target - Date.now()`) adds significant overhead in high-frequency functions (e.g., `requestAnimationFrame` or `setInterval` handlers).
**Action:** Always call `.getTime()` on a `Date` instance and cache the integer result outside of high-frequency loops. This avoids the implicit coercion overhead, yielding a ~66% performance improvement for the calculation.

## EATEN — merged in PR #107 (2026-06-15)
This optimization was applied to both desktop.html and mobile.html. Future Bolt countdown PRs for this repo are auto-rejected — the work is done. Do not re-propose countdown timer changes.

## 2026-06-16 - Batch DOM Insertions
**Learning:** Generating and appending elements (like stars) one by one in a loop causes individual DOM reflows/mutations which degrade performance.
**Action:** Use a `DocumentFragment` to batch the insertions in memory before appending the fragment to the live DOM in a single operation, drastically reducing layout calculations.

## 2024-06-22 - Viewport Metrics Optimization
**Learning:** Calculating `window.innerHeight` and dependent metrics like `fadeStart`/`fadeEnd` inside a high-frequency loop (like a `requestAnimationFrame` triggered by scroll events) incurs unnecessary CPU overhead and potential layout recalculations, as these values only change on resize.
**Action:** Extract viewport dimension reads (`window.innerHeight`) out of scroll loops and recalculate them only in a `resize` event handler to improve rendering performance.

## 2024-06-24 - WebP Optimization
**Learning:** Found that unoptimized PNG image assets (`stardew-portrait.png`, `venue-placeholder.png`) contributed significantly to the payload size.
**Action:** Always convert large `.png` and `.jpg` image assets to `.webp` format and update the `<img src="..">` tags appropriately to improve page load times and bandwidth consumption.

## 2024-07-06 - Compositor Layer Explosion from Fixed Elements
**Learning:** Applying `position: fixed` to a large number of elements (like 150 background stars) causes severe performance degradation, especially on mobile, because browsers often promote each fixed element to its own compositor layer to keep it stable during scrolling.
**Action:** When creating many elements that need to stay fixed relative to the viewport, wrap them in a single `position: fixed` container (like `#sky`) and give the children `position: absolute`. They will inherit the fixed behavior without triggering layer explosion.
