Hangar

**Your flight simulation companion.**

One workspace for your library, flight preparation, and simulator setup.

[Website](https://theaddonarchitect.github.io/) · [Flight Manual](https://theaddonarchitect.github.io/guide.html) · [Releases](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/releases) · [Website Feedback](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/issues)

</div>

![An airliner inside a hangar at blue hour](docs/assets/hangar-hero.webp)

## Overview

Hangar brings **Microsoft Flight Simulator add-on management, flight preparation, scenery discovery, and live aircraft tracking** into one Windows desktop companion.

This repository contains the **Hangar product website** hosted on GitHub Pages. The website introduces the application, explains its requirements, and provides a searchable flight manual. It does not include the Windows application or Microsoft runtime files.

### What the website includes

- **Product overview** - an aviation-themed introduction and interactive workspace illustrations.
- **Capabilities** - library organization, profiles, activation, flight preparation, scenery, weather, and tracking.
- **Setup guidance** - system requirements, external connections, and a preflight workflow.
- **Documentation** - a searchable flight manual, FAQs, and troubleshooting guidance.
- **Responsive design** - desktop and mobile layouts, keyboard-accessible controls, and reduced-motion support.

> **Feature scope:** Application information reflects the reviewed **Hangar 0.7.0** source and documentation. This is not a statement that 0.7.0 is the latest public release. Logbooks, landing statistics, and virtual airline integrations are identified as planned concepts.

## Quick navigation

[Publish the website](#publish-the-website) · [Preview locally](#preview-locally) · [Project structure](#project-structure) · [Update the website](#update-the-website) · [Product and licensing notes](#product-and-licensing-notes)

## Publish the website

### Option 1 · GitHub Actions — recommended

1. **Upload the website files.** Copy the contents of the extracted `Hangar-GitHub-Pages` folder into the repository root. Keep `docs/`, `README.md`, and `.github/` at that level, then commit to `main`.
2. **Choose the publishing source.** Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. **Run the workflow.** Open **Actions → Publish Hangar website → Run workflow** and select `main`.
4. **Check the deployment.** After a successful run, the website will be available at [theaddonarchitect.github.io](https://theaddonarchitect.github.io/).

Future pushes that change files under `docs/` trigger the included workflow automatically. The workflow publishes **only `docs/`**.

> **Upload tip:** Include the hidden `.github/` folder. Upload the extracted contents, not the ZIP file or an extra enclosing folder.

### Option 2 · Deploy from a branch

For a simpler setup without a custom workflow:

1. Omit `.github/workflows/pages.yml` from the repository.
2. Upload `docs/` and `README.md` to the `main` branch.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch → main → /docs → Save**.

**Choose one publishing method.** If switching methods, update the Pages source and remove or disable the unused custom workflow.

The site uses **plain HTML, CSS, and JavaScript**. It needs no dependency installation, compilation, backend, database, or API keys. GitHub Pages eligibility and deployment permissions still apply. The included `.nojekyll` file bypasses Jekyll processing.

**Official documentation:** [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Use a custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Preview locally

From the repository root, run:

```sh
python -m http.server 8787 --directory docs
```

Open [localhost:8787](http://localhost:8787/) in your browser. Press **Ctrl+C** in the terminal to stop the server.

You can also open `docs/index.html` directly for a basic offline preview. External links still require an internet connection.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml           # Optional GitHub Actions deployment
├── docs/                       # Published website
│   ├── assets/
│   │   ├── favicon.svg
│   │   ├── hangar-hero.webp
│   │   ├── hangar-hero.png
│   │   ├── site.js
│   │   └── styles.css
│   ├── .nojekyll
│   ├── index.html
│   ├── guide.html
│   ├── site-privacy.html
│   ├── 404.html
│   ├── robots.txt
│   └── sitemap.xml
├── README.md
└── VERIFICATION.md
```

| File | Purpose |
| --- | --- |
| [`docs/index.html`](docs/index.html) | Landing page, capability explorer, requirements, workflow, FAQs, and release links. |
| [`docs/guide.html`](docs/guide.html) | Searchable flight manual based on the reviewed 0.7.0 documentation. |
| [`docs/site-privacy.html`](docs/site-privacy.html) | Website privacy information, separate from the desktop application's policy. |
| [`docs/404.html`](docs/404.html) | Custom missing-page screen. |
| [`docs/assets/styles.css`](docs/assets/styles.css) | Layout, typography, responsive behavior, and reduced-motion styling. |
| [`docs/assets/site.js`](docs/assets/site.js) | Feature tabs, mobile navigation, manual search, and current-year display. |
| [`docs/assets/hangar-hero.webp`](docs/assets/hangar-hero.webp) | Optimized **1280 × 640 px** website background. |
| [`docs/assets/hangar-hero.png`](docs/assets/hangar-hero.png) | Original **1280 × 640 px** image used for social previews. |
| [`VERIFICATION.md`](VERIFICATION.md) | Recorded checks and verification limits. |

## Update the website

1. Edit the relevant files under `docs/`.
2. Preview the changes and check navigation, text, and layouts.
3. Commit to `main`; the selected publishing method handles deployment.

Changes to this README affect the repository presentation, **not the public website**.

### Content and release links

- Keep capability descriptions and manual instructions aligned with the application.
- Clearly distinguish **implemented features**, **setup requirements**, and **planned concepts**.
- Workspace illustrations use example content and are labeled accordingly; they are not application screenshots.
- Release buttons currently point to this repository's [Releases page](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/releases). Update the release links throughout `docs/` if application downloads are hosted elsewhere.
- Publish only authorized, tested application artifacts. The website does not claim that an installer is already available.

### Typography and assets

The website uses **system fonts**, locally hosted imagery, and local scripts. It does not load third-party font or JavaScript CDNs. Its own code includes no analytics, advertising trackers, or persistent browser storage. GitHub hosting and external links follow their providers' privacy practices.

GitHub controls the README's font family and exact type sizes. This file uses native Markdown headings, bold text, tables, and code blocks for consistent rendering on GitHub.

### Domain changes

Canonical URLs, social previews, the sitemap, and the custom 404 page target:

```text
https://theaddonarchitect.github.io/
```

If moving to a custom domain or project subdirectory, review URLs in `docs/index.html`, `docs/404.html`, `docs/robots.txt`, and `docs/sitemap.xml`, along with any other absolute links. Add a `CNAME` only when you own and have configured the corresponding domain.

## Product and licensing notes

- **Independent product.** Hangar is not affiliated with Microsoft, Valve, or Navigraph.
- **Simulation use.** Routes, weather, maps, and telemetry are for flight simulation and entertainment, not real-world aviation decisions.
- **Application licensing.** Hosting this website repository does not make Hangar's desktop application open-source or grant an application license.
- **Legal documents.** Draft desktop policies are not published as effective agreements. Publisher details, contact channels, licensing decisions, and review remain outstanding.
- **Product claims.** This website does not promise enterprise security certifications, service-level agreements, team accounts, or cloud synchronization.

For ordinary website problems, use [Website Feedback](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/issues). **Do not post credentials, private files, or security vulnerability details in public issues.**

---

**The Addon Architect** · Hangar website · Revised October 25, 2026
