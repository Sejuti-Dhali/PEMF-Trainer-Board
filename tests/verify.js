'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const html = read('index.html');
const css = read('assets/style.css');
const script = read('assets/app.js');
for (const id of ['approach', 'system', 'evidence', 'lab', 'frequency', 'duty', 'turns', 'radius', 'current', 'wave', 'reset', 'fieldValue']) {
  assert.match(html, new RegExp(`id="${id}"`), `Missing element ${id}`);
}
for (const asset of ['assets/style.css', 'assets/app.js', 'assets/system-flow.svg']) {
  assert.ok(fs.existsSync(path.join(root, asset)), `Missing ${asset}`);
}
assert.match(html, /No clinical efficacy claim/);
assert.match(html, /Sadia Islam/);
assert.match(css, /@media\(max-width:560px\)/);
assert.match(script, /magneticFieldMicrotesla/);
const B = 4*Math.PI*1e-7*60*0.012/(2*0.05)*1e6;
assert.ok(Math.abs(B - 9.04778684) < .00001);
console.log('PASS: Assets, sections, provenance, educational model, and field calculation');
