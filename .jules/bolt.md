## 2024-06-05 - Optimize High-Frequency DOM Operations

**Learning:** In simple vanilla JS codebases without frameworks like React, repetitive `document.getElementById` calls and implicit Date object coercion (e.g. `target - Date.now()`) inside `setInterval` loops create unnecessary overhead and performance bottlenecks that compound over time.
**Action:** Always extract static DOM element references and compute primitive timestamps (using `.getTime()`) outside of frequently executed functions (like animation loops or interval callbacks) to minimize computational overhead.
