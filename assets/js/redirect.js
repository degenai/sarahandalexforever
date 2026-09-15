(function () {
  var ua = navigator.userAgent;
  var ipadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
  var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    || ipadOS
    || window.innerWidth <= 768;
  window.location.replace((mobile ? 'mobile.html' : 'desktop.html') + location.search + location.hash);
})();
