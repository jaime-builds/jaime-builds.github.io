# jaime.builds — Personal Portfolio Site

> Personal portfolio and resume site for Jaime A. De La Paz — Technical Support Engineer, IT Manager, and all-around person who likes to build things.

🌐 **Live site:** [jaime-builds.github.io](https://jaime-builds.github.io) *(or [jaime.build](https://jaime.build) if custom domain is configured)*

---

## About

A single-page portfolio site built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Just one file that loads fast and works everywhere.

Features a dark/light mode toggle (preference saved to `localStorage`), smooth scroll navigation, and a terminal-inspired aesthetic that feels at home alongside my other projects.

---

## Sections

| Section | Description |
|---|---|
| **About** | Who I am, what I do, where I'm based |
| **Skills** | Full tech stack across 8 categories |
| **Projects** | Movie Analytics Dashboard & Rust Rush |
| **Certifications** | All current certs with status badges |
| **Hobbies** | Movies, games, music, hockey |
| **Contact** | Email, phone, LinkedIn, GitHub |

---

## Tech

- **HTML5** — semantic structure
- **CSS3** — custom properties (CSS variables) for theming, no frameworks
- **Vanilla JS** — theme toggle, localStorage persistence, smooth scroll
- **Fonts** — [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) + [Syne](https://fonts.google.com/specimen/Syne) via Google Fonts
- **Hosting** — GitHub Pages (free, automatic HTTPS)

No npm. No build step. Clone and open.

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/jaime-builds/jaime-builds.github.io.git
cd jaime-builds.github.io

# Open in browser — no server needed
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

Everything lives in `index.html`. The sections are clearly commented:

```
<!-- ABOUT -->
<!-- SKILLS -->
<!-- PROJECTS -->
<!-- CERTIFICATIONS -->
<!-- HOBBIES -->
<!-- CONTACT -->
```

To add a new project card, copy an existing `.project-card` block and update the content. To add a cert, copy a `.cert-item` block.

---

## Repo Structure

```
jaime-builds.github.io/
├── index.html          # The entire site
├── .gitignore
├── README.md
└── docs/               # Screenshots, assets (optional)
```

---

## Other Projects

| Project | Description | Stack |
|---|---|---|
| [movie-analytics-dashboard](https://github.com/jaime-builds/movie-analytics-dashboard) | Full-stack movie discovery platform with analytics | Python, Flask, PostgreSQL |
| [rust-rush](https://github.com/jaime-builds/rust-rush) | Real-time tower defense game | Go, React, TypeScript, WebSockets |

---

## Contact

**Jaime A. De La Paz**
- 📧 [delapazjaime@yahoo.com](mailto:delapazjaime@yahoo.com)
- 💼 [linkedin.com/in/jaimedelapaz](https://www.linkedin.com/in/jaimedelapaz)
- 🐙 [github.com/jaime-builds](https://github.com/jaime-builds)
- 📍 Rogers City, MI — Remote preferred
