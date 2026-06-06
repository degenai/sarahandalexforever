(function () {
  const elDays = document.getElementById("days");
  const elHours = document.getElementById("hours");
  const elMins = document.getElementById("mins");
  const elSecs = document.getElementById("secs");

  // Defensive check to ensure elements exist before executing
  if (!elDays || !elHours || !elMins || !elSecs) return;

  // Cache getTime() outside of high-frequency loop to prevent repeated coercion
  const targetTime = new Date("2027-03-06T17:00:00").getTime();

  function tick() {
    const diff = Math.max(0, targetTime - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    elDays.textContent = String(d).padStart(3, "0");
    elHours.textContent = String(h).padStart(2, "0");
    elMins.textContent = String(m).padStart(2, "0");
    elSecs.textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
})();
