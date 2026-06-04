/**
 * ⚡ Performance optimizations:
 * - Extracted into shared file to prevent duplicated inline scripts.
 * - Wrapped in IIFE to avoid global namespace pollution.
 * - Cached DOM elements to avoid repetitive getElementById lookups inside the high-frequency interval.
 * - Used `.getTime()` on the target date once to avoid implicit Date object coercion on every tick.
 */
(function () {
  var elDays = document.getElementById("days");
  var elHours = document.getElementById("hours");
  var elMins = document.getElementById("mins");
  var elSecs = document.getElementById("secs");

  // Defensive check: only run if the countdown elements exist on the page
  if (!elDays || !elHours || !elMins || !elSecs) return;

  var targetTime = new Date("2027-03-06T17:00:00").getTime();

  function tick() {
    var diff = Math.max(0, targetTime - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    elDays.textContent = String(d).padStart(3, "0");
    elHours.textContent = String(h).padStart(2, "0");
    elMins.textContent = String(m).padStart(2, "0");
    elSecs.textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
})();
