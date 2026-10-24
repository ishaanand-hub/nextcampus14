import fs from 'fs';

const code = fs.readFileSync('src/app_runner.js', 'utf8');

// Find where campus-broadcast-bar is rendered
const barIdx = code.indexOf('campus-broadcast-bar');
console.log('campus-broadcast-bar at:', barIdx);
if (barIdx !== -1) {
  console.log('Context:\n', code.substring(barIdx - 200, barIdx + 800));
}
