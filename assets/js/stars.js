(function () {
  var sky = document.getElementById('sky');
  if (!sky) return;

  var count = parseInt(sky.getAttribute('data-stars'), 10) || 150;
  var bigChance = 0.12;

  // ⚡ Bolt: Use DocumentFragment and cloneNode to minimize DOM overhead
  var fragment = document.createDocumentFragment();
  var tmpl = document.createElement('div');
  tmpl.className = 'star';

  for (var i = 0; i < count; i++) {
    // ⚡ Bolt: cloneNode is faster than createElement
    var s = tmpl.cloneNode();
    var big = Math.random() < bigChance;
    var size = big ? '3px' : '2px';

    // ⚡ Bolt: Direct property assignment avoids CSS parser overhead from cssText
    s.style.left = (Math.random() * 100).toFixed(1) + '%';
    s.style.top = (Math.random() * 100).toFixed(1) + '%';
    s.style.width = size;
    s.style.height = size;
    s.style.setProperty('--d', (Math.random() * 2.2 + 0.7).toFixed(1) + 's');
    s.style.setProperty('--dl', '-' + (Math.random() * 5).toFixed(1) + 's');

    fragment.appendChild(s);
  }

  sky.appendChild(fragment);
})();
