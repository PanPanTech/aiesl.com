/* ===================================================================
   AiESL — shared script (app.js)
   =================================================================== */

/* ===== MOBILE DRAWER ===== */
function toggleDrawer() {
  var d = document.getElementById('drawer');
  if (d) d.classList.toggle('open');
}

/* ===== QUOTE MODAL ===== */
function openModal() {
  var m = document.getElementById('modalOverlay');
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  var m = document.getElementById('modalOverlay');
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(function () {
    var fs = document.getElementById('formStage');
    var ss = document.getElementById('successStage');
    if (fs) fs.style.display = 'block';
    if (ss) ss.style.display = 'none';
  }, 300);
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

/* ===== QUOTE FORM: VALIDATION + SUBMIT ===== */
function initQuoteForm() {
  var form = document.getElementById('quoteForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = [
      { id: 'f-name', err: 'e-name', check: function (v) { return v.trim().length > 1; } },
      { id: 'f-email', err: 'e-email', check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
      { id: 'f-company', err: 'e-company', check: function (v) { return v.trim().length > 1; } }
    ];
    var valid = true;
    fields.forEach(function (f) {
      var el = document.getElementById(f.id);
      var errEl = document.getElementById(f.err);
      if (!f.check(el.value)) {
        el.classList.add('err'); errEl.classList.add('show'); valid = false;
      } else {
        el.classList.remove('err'); errEl.classList.remove('show');
      }
    });
    if (!valid) return;

    var data = {
      name: document.getElementById('f-name').value.trim(),
      email: document.getElementById('f-email').value.trim(),
      company: document.getElementById('f-company').value.trim(),
      country: document.getElementById('f-country').value.trim(),
      stores: document.getElementById('f-stores').value,
      interest: document.getElementById('f-interest').value,
      message: document.getElementById('f-message').value.trim()
    };

    /* ====================================================================
       >>> BACKEND API INTEGRATION POINT <<<
       --------------------------------------------------------------------
       Replace the DEMO block below with a real API call when ready.

       Option A — your own backend:
       fetch('https://api.aiesl.com/lead', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
       })
       .then(function (r) { return r.json(); })
       .then(function () { showSuccess(); })
       .catch(function () { alert('Something went wrong. Please email info@einksmart.com'); });

       Option B — Formspree (no backend needed):
       fetch('https://formspree.io/f/YOUR_FORM_ID', {
         method: 'POST',
         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
       }).then(function () { showSuccess(); });

       Option C — HubSpot / Salesforce / your CRM webhook URL.
       ==================================================================== */

    // --- DEMO MODE (no real send): logs payload + shows success screen ---
    console.log('[AiESL quote request]', data);
    showSuccess();
  });
}
function showSuccess() {
  var fs = document.getElementById('formStage');
  var ss = document.getElementById('successStage');
  var form = document.getElementById('quoteForm');
  if (fs) fs.style.display = 'none';
  if (ss) ss.style.display = 'block';
  if (form) form.reset();
}

/* ===== ROI CALCULATOR ===== */
function initROI() {
  var ids = ['stores', 'skus', 'changes', 'wage'];
  var stores = document.getElementById('stores');
  if (!stores) return; // ROI only on home page
  var fmt = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  var fmtN = function (n) { return Math.round(n).toLocaleString('en-US'); };

  function calc() {
    var s = +document.getElementById('stores').value;
    var k = +document.getElementById('skus').value;
    var c = +document.getElementById('changes').value;
    var w = +document.getElementById('wage').value;
    document.getElementById('vStores').textContent = s;
    document.getElementById('vSkus').textContent = k.toLocaleString('en-US');
    document.getElementById('vChanges').textContent = c;
    document.getElementById('vWage').textContent = '$' + w;

    var secPerTag = 12;
    var tagsPerYear = k * c * 52;
    var hoursPerYear = (tagsPerYear * secPerTag / 3600) * s;
    var laborSaved = hoursPerYear * w;
    var costPerLabel = 7;
    var investment = k * s * costPerLabel;
    var paybackMonths = investment / (laborSaved / 12);
    var netSavings = laborSaved * 3 - investment;

    document.getElementById('payback').textContent =
      paybackMonths < 1 ? '<1 mo' : Math.round(paybackMonths) + ' mo';
    document.getElementById('laborSaved').textContent = fmt(laborSaved);
    document.getElementById('hoursSaved').textContent = fmtN(hoursPerYear) + ' hrs';
    document.getElementById('invest').textContent = fmt(investment);
    document.getElementById('netSavings').textContent = fmt(netSavings);

    var pb = document.querySelector('.roi-cbox.payback');
    if (pb) { pb.classList.remove('flash'); void pb.offsetWidth; pb.classList.add('flash'); }
  }
  ids.forEach(function (id) {
    document.getElementById(id).addEventListener('input', calc);
  });
  calc();
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      var a = item.querySelector('.faq-a');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
}

/* ===== INIT ALL ===== */
document.addEventListener('DOMContentLoaded', function () {
  initQuoteForm();
  initROI();
  initFAQ();
  initReveal();
});
