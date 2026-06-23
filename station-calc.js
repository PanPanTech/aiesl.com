/* ===================================================================
   station-calc.js — AiESL base-station (gateway) coverage planner
   Floor radius r = sqrt(commsDist^2 - heightDiff^2),
   heightDiff = |mountHeight - tagHeight|.
   =================================================================== */
(function () {
  function $(id) { return document.getElementById(id); }
  if (!$('scLength')) return;

  function cell(label, val, sub, cls) {
    return '<div class="calc-cell"><div class="cl">' + label + '</div>' +
      '<div class="cval ' + (cls || '') + '">' + val + '</div>' +
      '<div class="csub">' + (sub || '') + '</div></div>';
  }

  function compute() {
    var L = Math.max(1, +$('scLength').value || 0);
    var W = Math.max(1, +$('scWidth').value || 0);
    var d = Math.max(0.1, +$('scDist').value || 0);
    var hI = Math.max(0, +$('scMount').value || 0);
    var hT = Math.max(0, +$('scTag').value || 0);
    var lay = $('scLayout').value;
    var use = $('scUse').value;
    var dh = Math.abs(hI - hT);
    var rFloor = (dh >= d) ? 0 : Math.sqrt(d * d - dh * dh);

    if (rFloor <= 0) {
      $('scCards').innerHTML = cell('Floor radius', '0 m', 'Height diff &ge; comms range', 'warn');
      $('scFormula').innerHTML = '<span class="warn">Mounted too high: height difference ' + dh.toFixed(1) +
        ' m &ge; comms range ' + d + ' m, so the signal cannot reach the target plane. Lower the mounting height.</span>';
      $('scSvg').innerHTML = '';
      return;
    }

    var r = rFloor, pts = [], spacingTxt;
    if (lay === 'square') {
      var s = r * Math.SQRT2;
      var nx = Math.max(1, Math.ceil(L / s)), ny = Math.max(1, Math.ceil(W / s));
      for (var i = 0; i < nx; i++) for (var j = 0; j < ny; j++) pts.push([(i + 0.5) * L / nx, (j + 0.5) * W / ny]);
      spacingTxt = 'spacing ' + s.toFixed(1) + ' m (' + nx + ' &times; ' + ny + ')';
    } else {
      var dx = Math.sqrt(3) * r, dy = 1.5 * r;
      var rows = Math.max(1, Math.round(W / dy) + 1);
      for (var rI = 0; rI < rows; rI++) {
        var y = (rI + 0.5) * W / rows, off = (rI % 2) ? 0.5 : 0;
        var cols = Math.max(1, Math.round(L / dx) + 1);
        for (var c = 0; c < cols; c++) { var x = (c + 0.5 + off * 0.5) * L / (cols + off * 0.5); if (x <= L) pts.push([Math.min(x, L), y]); }
      }
      spacingTxt = 'row ' + dy.toFixed(1) + ' / col ' + dx.toFixed(1) + ' m';
    }

    var base = pts.length, mult = (use === 'pos') ? 1.6 : 1.0, total = Math.ceil(base * mult), area = L * W;

    $('scCards').innerHTML =
      cell('Base stations', total + '', (use === 'pos' ? base + ' coverage &times; 1.6 positioning' : 'gateways required'), 'accent') +
      cell('Floor coverage radius', r.toFixed(2) + ' m', 'height diff ' + dh.toFixed(1) + ' m', (r < d - 0.05 ? 'warn' : '')) +
      cell('Floor area', Math.round(area).toLocaleString() + ' m&sup2;', L + ' &times; ' + W + ' m') +
      cell('Area per station', Math.round(area / total) + ' m&sup2;', spacingTxt);

    $('scFormula').innerHTML = 'Floor radius r = &radic;(' + d + '&sup2; &minus; ' + dh.toFixed(1) + '&sup2;) = ' + r.toFixed(2) + ' m.' +
      (r < d - 0.05 ? ' Mounting ' + dh.toFixed(1) + ' m above the target plane shrinks the slant range ' + d + ' m by ' + (d - r).toFixed(2) + ' m.' : '');

    // diagram
    var Wv = 760, Hv = 420, pad = 30, sc = Math.min((Wv - 2 * pad) / L, (Hv - 2 * pad) / W);
    var ox = (Wv - L * sc) / 2, oy = (Hv - W * sc) / 2;
    function X(x) { return (ox + x * sc).toFixed(1); }
    function Y(y) { return (oy + y * sc).toFixed(1); }
    var g = '<rect x="' + X(0) + '" y="' + Y(0) + '" width="' + (L * sc).toFixed(1) + '" height="' + (W * sc).toFixed(1) +
      '" fill="none" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="6 4"/>';
    var showC = Math.min(pts.length, 120);
    for (var k = 0; k < showC; k++) g += '<circle cx="' + X(pts[k][0]) + '" cy="' + Y(pts[k][1]) + '" r="' + (r * sc).toFixed(1) +
      '" fill="var(--blue)" fill-opacity="0.07" stroke="var(--blue)" stroke-opacity="0.32" stroke-width="0.8"/>';
    for (var k2 = 0; k2 < pts.length; k2++) g += '<circle cx="' + X(pts[k2][0]) + '" cy="' + Y(pts[k2][1]) + '" r="3" fill="var(--blue-hi)"/>';
    $('scSvg').innerHTML = g;
  }

  ['scLength', 'scWidth', 'scDist', 'scMount', 'scTag', 'scLayout', 'scUse'].forEach(function (id) {
    var el = $(id); if (!el) return;
    el.addEventListener('input', compute); el.addEventListener('change', compute);
  });
  compute();
})();
