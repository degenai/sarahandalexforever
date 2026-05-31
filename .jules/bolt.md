## 2026-05-31 - Cache DOM lookups outside requestAnimationFrame/setInterval loops
**Learning:** Found a common pattern where `document.getElementById` and implicit `Date` type coercion via `Date.now()` vs `Date` object math was happening on every tick of the countdown timer (`setInterval`).
**Action:** Always extract static DOM element lookups outside high-frequency interval callbacks. Convert target dates to milliseconds via `.getTime()` once, instead of doing object-to-number coercion repeatedly in `Math.max(0, target - Date.now())`.
