const { performance } = require('perf_hooks');

// Mock DOM
const mockEl = { textContent: '' };
global.document = {
  getElementById: () => mockEl
};

const iterations = 100000;

// Old approach
function runOld() {
  var target = new Date('2027-03-06T17:00:00');
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
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
  return performance.now() - start;
}

// New approach
function runNew() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secsEl = document.getElementById('secs');
  const targetTime = new Date('2027-03-06T17:00:00').getTime();

  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    const diff = Math.max(0, targetTime - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    daysEl.textContent  = String(d).padStart(3, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent  = String(m).padStart(2, '0');
    secsEl.textContent  = String(s).padStart(2, '0');
  }
  return performance.now() - start;
}

const oldTime = runOld();
const newTime = runNew();

console.log(`Old time: ${oldTime.toFixed(2)}ms`);
console.log(`New time: ${newTime.toFixed(2)}ms`);
console.log(`Improvement: ${(((oldTime - newTime) / oldTime) * 100).toFixed(2)}%`);
