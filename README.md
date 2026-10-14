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

Current write-ups: Movie Analytics Dashboard, Rust Rush, Self-hosted infrastructure, Media automation stack, Calibre and Kindle setup.

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

# Serve locally (root-relative paths and fonts work best over HTTP)
npx serve .
```

---

## Deployment

The site deploys through **GitHub Pages** on every push to `main` (Settings → Pages, deploy from branch `main`, folder `/ (root)`). The `CNAME` file points it at `jaime.build`.

---

## Updating the Site

All pages load `docs/site.css` and `docs/site.js`. Page-specific layout lives in the same stylesheet, so there are no per-page `<style>` blocks to keep in sync.

**To add a project:** add a `.prow` card in `projects/index.html`, and a card in `index.html` if it should be featured.

**To add a write-up:** create `projects/<name>/index.html`, following an existing write-up such as `projects/rust-rush/`, then link it from the project's card.

**To add a cert:** add a row to the certifications list in `about/index.html`, newest first.

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
├── docs/                   # site.css, site.js, fonts, screenshots, diagrams, logo, avatar
├── CNAME
└── README.md
```

---

## Contact

**Jaime A. De La Paz**
- 💼 [linkedin.com/in/jaimedelapaz](https://www.linkedin.com/in/jaimedelapaz)
- 🐙 [github.com/jaime-builds](https://github.com/jaime-builds)
- 📍 Rogers City, MI
