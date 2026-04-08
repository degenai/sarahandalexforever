(function () {
  var sky = document.getElementById("sky");
  if (!sky) return;

  // Default count, override with data-stars on the sky div
  var count = parseInt(sky.getAttribute("data-stars"), 10) || 150;
  var bigChance = 0.12;

  for (var i = 0; i < count; i++) {
    var s = document.createElement("div");
    var big = Math.random() < bigChance;
    s.className = "star";
    s.style.cssText =
      "left:" +
      (Math.random() * 100).toFixed(1) +
      "%;" +
      "top:" +
      (Math.random() * 100).toFixed(1) +
      "%;" +
      "width:" +
      (big ? 3 : 2) +
      "px;" +
      "height:" +
      (big ? 3 : 2) +
      "px;" +
      "--d:" +
      (Math.random() * 2.2 + 0.7).toFixed(1) +
      "s;" +
      "--dl:-" +
      (Math.random() * 5).toFixed(1) +
      "s;";
    sky.appendChild(s);
  }
})();
