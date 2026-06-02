const { performance } = require('perf_hooks');

// Mock DOM
global.document = {
  getElementById: (id) => ({
    textContent: '',
  })
};

function runOld() {
  var target = new Date('2027-03-06T17:00:00');
  function tick() {
    var diff   = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000)  / 60000);
    var s = Math.floor((diff % 60000)    / 1000);
    document.getElementById('days').textContent  = String(d).padStart(3, '0');
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('mins').textContent  = String(m).padStart(2, '0');
    document.getElementById('secs').textContent  = String(s).padStart(2, '0');
  }
  for(let i=0; i<100000; i++) tick();
}

function runNew() {
  var daysEl = document.getElementById('days');
  var hoursEl = document.getElementById('hours');
  var minsEl = document.getElementById('mins');
  var secsEl = document.getElementById('secs');
  var targetTime = new Date('2027-03-06T17:00:00').getTime();

  function tick() {
    var diff = Math.max(0, targetTime - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000)  / 60000);
    var s = Math.floor((diff % 60000)    / 1000);
    daysEl.textContent  = String(d).padStart(3, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent  = String(m).padStart(2, '0');
    secsEl.textContent  = String(s).padStart(2, '0');
  }
  for(let i=0; i<100000; i++) tick();
}

const startOld = performance.now();
runOld();
const endOld = performance.now();

const startNew = performance.now();
runNew();
const endNew = performance.now();

console.log(`Old: ${endOld - startOld} ms`);
console.log(`New: ${endNew - startNew} ms`);
