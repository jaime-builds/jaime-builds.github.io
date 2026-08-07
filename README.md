# jaime.builds — Personal Portfolio Site

> Personal portfolio and resume site for Jaime A. De La Paz — Enterprise Support Engineer and all-around person who likes to build things.

🌐 **Live site:** [jaime.build](https://jaime.build) *(GitHub Pages, custom domain via Cloudflare)*

---

## About

A personal portfolio site built across four pages with vanilla HTML, CSS, and JavaScript, no frameworks, no build tools, no dependencies. Home, About, Projects, and a full Homelab tour, each a standalone HTML file sharing one design system.

Features a dark/light mode toggle (preference saved to `localStorage`), smooth scroll navigation, and a warm, editorial look built around serif headings and a gold accent.

---

## Pages

| Page | Path | Description |
|---|---|---|
| Home | `index.html` | Intro, featured projects, homelab snapshot, more projects, about teaser |
| About | `about/` | Full bio, skills & tech stack, certifications, hobbies |
| Projects | `projects/` | Full projects grid, live status badges, tags |
| Movie Analytics Dashboard write-up | `projects/movie-analytics-dashboard/` | Dedicated write-up: motivation, stack decisions, and technical deep dives, with screenshots |
| Homelab | `homelab/` | Full infrastructure tour: diagrams, hardware, every service |

Project write-ups live in their own folder under `projects/`, one per finished project, and are linked from both the Projects grid card and the Home page featured card once they exist.

---

## Tech

- **HTML5** — semantic structure, one page per section
- **CSS3** — custom properties (CSS variables) for theming and dark/light mode, no frameworks
- **Vanilla JS** — theme toggle, localStorage persistence, smooth scroll
- **Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings), [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (labels, tags, code) via Google Fonts
- **Hosting** — GitHub Pages (free, automatic HTTPS), custom domain via Cloudflare

No npm. No build step. Clone and open.

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/jaime-builds/jaime-builds.github.io.git
cd jaime-builds.github.io

# Open any page in browser — no server needed
open index.html

# Or serve locally if you prefer
npx serve .
```

---

## Deployment

This site deploys automatically via **GitHub Pages** on every push to `main`.

To set it up from scratch:
1. Go to repo **Settings → Pages**
2. Set source to `Deploy from branch`
3. Branch: `main`, folder: `/ (root)`
4. Save — site goes live at `https://jaime-builds.github.io`

### Custom Domain (optional)

If using a custom domain like `jaime.build`:

1. Add your domain in **Settings → Pages → Custom domain**
2. At your registrar, add these DNS records:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  jaime-builds.github.io
```

3. Check **Enforce HTTPS** once DNS propagates (~24hrs)

---

## Updating the Site

Each page is a self-contained HTML file with its own `<style>` block, all sharing the same CSS variable system (`--bg`, `--text`, `--accent`, `--card-bg`, and so on) so the theme toggle stays consistent everywhere.

**To add or update a project card:** copy an existing `.project-card` block in `projects/index.html`, and in `index.html`'s featured section too if it should be featured there.

**To add a dedicated write-up page for a finished project:** create a new folder under `projects/` (e.g. `projects/your-project-name/`) with an `index.html`, following the structure in `projects/movie-analytics-dashboard/`. Then link to it from that project's card footer on both the Projects grid and the Home page featured card.

**To add a cert:** copy a `.cert-item` block in `about/index.html`.

---

## Repo Structure

```
jaime-builds.github.io/
├── index.html                          # Home page
├── about/
│   └── index.html                      # About page
├── projects/
│   ├── index.html                      # Projects grid
│   └── movie-analytics-dashboard/
│       └── index.html                  # Dedicated write-up page
├── homelab/
│   └── index.html                      # Homelab tour
├── docs/                                # Screenshots, diagrams, logo, avatar
├── .gitignore
└── README.md
```

---

## Other Projects

| Project | Description | Stack | Write-up |
|---|---|---|---|
| [movie-analytics-dashboard](https://github.com/jaime-builds/movie-analytics-dashboard) | Full-stack movie discovery platform with analytics | Python, Flask, PostgreSQL | [on-site](https://jaime.build/projects/movie-analytics-dashboard/) |
| [rust-rush](https://github.com/jaime-builds/rust-rush) | Real-time tower defense game | Go, React, TypeScript, WebSockets | — |

---

## Contact

**Jaime A. De La Paz**
- 📧 [delapazjaime@yahoo.com](mailto:delapazjaime@yahoo.com)
- 💼 [linkedin.com/in/jaimedelapaz](https://www.linkedin.com/in/jaimedelapaz)
- 🐙 [github.com/jaime-builds](https://github.com/jaime-builds)
- 📍 Rogers City, MI — Remote preferred
