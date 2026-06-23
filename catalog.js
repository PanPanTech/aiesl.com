/* ===================================================================
   catalog.js — AiESL product catalog data + render
   Source: PanPanTech Classic Series + Lite/Slim/Rock/Freezer/7-color
   data sheets. Renders filterable cards, full spec table, detail modal.
   =================================================================== */
(function () {
  const COMMON = {
    standard: {
      tech: 'EINK e-paper, full refresh', angle: '>170°', dpi: '183 DPI',
      nfc: 'ISO/IEC 14443 Type A, 200B NDEF, ≤10mm', led: 'Tri-/7-colour LED',
      rf: '2.4 GHz (2402–2480 MHz)', life: '5–10 yrs @ 2–4 updates/day',
      temp: '0–40 °C', humidity: '30–70 %RH', ip: 'IP54', cert: 'RoHS · CE · FCC',
    },
  };

  const SERIES = [
    {
      key: 'classic', name: 'Classic Series', cat: 'FOUR-COLOR ESL',
      tagline: 'White-cover four-color ESL for mainstream retail, supermarket and warehouse shelves. BLE 5.2 via base station.',
      best: 'Supermarket · grocery · warehouse · picking',
      models: [
        { m:'AES-0213', size:'2.13"', sizeIn:2.13, res:'250 × 122', dpi:'130 DPI', dim:'74 × 35 × 12 mm', wt:'33 g', batt:'1200 mAh (2×CR2450)', color:'bwry', life:'>5 yrs @ 4/day' },
        { m:'AES-0266', size:'2.66"', sizeIn:2.66, res:'296 × 152', dpi:'125 DPI', dim:'87 × 42 × 12 mm', wt:'39 g', batt:'1200 mAh (2×CR2450)', color:'bwry', life:'>5 yrs @ 4/day' },
        { m:'AES-0290', size:'2.90"', sizeIn:2.90, res:'296 × 128', dpi:'122 DPI', dim:'92 × 43 × 12 mm', wt:'43 g', batt:'1200 mAh (2×CR2450)', color:'bwry', life:'>5 yrs @ 4/day' },
        { m:'AES-0420', size:'4.20"', sizeIn:4.20, res:'400 × 300', dpi:'120 DPI', dim:'99 × 89.5 × 13 mm', wt:'83.5 g', batt:'1800 mAh (2×CR2450)', color:'bwry', life:'>5 yrs @ 4/day' },
        { m:'AES-0750', size:'7.50"', sizeIn:7.50, res:'800 × 480', dpi:'124 DPI', dim:'176 × 123 × 9.5 mm', wt:'200 g', batt:'3600 mAh (2×CR2450)', color:'bwry', life:'>5 yrs @ 4/day' },
      ],
      specs: { tech:'EINK e-paper, full refresh', angle:'>170°', color:'Black / White / Red / Yellow', cover:'White; recessed or mirror cover', housing:'ABS + PC',
        rf:'BLE 5.2 private protocol, 2.4 GHz', range:'0–25 m (non-open)', update:'Base-station remote update + OTA',
        volt:'3.0 V DC typ.', sleep:'<1.8 µA static', refreshC:'<20 mA refresh', cert:'RoHS · CE · FCC' },
    },
    {
      key: 'lite', name: 'Lite Series', cat: 'VALUE ESL',
      tagline: 'Simple, cost-effective four-color labels for every department. NFC + 7-colour LED, replaceable battery pack.',
      best: 'General retail · departments · accessories',
      models: [
        { m:'AES-0154/L', size:'1.54"', sizeIn:1.54, res:'200 × 200', dpi:'183 DPI', dim:'53.5 × 38.8 × 15 mm', wt:'22 g', batt:'2×375 mAh CR2450', color:'bwry', moq:'5000', note:'Accessories, pharmacy, perfumery & beauty' },
        { m:'AES-0213/L', size:'2.13"', sizeIn:2.13, res:'250 × 122', dpi:'183 DPI', dim:'72.8 × 34.5 × 13 mm', wt:'33 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000' },
        { m:'AES-0266/L', size:'2.66"', sizeIn:2.66, res:'296 × 152', dpi:'183 DPI', dim:'90.8 × 42.9 × 13 mm', wt:'36 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000' },
        { m:'AES-0290/L', size:'2.90"', sizeIn:2.90, res:'296 × 128', dpi:'183 DPI', dim:'90.8 × 42.9 × 13 mm', wt:'39 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000' },
        { m:'AES-0420/L', size:'4.20"', sizeIn:4.20, res:'400 × 300', dpi:'183 DPI', dim:'106 × 86 × 14.1 mm', wt:'83 g', batt:'3×600 mAh CR2450', color:'bwry', moq:'2000', note:'Promotion stands, fresh produce, appliances' },
        { m:'AES-0750/L', size:'7.50"', sizeIn:7.50, res:'800 × 480', dpi:'183 DPI', dim:'185 × 121 × 14 mm', wt:'201 g', batt:'4×600 mAh CR2450', color:'bwry', moq:'5000', note:'Promotion stands, fresh produce, appliances' },
      ],
      specs: { color:'BW / BWR / BWRY', housing:'White', batt:'Replaceable battery pack', tech:'EINK e-paper, full refresh', angle:'>170°', dpi:'183 DPI', nfc:'ISO/IEC 14443 Type A, 200B NDEF, ≤10mm', led:'7-colour LED', rf:'2.4 GHz (2402–2480 MHz)', life:'5–10 yrs @ 2–4 updates/day', temp:'0–40 °C', humidity:'30–70 %RH', ip:'IP54', cert:'RoHS · CE · FCC' },
    },
    {
      key: 'slim', name: 'Slim Series', cat: 'SLIM ESL',
      tagline: 'Slim profile with protective cover, in white or black. Refined look for premium departments.',
      best: 'Premium departments · apparel · electronics',
      models: [
        { m:'AES-0213/S', size:'2.13"', sizeIn:2.13, res:'250 × 122', dpi:'183 DPI', dim:'71 × 34.5 × 11.2 mm', wt:'32 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000', caseColor:'White / black' },
        { m:'AES-0266/S', size:'2.66"', sizeIn:2.66, res:'296 × 152', dpi:'183 DPI', dim:'90.7 × 42.8 × 11.2 mm', wt:'38 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000', caseColor:'White' },
        { m:'AES-0290/S', size:'2.90"', sizeIn:2.90, res:'296 × 128', dpi:'183 DPI', dim:'90 × 42 × 11.2 mm', wt:'39 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'5000', caseColor:'White / black' },
        { m:'AES-0420/S', size:'4.20"', sizeIn:4.20, res:'400 × 300', dpi:'183 DPI', dim:'118 × 83.8 × 11.2 mm', wt:'83 g', batt:'3×600 mAh CR2450', color:'bwry', moq:'5000', caseColor:'White / black' },
        { m:'AES-0750/S', size:'7.50"', sizeIn:7.50, res:'800 × 480', dpi:'183 DPI', dim:'183 × 118 × 11.2 mm', wt:'201 g', batt:'4×600 mAh CR2450', color:'bwry', moq:'5000', caseColor:'White' },
      ],
      specs: { color:'BW / BWR / BWRY', housing:'White / black', design:'Slim w/ protective cover', batt:'Replaceable battery pack', tech:'EINK e-paper, full refresh', angle:'>170°', dpi:'183 DPI', nfc:'ISO/IEC 14443 Type A, 200B NDEF, ≤10mm', led:'7-colour LED', rf:'2.4 GHz (2402–2480 MHz)', life:'5–10 yrs @ 2–4 updates/day', temp:'0–40 °C', humidity:'30–70 %RH', ip:'IP54', cert:'RoHS · CE · FCC' },
    },
    {
      key: 'rock', name: 'Rock Series', cat: 'DURABLE ESL',
      tagline: 'Rugged build with universal single-button replaceable battery. Widest size range, up to 10.2".',
      best: 'High-traffic retail · big-format · DIY',
      models: [
        { m:'AES-0213/R', size:'2.13"', sizeIn:2.13, res:'250 × 122', dpi:'183 DPI', dim:'71 × 34.5 × 11.2 mm', wt:'32 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black' },
        { m:'AES-0290/R', size:'2.90"', sizeIn:2.90, res:'296 × 128', dpi:'183 DPI', dim:'90 × 42 × 11.2 mm', wt:'39 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black' },
        { m:'AES-0350/R', size:'3.50"', sizeIn:3.50, res:'384 × 184', dpi:'183 DPI', dim:'103.5 × 51 × 12.9 mm', wt:'68 g', batt:'2×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black' },
        { m:'AES-0420/R', size:'4.20"', sizeIn:4.20, res:'400 × 300', dpi:'183 DPI', dim:'101 × 88.5 × 12.9 mm', wt:'83 g', batt:'4×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black' },
        { m:'AES-0583/R', size:'5.83"', sizeIn:5.83, res:'648 × 480', dpi:'183 DPI', dim:'136 × 112 × 12.9 mm', wt:'105 g', batt:'4×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black' },
        { m:'AES-0102/R', size:'10.2"', sizeIn:10.2, res:'960 × 640', dpi:'183 DPI', dim:'234.6 × 170.7 × 12.9 mm', wt:'220 g', batt:'8×600 mAh CR2450', color:'bwry', moq:'2000', caseColor:'White / black', note:'No NFC / no LED on this model' },
      ],
      specs: { color:'BW / BWR / BWRY', housing:'White / black', batt:'Universal single-button, replaceable', tech:'EINK e-paper, full refresh', angle:'>170°', dpi:'183 DPI', nfc:'ISO/IEC 14443 Type A, 200B NDEF, ≤10mm', led:'7-colour LED', rf:'2.4 GHz (2402–2480 MHz)', life:'5–10 yrs @ 2–4 updates/day', temp:'0–40 °C', humidity:'30–70 %RH', ip:'IP54', cert:'RoHS · CE · FCC' },
    },
    {
      key: 'freezer', name: 'Freezer Series', cat: 'COLD-CHAIN ESL',
      tagline: 'Sealed IP67 label rated to −20 °C for freezers and cold chain. Sealed polymer battery.',
      best: 'Freezers · cold chain · chilled aisles',
      models: [
        { m:'AES-0266/F', size:'2.66"', sizeIn:2.66, res:'296 × 152', dpi:'183 DPI', dim:'85.9 × 41.9 × 9.1 mm', wt:'32 g', batt:'1200 mAh polymer (sealed)', color:'bw', moq:'2000', ip:'IP67', temp:'−20 to +40 °C', note:'Non-removable battery; black & white display' },
      ],
      specs: { color:'Black & White', housing:'White', ip:'IP67', temp:'−20 to +40 °C', batt:'1200 mAh polymer, non-removable',
        tech:'EINK e-paper, full refresh', angle:'>170°', dpi:'183 DPI', nfc:'ISO/IEC 14443 Type A, 200B NDEF', rf:'2.4 GHz (2402–2480 MHz)', life:'5–10 yrs @ 2–4/day', humidity:'30–70 %RH', cert:'RoHS · CE · FCC' },
    },
    {
      key: 'special', name: '7-Color & Gateway', cat: 'SPECIALTY',
      tagline: 'Full-color 7-shade promotional label, plus the base station that drives the whole estate.',
      best: 'Promo displays · system infrastructure',
      models: [
        { m:'AES-0730/SC', size:'7.30"', sizeIn:7.30, res:'800 × 480', dpi:'183 DPI', dim:'183 × 118 × 11.2 mm', wt:'201 g', batt:'4×600 mAh CR2450', color:'7c', moq:'—', note:'7 colors: black, white, red, yellow, blue, green, orange' },
        { m:'AES-B001', size:'Gateway', sizeIn:9.99, res:'4-digit LED', dpi:'—', dim:'155 × 155 × 35 mm', wt:'332 g', batt:'PoE / 12V DC / USB-C', color:'gw', moq:'—', isGateway:true,
          note:'Quad-core ARM Cortex-A35, 1 GB DDR3, 16 GB eMMC · Wi-Fi 2.4G + RJ45 + BLE 5.2 + 4-ch RF · 0–25 m range' },
      ],
      specs: { note:'See individual model details' },
    },
  ];

  const ALL = [];
  SERIES.forEach(s => s.models.forEach(m => ALL.push(Object.assign({ series: s.key, seriesName: s.name }, m))));

  const COLOR_LABEL = { bw:'B/W', bwr:'B/W/R', bwry:'B/W/R/Y', '7c':'7-color', gw:'Gateway' };
  const COLOR_CHIPS = { bw:['B','W'], bwr:['B','W','R'], bwry:['B','W','R','Y'], '7c':['B','W','R','Y','Bl','Gr','Or'], gw:[] };

  function tagMockHtml(m) {
    if (m.isGateway) {
      return `<div class="tag-mock c-bw" style="width:74px;height:74px;align-items:center;justify-content:center">
        <div style="font-family:'JetBrains Mono',monospace;font-size:8px;color:#333;text-align:center;line-height:1.4">BASE<br>STATION<br>AES-B001</div></div>`;
    }
    const base = Math.max(16, Math.min(118, 14 + m.sizeIn * 13));
    const p = m.res.split('×').map(s=>parseFloat(s));
    const ratio = (p[1]/p[0]) || 0.5;
    const w = base, h = Math.max(20, Math.round(base * ratio));
    const key = m.sizeIn.toFixed(2);
    const priceMap = { '1.54':'4.9','2.13':'3.49','2.66':'5.99','2.90':'11.39','3.50':'8.50','4.20':'19.9','5.83':'24.5','7.30':'29.9','7.50':'34.9','10.20':'129' };
    const price = priceMap[key] || '9.99';
    const fs = Math.max(11, Math.min(26, h * 0.5));
    return `<div class="tag-mock c-${m.color}" style="width:${w}px;height:${h}px">
      <span class="tm-name">AES ${m.size}</span>
      <span class="tm-price" style="font-size:${fs}px"><small>$</small>${price}</span>
      <span class="tm-strip"></span></div>`;
  }

  // real product photo path per model (extracted from spec sheets / supplied shots)
  function photoFor(m) {
    var code = (m.m.match(/AES-([A-Za-z0-9]+)/) || [])[1] || '';
    switch (m.series) {
      case 'classic': return 'assets/products/classic-' + code + '.jpg';
      case 'lite':    return 'assets/products/lite-' + code + '.png';
      case 'slim':    return 'assets/products/slim-' + code + '.png';
      case 'rock':    return 'assets/products/rock-' + code + (code === '0102' ? '.jpg' : '.png');
      case 'freezer': return 'assets/products/freezer-' + code + '.jpg';
      case 'special': return m.isGateway ? 'assets/products/gateway-b001.jpg' : 'assets/products/sevencolor-0730.png';
    }
    return '';
  }

  function cardHtml(m) {
    const chips = (COLOR_CHIPS[m.color]||[]).map(c=>`<span class="cchip">${c}</span>`).join('');
    const photo = photoFor(m);
    return `<div class="prod-card model-card reveal" data-series="${m.series}" onclick="AiESLcat.open('${m.m}')">
      <div class="mc-top photo">
        <span class="mc-badge">${m.seriesName}</span>
        <img src="${photo}" alt="AiESL ${m.m} ${m.isGateway?'ESL gateway':m.size+' electronic shelf label'}" loading="lazy">
        <span class="mc-size">${m.size}</span>
      </div>
      <div class="prod-body">
        <div class="pmodel">${m.m}</div>
        <h3>${m.isGateway ? 'ESL Gateway' : 'AiESL ' + m.size + ' ESL'}</h3>
        <div class="prod-specs">
          <div><span>Resolution</span><span>${m.res}</span></div>
          <div><span>Dimensions</span><span>${m.dim.replace(/ /g,'')}</span></div>
          <div><span>${m.isGateway?'Power':'Battery'}</span><span>${(m.batt||'').replace(/ \(.*\)/,'')}</span></div>
        </div>
        ${m.isGateway ? '' : `<div class="chips-color">${chips}<span class="cchip" style="border-color:rgba(77,124,255,.4);color:var(--blue-hi)">${m.dpi}</span></div>`}
        <span class="prod-link" style="margin-top:16px">View full specs &rarr;</span>
      </div>
    </div>`;
  }

  function rows(pairs) {
    return pairs.filter(p=>p[1]).map(p=>`<div class="mm-row"><span class="k">${p[0]}</span><span class="v">${p[1]}</span></div>`).join('');
  }
  function openModal(model) {
    const m = ALL.find(x=>x.m===model); if(!m) return;
    const s = SERIES.find(x=>x.key===m.series);
    const ov = document.getElementById('mmOverlay');
    const common = s.specs || {};
    const pairs = m.isGateway ? [
      ['Model', m.m], ['Type', 'ESL control base station'], ['Dimensions', m.dim], ['Weight', m.wt],
      ['Processor', 'Quad-core ARM Cortex-A35'], ['Memory', '1 GB DDR3 · 16 GB eMMC'],
      ['Display', '4-digit LED segment'], ['Network', 'Wi-Fi 2.4G · RJ45 · BLE 5.2'],
      ['RF module', '4-channel (2 TX / 2 RX)'], ['Frequency', '2.4 GHz (2400–2500 MHz)'],
      ['Power', 'PoE 48V (≤30W) · 12V DC · USB-C 5V'], ['Range', '0–25 m (non-open)'],
      ['Op. current', '<350 mA'], ['Op. temp', '0–50 °C'], ['Housing', 'ABS + PC, white'],
      ['Mounting', 'Desktop · vertical · ceiling'],
    ] : [
      ['Model', m.m], ['Display size', m.size], ['Resolution', m.res], ['Pixel density', m.dpi],
      ['Display colors', COLOR_LABEL[m.color]], ['Dimensions', m.dim], ['Weight', m.wt],
      ['Case color', m.caseColor || common.housing || 'White'], ['Battery', m.batt],
      ['Battery life', m.life || common.life || '5–10 yrs @ 2–4/day'],
      ['Display tech', common.tech || 'EINK e-paper, full refresh'], ['Viewing angle', common.angle || '>170°'],
      ['Protection', m.ip || common.ip || 'IP54'], ['Op. temp', m.temp || common.temp || '0–40 °C'],
      ['Humidity', common.humidity || '30–70 %RH'], ['NFC', (m.m==='AES-0102/R')?'—':(common.nfc || 'ISO 14443 Type A')],
      ['Wireless', common.rf || '2.4 GHz (2402–2480 MHz)'], ['Certification', common.cert || 'RoHS · CE · FCC'],
      ['MOQ', m.moq ? m.moq + ' pcs' : '—'],
    ];
    var photoEl = ov.querySelector('.mm-photo img');
    if (photoEl) { photoEl.src = photoFor(m); photoEl.alt = 'AiESL ' + m.m; }
    ov.querySelector('.pmodel').textContent = m.m;
    ov.querySelector('.mm-head h3').textContent = m.isGateway ? 'AiESL ESL Gateway' : 'AiESL ' + m.size + ' Electronic Shelf Label';
    ov.querySelector('.mm-head p').textContent = (m.note || s.tagline);
    ov.querySelector('.mm-specs').innerHTML = rows(pairs);
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('mmOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  let active = 'all';
  function filter(key) {
    active = key;
    document.querySelectorAll('.cat-tab').forEach(t=>t.classList.toggle('active', t.dataset.k===key));
    document.querySelectorAll('.model-card').forEach(c=>{
      c.style.display = (key==='all' || c.dataset.series===key) ? '' : 'none';
    });
    const s = SERIES.find(x=>x.key===key);
    const intro = document.getElementById('catIntro');
    if (intro) intro.innerHTML = key==='all'
      ? `<b>${ALL.length} models</b> across ${SERIES.length} families — from a 1.54&Prime; accessory tag to a 10.2&Prime; rock label and the base station. Click any model for the full spec sheet.`
      : `<b>${s.name}</b> · ${s.tagline} &nbsp;<span style="color:var(--ink-dim)">Best for: ${s.best}</span>`;
  }

  function specTableHtml() {
    let html = `<table class="spec-table"><thead><tr>
      <th>Model</th><th>Size</th><th>Resolution</th><th>DPI</th><th>Dimensions (mm)</th><th>Weight</th><th>Colors</th><th>Battery</th><th>IP</th>
      </tr></thead><tbody>`;
    SERIES.forEach(s=>{
      html += `<tr class="spec-series-row"><td colspan="9">${s.name} — ${s.cat}</td></tr>`;
      s.models.forEach(m=>{
        html += `<tr onclick="AiESLcat.open('${m.m}')" style="cursor:pointer">
          <td>${m.m}</td><td>${m.size}</td><td class="num">${m.res}</td><td class="num">${m.dpi}</td>
          <td class="num">${m.dim.replace(/ /g,'')}</td><td class="num">${m.wt}</td>
          <td>${COLOR_LABEL[m.color]}</td><td class="num">${(m.batt||'').replace(/ \(.*\)/,'')}</td>
          <td class="num">${m.ip||(s.key==='freezer'?'IP67':'IP54')}</td></tr>`;
      });
    });
    return html + '</tbody></table>';
  }

  function mount() {
    const tabBar = document.getElementById('catTabs');
    if (tabBar) {
      const tabs = [['all','All']].concat(SERIES.map(s=>[s.key, s.name.replace(' Series','')]));
      tabBar.innerHTML = tabs.map(t=>{
        const n = t[0]==='all' ? ALL.length : SERIES.find(s=>s.key===t[0]).models.length;
        return `<button class="cat-tab${t[0]==='all'?' active':''}" data-k="${t[0]}" onclick="AiESLcat.filter('${t[0]}')">${t[1]}<span class="ct-n">${n}</span></button>`;
      }).join('');
    }
    const grid = document.getElementById('catGrid');
    if (grid) grid.innerHTML = ALL.map(cardHtml).join('');
    const st = document.getElementById('specTable');
    if (st) st.innerHTML = specTableHtml();
    filter('all');
    document.querySelectorAll('.model-card.reveal, .spec-table').forEach(el=>el.classList.add('in'));
  }

  window.AiESLcat = { open: openModal, close: closeModal, filter };
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
  if (document.readyState !== 'loading') mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
