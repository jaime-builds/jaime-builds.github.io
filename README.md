# jaime.build

> Personal site for Jaime A. De La Paz, Enterprise Support Engineer and all-around person who likes to build things.

🌐 **Live site:** [jaime.build](https://jaime.build) *(GitHub Pages, custom domain via Cloudflare)*

---

## About

A personal site built with vanilla HTML, CSS, and JavaScript: no frameworks, no build tools, no dependencies. Home, About, Projects, Homelab, and one write-up page per finished project, all sharing one stylesheet.

Features a dark/light mode toggle (dark by default, preference saved to `localStorage`) and self-hosted fonts.

---

## Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Intro, featured projects, homelab snapshot, more projects, about teaser |
| About | `about/` | Full bio, skills & tech stack, certifications, hobbies |
| Projects | `projects/` | All projects, with status and stack |
| Project write-ups | `projects/<name>/` | One page per finished project: motivation, stack decisions, technical deep dives |
| Homelab | `homelab/` | Infrastructure tour: diagrams, hardware, every service |

Current write-ups: Movie Analytics Dashboard, Rust Rush, BookCrawler, Self-hosted infrastructure, Media automation stack, Calibre and Kindle setup.

---

## Tech

- **HTML5**: semantic structure, one folder per page
- **CSS**: one shared stylesheet, `docs/site.css`, with custom properties for theming
- **Vanilla JS**: `docs/site.js` wires the theme toggle; a one-line script in each `<head>` applies the saved theme before first paint
- **Fonts**: [Besley](https://fonts.google.com/specimen/Besley) (headings) and [Albert Sans](https://fonts.google.com/specimen/Albert+Sans) (body), self-hosted in `docs/fonts/` under the SIL Open Font License
- **Hosting**: GitHub Pages (automatic HTTPS), custom domain via Cloudflare

No npm. No build step. Clone and open.

---

## Local Development

```bash
git clone https://github.com/jaime-builds/jaime-builds.github.io.git
cd jaime-builds.github.io

# Serve locally (fonts load best over HTTP)
npx serve .
```

Pages link to each other and to `docs/` with relative paths (`../docs/site.css`). The one exception is `404.html`, which uses root-relative paths (`/docs/site.css`) because GitHub Pages serves it at whatever URL was missing.

---

## Deployment

The site deploys through **GitHub Pages** on every push to `main` (Settings → Pages, deploy from branch `main`, folder `/ (root)`). The `CNAME` file points it at `jaime.build`.

---

## Updating the Site

All pages load `docs/site.css` and `docs/site.js`. Page-specific layout lives in the same stylesheet, so there are no per-page `<style>` blocks to keep in sync.

**To add a project:** add a `.prow` card in `projects/index.html`, and a card in `index.html` if it should be featured.

**To add a write-up:** create `projects/<name>/index.html` by copying an existing write-up such as `projects/rust-rush/`, then:

1. Link it from the project's card in `projects/index.html`.
2. Add its URL to `sitemap.xml`.
3. Make it the first line of the "Lately" list on the home page.
4. Fill in the Published row in the facts card (`<time datetime="YYYY-MM-DD">`).
5. Set `og:image` to a 1200x630 PNG in `docs/` (social sites handle WebP unevenly), or leave `og-default.png`.

**When you change a write-up's content:** update its Updated row in the facts card.

**To add a cert:** add a row to the certifications list in `about/index.html`, newest first.

### Content Security Policy

Every page has its own CSP `<meta>` tag near the top of `<head>`. It allows inline scripts only by SHA-256 hash. Every page has the one-line theme script, and `about/index.html` also has the About dialog script. If you edit an inline script by even one character, the browser blocks it until the hash is updated, and the only sign is a console error.

After changing any inline script, print the current hashes and paste them into the CSP on **every** page:

```bash
python -c "import re,sys,hashlib,base64;[print(f, 'sha256-'+base64.b64encode(hashlib.sha256(s.encode()).digest()).decode()) for f in sys.argv[1:] for s in re.findall(r'<script>(.*?)</script>',open(f,encoding='utf-8').read(),re.S)]" index.html about/index.html
```

A new page copied from an existing one already has the right CSP.

---

## Repo Structure

```
jaime-builds.github.io/
├── index.html              # Home
├── about/index.html        # About
├── projects/
│   ├── index.html          # All projects
│   └── <name>/index.html   # One write-up per project
├── homelab/index.html      # Homelab tour
├── docs/                   # Site assets, not documentation: site.css, site.js, fonts,
│                           # screenshots, diagrams, preview images, logo, avatar
├── 404.html                # Not-found page (root-relative paths)
├── robots.txt
├── sitemap.xml             # One <url> per public page
├── favicon.ico
├── CNAME
└── README.md
```

---

## Contact

**Jaime A. De La Paz**
- 💼 [linkedin.com/in/jaimedelapaz](https://www.linkedin.com/in/jaimedelapaz)
- 🐙 [github.com/jaime-builds](https://github.com/jaime-builds)
- 📍 Rogers City, MI
