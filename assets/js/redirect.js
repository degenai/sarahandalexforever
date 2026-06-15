(function () {
  var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth <= 768;
  window.location.replace(mobile ? 'mobile.html' : 'desktop.html');
})();
