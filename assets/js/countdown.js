(function () {
  // Optimization: Cache DOM lookups outside of the high-frequency tick loop
  // to prevent unnecessary queries every second.
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secsEl = document.getElementById("secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Optimization: Precompute the target timestamp value once to avoid implicit
  // Date coercion overhead during the diff calculation loop.
  const targetTime = new Date("2027-03-06T17:00:00").getTime();

  function tick() {
    const diff = Math.max(0, targetTime - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    daysEl.textContent = String(d).padStart(3, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minsEl.textContent = String(m).padStart(2, "0");
    secsEl.textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
})();
