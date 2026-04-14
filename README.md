# WineBridge — Georgian Wine Discovery Platform

A fully static, SEO-optimised website celebrating 8,000 years of Georgian winemaking tradition.
Built with HTML5, Bootstrap 5.3.8, and vanilla JavaScript. Designed for GitHub Pages deployment.

## Live Site

> Replace `YOUR_USERNAME` with your GitHub username after deployment.
> `https://YOUR_USERNAME.github.io/WineBridge/`

---

## Project Structure

```
WineBridge/
├── index.html                        # Homepage / Landing
├── wines.html                        # Wine catalog (4 wines)
├── wineries.html                     # Winery catalog (2 estates)
├── chateau-mukhrani.html             # Château Mukhrani estate page
├── shumi-winery.html                 # Shumi Winery estate page
├── mukhrani-saperavi-reserve.html    # SEO TARGET — Saperavi Reserve detail
├── mukhrani-rkatsiteli.html          # Rkatsiteli wine detail
├── shumi-iberiuli-saperavi.html      # Iberiuli Saperavi wine detail
├── shumi-tsinandali.html             # Tsinandali wine detail
├── contact.html                      # Contact page
├── css/
│   └── style.css                     # Design system + custom styles
├── js/
│   └── main.js                       # Scroll animations, smooth scroll, forms
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | Bootstrap 5.3.8 + custom CSS |
| Typography | Google Fonts: Noto Serif + Manrope |
| JavaScript | Vanilla JS (ES6+) |
| Hosting | GitHub Pages (static) |

---

## Design System

| Token | Value |
|-------|-------|
| Primary (Burgundy) | `#722F37` |
| Secondary (Warm Brown) | `#8B6914` |
| Tertiary (Soft Gold) | `#C9A96E` |
| Background (Cream) | `#F5F0EB` |
| Text (Charcoal) | `#2C2C2C` |
| Headline font | Noto Serif |
| Body font | Manrope |

---

## SEO Strategy

### Target Page
`mukhrani-saperavi-reserve.html` — optimised for **"Georgian Saperavi Reserve wine"**

### On-Page SEO
- Unique `<title>` and `<meta name="description">` on every page
- One `<h1>` per page with proper heading hierarchy
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Descriptive, keyword-rich `alt` attributes on all images
- JSON-LD structured data on the target page (Product schema)
- Canonical URLs on every page
- XML sitemap with priority weighting (target page: 0.95)

### Internal Link Strategy
Every page links to `mukhrani-saperavi-reserve.html` using varied, keyword-rich anchor text:
- "Château Mukhrani Saperavi Reserve"
- "premium Georgian Saperavi Reserve wine"
- "explore our Saperavi Reserve"
- "Georgia's premier Saperavi Reserve"

Navigation and footer links use `rel="nofollow"` to concentrate link equity through in-content links.


---

*Built with passion for Georgian wine culture.*
