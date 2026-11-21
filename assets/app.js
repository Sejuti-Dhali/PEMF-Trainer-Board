'use strict';
(() => {
  const defaults = {frequency: 65.74, duty: 92, turns: 60, radius: 50, current: 12};
  const ids = Object.keys(defaults);
  const controls = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  if (ids.some(id => !controls[id])) return;
  const put = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
  const numeric = id => Number(controls[id].value);
  function redraw() {
    const f = numeric('frequency');
    const duty = numeric('duty');
    const N = numeric('turns');
    const r = numeric('radius') / 1000;
    const I = numeric('current') / 1000;
    const period = 1000 / f;
    const on = period * duty / 100;
    const magneticFieldMicrotesla = 4 * Math.PI * 1e-7 * N * I / (2 * r) * 1e6;
    put('frequencyValue', `${f.toFixed(2)} Hz`);
    put('dutyValue', `${duty}%`);
    put('turnsValue', String(N));
    put('radiusValue', `${Math.round(r * 1000)} mm`);
    put('currentValue', `${Math.round(I * 1000)} mA`);
    put('periodValue', `${period.toFixed(2)} ms`);
    put('highValue', `${on.toFixed(2)} ms`);
    put('fieldValue', `${magneticFieldMicrotesla.toFixed(2)} µT`);
    const cycles = 4;
    const cycleWidth = 720 / cycles;
    const highWidth = cycleWidth * duty / 100;
    let d = 'M 0 196';
    for (let cycle = 0; cycle < cycles; cycle++) {
      const x = cycle * cycleWidth;
      d += ` L ${x.toFixed(2)} 196 L ${x.toFixed(2)} 60 L ${(x + highWidth).toFixed(2)} 60 L ${(x + highWidth).toFixed(2)} 196 L ${(x + cycleWidth).toFixed(2)} 196`;
    }
    document.getElementById('wave').setAttribute('d', d);
  }
  for (const id of ids) controls[id].addEventListener('input', redraw);
  document.getElementById('reset').addEventListener('click', () => {
    for (const id of ids) controls[id].value = defaults[id];
    redraw();
  });
  redraw();
})();
