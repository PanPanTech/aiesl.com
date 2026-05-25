# AiESL Website — Multi-Page Edition

Four-page static site. No build step, no server needed for preview.
Just open `index.html` in a browser, or upload the whole folder to any host.

## Files

```
aiesl-site/
├── index.html        Home (hero, features, sizes, how-it-works, ROI, FAQ)
├── products.html     Product range + comparison table
├── blog.html         Blog index (featured + 6 articles)
├── about.html        Company story, timeline, values, contact
├── styles.css        Shared stylesheet (all pages)
├── app.js            Shared script (nav, modal, ROI, FAQ, reveal)
└── assets/
    └── products/     Put your product photos here
```

---

## 1. How to add your own product photos

Photos go in `assets/products/`. Recommended: JPG or WebP, ~800x800px,
under 200 KB each for fast loading.

### On the Products page (products.html)

Each product card has a `.prod-visual` block with a placeholder and a
comment showing exactly what to paste. Find this:

```html
<div class="prod-visual">
  <!-- REPLACE WITH: <img src="assets/products/tag-213.jpg" alt="AiESL 2.13 inch electronic shelf label"> -->
  <div class="prod-tag" ...>...</div>
  <span class="prod-placeholder">photo placeholder</span>
</div>
```

Replace the whole inner content with your image:

```html
<div class="prod-visual">
  <img src="assets/products/tag-213.jpg" alt="AiESL 2.13 inch electronic shelf label">
</div>
```

The image auto-fills the box (`object-fit: cover`). Keep a descriptive
`alt` text — it helps SEO.

### On the About page (about.html)

Same idea — find the `.about-visual` block and the comment
`REPLACE WITH: <img ...>` for a company/facility photo.

---

## 2. Product links

Each product card on `products.html` is an `<a>` tag, already linked to
its real product page on aieinksmart.com:

| Card                | Links to |
|---------------------|----------|
| AiESL Tag 2.13"     | product-black-shell-213-inch-electronic-shelf-label.html |
| AiESL Tag 2.90"     | product-black-shell-29-inch-electronic-shelf-label.html |
| AiESL Tag 13.3"     | product-133-inch-full-color-series-e6electronic-retail-label.html |
| AiESL HDaaS Platform| product-aieinksmart-esl-management-system.html |
| AiESL Pricing Agent | product-esl-local-mini-server.html |
| AiESL Flow Camera   | product-binocular-intelligent-passenger-flow-counting-machine...html |

To change any of these, edit the `href` on the matching `<a class="prod-card">`.

---

## 3. How to connect the quote form to a real backend

Open `app.js` and find the block marked:

```
>>> BACKEND API INTEGRATION POINT <<<
```

It currently runs in DEMO MODE (logs the data, shows the success screen,
sends nothing). Three ready-to-use options are written in the comments:

- **Option A** — your own API endpoint
- **Option B** — Formspree (no backend needed, just a form ID)
- **Option C** — HubSpot / Salesforce / CRM webhook

Replace the demo block with one of them and the form goes live.

---

## 4. Contact details

Current details (used in every footer + about page):

- Address: 132 Pengjiang Road, Baiyun District, Guangzhou, Guangdong, China
- Email: info@einksmart.com
- Phone: +86-13925118851

To change them, search-and-replace across the `.html` files.

---

## Going live

Upload the whole `aiesl-site/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or traditional hosting).
`index.html` is the entry point. Before launch, remember to:

- Replace product photo placeholders with real images
- Swap the form from DEMO MODE to a real backend
- Replace retailer names in the marquee with authorized logos
