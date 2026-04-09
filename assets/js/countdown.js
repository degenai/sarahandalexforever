(function () {
  var target = new Date("2027-03-06T17:00:00");
  var daysEl = document.getElementById("days");
  var hoursEl = document.getElementById("hours");
  var minsEl = document.getElementById("mins");
  var secsEl = document.getElementById("secs");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    daysEl.textContent = String(d).padStart(3, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minsEl.textContent = String(m).padStart(2, "0");
    secsEl.textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
})();
