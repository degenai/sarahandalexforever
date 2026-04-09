const iterations = 1000000;

console.log(`Running ${iterations} iterations...`);

// Baseline: repeated instantiation
console.time("Repeated instantiation");
for (let i = 0; i < iterations; i++) {
  const target = new Date("2027-03-06T17:00:00");
  const diff = target - Date.now();
}
console.timeEnd("Repeated instantiation");

// Optimized: single instantiation
console.time("Single instantiation");
const target = new Date("2027-03-06T17:00:00");
for (let i = 0; i < iterations; i++) {
  const diff = target - Date.now();
}
console.timeEnd("Single instantiation");
