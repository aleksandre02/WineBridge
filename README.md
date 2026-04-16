# WineBridge — Georgian Wine Discovery Platform

A fully static, SEO-optimised website celebrating 8,000 years of Georgian winemaking tradition.
Built with HTML5, Bootstrap 5.3.8, and vanilla JavaScript. Designed for GitHub Pages deployment.

## Live Site

> `https://aleksandre02.github.io/WineBridge/`

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
├── css/style.css                     # Design system + custom styles
├── js/main.js                        # Scroll animations, smooth scroll, forms
├── images/                           # Photo assets
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

## SEO Strategy

### Target Page
`mukhrani-saperavi-reserve.html` — optimised for **"Georgian Saperavi Reserve wine"**

Every page links to the target using varied keyword-rich anchor text.
Navigation and footer links use `rel="nofollow"` to concentrate PageRank through in-content links.

---

## Schema.org Markup

| Page | Schema Type | Rich Snippet |
|------|------------|-------------|
| `mukhrani-saperavi-reserve.html` | Product + AggregateRating | Star ratings |
| `chateau-mukhrani.html` | Winery (LocalBusiness) | Business panel |
| `contact.html` | FAQPage | Expandable Q&A |
| `shumi-winery.html` | TouristAttraction + Museum | Attraction card |
| `index.html` | WebSite + Organization | Sitelinks |

---

## Deployment (GitHub Pages)

Repo → **Settings** → **Pages** → Source: `main` / `/(root)` → **Save**

Site: `https://aleksandre02.github.io/WineBridge/`

---

*Built with passion for Georgian wine culture.*
