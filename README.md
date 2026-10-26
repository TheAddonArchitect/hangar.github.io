✈️ Hangar

**Your flight simulation companion.**

One workspace for your library, flight preparation, logbook, and simulator setup.

[Website](https://theaddonarchitect.github.io/) · [Flight Manual](https://theaddonarchitect.github.io/guide.html) · [Releases](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/releases) · [Website Feedback](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/issues)

</div>

![Hangar aviation website background](docs/assets/hangar-hero.webp)

## Overview

Hangar brings **Microsoft Flight Simulator add-on management, flight preparation, scenery discovery, aircraft tracking, and a local flight logbook** into one Windows desktop companion.

This repository contains the **Hangar product website** for GitHub Pages. It introduces the application, explains setup requirements, and provides a searchable flight manual. The website package does not include the Windows application or Microsoft runtime files.

### Website highlights

- **Product showcase** — four curated previews covering Library, Flight Planning, Flight Logbook, and VA/Pilot Settings.
- **Capabilities** — library organization, activation, profiles, scenery, weather, tracking, and pilot workflows.
- **Setup guidance** — system requirements, external connections, and a preflight walkthrough.
- **Documentation** — a searchable flight manual, FAQs, and troubleshooting notes.
- **Responsive design** — desktop and mobile layouts, keyboard-accessible controls, and reduced-motion support.

> [!NOTE]
> **Feature scope:** Information combines the accessible Hangar 0.7.0 source baseline with the desktop UI inspected on October 26, 2026. This does not establish the latest public version. Local recording requires supported telemetry; direct VA dispatch and PIREP submission require a separate provider integration.

## Quick navigation

[Publish](#publish-the-website) · [Local preview](#preview-locally) · [Project structure](#project-structure) · [Product previews](#curated-product-previews) · [Updates](#update-the-website) · [Product notes](#product-and-licensing-notes)

## Publish the website

### Option 1 — GitHub Actions · Recommended

1. **Upload the files.** Copy the contents of the extracted `Hangar-GitHub-Pages` folder into the repository root. Keep `docs/`, `README.md`, and `.github/` at that level. Commit to `main`.
2. **Select the publishing source.** Open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. **Run the workflow.** Open **Actions → Publish Hangar website → Run workflow**, selecting `main`.
4. **Check deployment.** After a successful run, open [theaddonarchitect.github.io](https://theaddonarchitect.github.io/).

Future pushes changing files under `docs/` trigger the included workflow. **Only `docs/` is published.**

> [!TIP]
> Include the hidden `.github/` folder. Upload the extracted contents, not the ZIP file or an extra enclosing folder.

### Option 2 — Deploy from a branch

For publishing without a custom workflow:

1. Omit `.github/workflows/pages.yml` from the repository.
2. Upload `docs/` and `README.md` to `main`.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch → main → /docs → Save**.

**Choose one publishing method.** When switching, update the Pages source and remove or disable the unused custom workflow.

The site uses **HTML, CSS, and JavaScript**, with no dependency installation, compilation, backend, database, or API keys. The included `.nojekyll` file bypasses Jekyll processing. GitHub Pages eligibility and deployment permissions still apply.

**GitHub documentation:** [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Use a custom workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Preview locally

Run this command from the repository root:

```sh
python -m http.server 8787 --directory docs
```

Open [localhost:8787](http://localhost:8787/). Press **Ctrl+C** in the terminal to stop the server.

You can also open `docs/index.html` directly for a basic offline preview. External links require an internet connection.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── pages.yml           # Optional Actions deployment
├── docs/                       # Published website
│   ├── assets/
│   │   ├── product-previews/   # SVG sources, PNGs, and WebP previews
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

| File or folder | Purpose |
| --- | --- |
| [`docs/index.html`](docs/index.html) | Landing page, product gallery, capabilities, logbook section, requirements, FAQs, and release links. |
| [`docs/guide.html`](docs/guide.html) | Searchable manual, including the current desktop UI update for VA and Logbook. |
| [`docs/site-privacy.html`](docs/site-privacy.html) | Website privacy information, separate from the desktop application's policy. |
| [`docs/404.html`](docs/404.html) | Custom missing-page screen. |
| [`docs/assets/product-previews/`](docs/assets/product-previews/) | Four curated visuals with editable SVGs, **3200 × 2000 px PNGs**, and optimized WebP copies. |
| [`docs/assets/styles.css`](docs/assets/styles.css) | Layout, typography, responsive styling, and reduced-motion support. |
| [`docs/assets/site.js`](docs/assets/site.js) | Tabs, mobile navigation, manual search, and the current year. |
| [`docs/assets/hangar-hero.webp`](docs/assets/hangar-hero.webp) | Optimized **1280 × 640 px** website background. |
| [`docs/assets/hangar-hero.png`](docs/assets/hangar-hero.png) | Original **1280 × 640 px** image for social previews. |
| [`VERIFICATION.md`](VERIFICATION.md) | Completed checks, evidence, and verification limits. |

## Curated product previews

The gallery presents **Library**, **Flight Planning**, **Flight Logbook**, and **VA/Pilot Settings** in a consistent visual style. Each preview opens as a full-resolution PNG; editable SVG sources and optimized WebP copies are included.

> [!IMPORTANT]
> These are **curated interface illustrations**, not direct screenshots. Flight, pilot, and library values are labeled sample data. They do not represent live telemetry, verified flight records, user performance, or a connected VA provider.

The visuals omit Windows chrome, cursors, personal library content, external map tiles, and third-party thumbnail artwork. The route illustration is original vector artwork.

### Virtual Airline & Logbook scope

The desktop UI inspected on **October 26, 2026** exposes:

- **Local ACARS status** and flight-recording information.
- **Flight statistics** — monthly and lifetime hours, distance, completed flights, milestones, and aircraft breakdown.
- **Flight history** — search, sorting, duration, and landing-rate columns.
- **Export controls** — CSV, XLSX, and JSON.
- **Pilot details** — airline, callsign, rank, and type ratings stored locally.

The inspection did **not** complete a simulated flight, test export outputs, or connect a VA provider. Direct dispatch downloads and PIREP submissions need approved provider access and authentication.

The earlier window captures remain in the **v3 archive** and are excluded from the **v4 package**.

## Update the website

1. Edit the relevant files under `docs/`.
2. Preview locally and check content, navigation, and layouts.
3. Commit to `main`; the selected publishing method handles deployment.

**README edits change the repository presentation.** Public website content is maintained under `docs/`.

### Content and release links

- Keep capability descriptions and setup instructions aligned with the application.
- Distinguish **available controls**, **tested behavior**, **setup requirements**, and **provider integrations**.
- Release buttons currently point to this repository's [Releases page](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/releases). Update the links throughout `docs/` if application downloads move elsewhere.
- Publish only authorized, tested application files. The website does not establish that an installer is already available.

### Typography and assets

The website uses **system fonts**, local imagery, and local scripts, without third-party font or JavaScript CDNs. Its own code includes no analytics, advertising trackers, or persistent browser storage. GitHub hosting and external links follow their providers' privacy practices.

GitHub controls the README's font family and exact type sizes. This file uses **native Markdown headings, emphasis, tables, callouts, and code blocks** for consistent rendering.

### Domain changes

Canonical URLs, social previews, the sitemap, and the custom 404 page target [theaddonarchitect.github.io](https://theaddonarchitect.github.io/).

If moving to another domain or a project subdirectory, review absolute URLs in `docs/index.html`, `docs/404.html`, `docs/robots.txt`, `docs/sitemap.xml`, and other affected files. Add a `CNAME` only for a domain you own and have configured.

## Product and licensing notes

- **Independent product:** Hangar is not affiliated with Microsoft, Valve, or Navigraph.
- **Simulation use:** Routes, weather, maps, and telemetry are for simulation and entertainment, not real-world aviation decisions.
- **Application licensing:** This website repository does not make the desktop application open-source or grant an application license.
- **Legal documents:** Draft desktop policies are not published as effective agreements; publisher details, contacts, licensing decisions, and review remain outstanding.
- **Product claims:** The website does not promise enterprise security certifications, service-level agreements, team accounts, or cloud synchronization.

For ordinary website issues, use [Website Feedback](https://github.com/TheAddonArchitect/TheAddonArchitect.github.io/issues). **Keep credentials, private files, and vulnerability details out of public issues.**

---

**The Addon Architect** · Hangar website · Revised October 26, 2026
