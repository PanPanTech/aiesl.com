/* ===================================================================
   AiESL — shared script (app.js)
   =================================================================== */

var INQUIRY_ENDPOINT = 'https://inquiry.panpantechnology.com/api/inquiries';

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

function getQueryValue(name) {
  try {
    return new URLSearchParams(window.location.search).get(name) || '';
  } catch (e) {
    return '';
  }
}

function interestLabel(value) {
  var labels = {
    'esl-hardware': 'ESL hardware / price tags',
    'ai-pricing': 'AI dynamic pricing',
    'middleware': 'Open middleware platform',
    'full-solution': 'Full retail solution'
  };
  return labels[value] || value || 'Retail Data Platform';
}

function setSubmitLoading(form, loading) {
  var button = form ? form.querySelector('button[type="submit"]') : null;
  if (!button) return;
  if (!button.getAttribute('data-original-label')) {
    button.setAttribute('data-original-label', button.textContent);
  }
  button.disabled = loading;
  button.textContent = loading ? 'Sending...' : button.getAttribute('data-original-label');
}

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

    var payload = {
      name: data.name,
      email: data.email,
      company: data.company,
      country: data.country,
      stores: data.stores,
      product_interest: interestLabel(data.interest),
      interest: data.interest,
      message: data.message,
      lead_brand: 'AiESL Global',
      site_domain: window.location.hostname,
      page_url: window.location.href,
      page_title: document.title,
      language: document.documentElement.lang || navigator.language || 'en',
      market: 'global',
      utm_source: getQueryValue('utm_source'),
      utm_medium: getQueryValue('utm_medium'),
      utm_campaign: getQueryValue('utm_campaign'),
      utm_term: getQueryValue('utm_term'),
      utm_content: getQueryValue('utm_content')
    };

    setSubmitLoading(form, true);
    fetch(INQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (body) {
          if (!response.ok || body.ok === false) {
            throw new Error(body.error || 'submit_failed');
          }
          return body;
        });
      })
      .then(function () {
        showSuccess();
      })
      .catch(function (error) {
        console.error('[AiESL quote request failed]', error);
        alert('Online submission is temporarily unavailable. Please email info@einksmart.com.');
      })
      .finally(function () {
        setSubmitLoading(form, false);
      });
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
