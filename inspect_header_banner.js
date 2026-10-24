import fs from 'fs';

const code = fs.readFileSync('src/app_runner.js', 'utf8');

// Find OS V3.2
const osIdx = code.indexOf('OS V3.2');
console.log('OS V3.2 found at:', osIdx);
if (osIdx !== -1) {
  console.log('Context around OS V3.2:\n', code.substring(osIdx - 150, osIdx + 200));
}

// Find notification bar (ann-1 or Amazon SDE-1 Drive: OA Slot Selection)
const annIdx = code.indexOf('Amazon SDE-1 Drive: OA Slot Selection');
console.log('Notification found at:', annIdx);
if (annIdx !== -1) {
  console.log('Context around Notification bar:\n', code.substring(annIdx - 300, annIdx + 500));
}
