const iterations = 10000000; // 10 million

function testUnoptimized() {
  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i++) {
    var target = new Date("2027-03-06T17:00:00");
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
  }
  const end = process.hrtime.bigint();
  return Number(end - start) / 1000000; // milliseconds
}

function testOptimized() {
  const start = process.hrtime.bigint();
  var target = new Date("2027-03-06T17:00:00");
  for (let i = 0; i < iterations; i++) {
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
  }
  const end = process.hrtime.bigint();
  return Number(end - start) / 1000000; // milliseconds
}

console.log("Running benchmarks for " + iterations + " iterations...");
const timeUnoptimized = testUnoptimized();
console.log(`Unoptimized (Baseline): ${timeUnoptimized.toFixed(2)} ms`);

const timeOptimized = testOptimized();
console.log(`Optimized: ${timeOptimized.toFixed(2)} ms`);

const improvement = ((timeUnoptimized - timeOptimized) / timeUnoptimized) * 100;
console.log(`Improvement: ${improvement.toFixed(2)}%`);
console.log(
  `Speedup multiplier: ${(timeUnoptimized / timeOptimized).toFixed(2)}x`,
);
