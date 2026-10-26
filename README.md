# Hangar — GitHub Pages website

A static, responsive website prepared for https://theaddonarchitect.github.io/ and the repository https://github.com/TheAddonArchitect/TheAddonArchitect.github.io.

## Publish with the included GitHub Actions workflow (recommended)

1. Extract this package. Copy the **contents** of `Hangar-GitHub-Pages` into the repository root. Keep `docs/`, `README.md`, and `.github/` at the root; do not add another enclosing folder. Commit to `main`. Include the hidden `.github/` folder when uploading.
2. Open repository **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions**.
3. Open **Actions → Publish Hangar website → Run workflow**, selecting `main`. Future pushes changing `docs/` will publish automatically.
4. Wait for the deployment to succeed. GitHub will show the published URL: https://theaddonarchitect.github.io/.

The website itself is plain HTML/CSS/JavaScript: no installation, build service, API keys or backend. GitHub's repository/account eligibility and workflow permission rules apply. Only `docs/` is published. The `.nojekyll` file avoids Jekyll processing.

## Alternative: publish directly from a branch

You may omit `.github/workflows/pages.yml` and upload `docs/` plus the README. In **Settings → Pages**, choose **Deploy from a branch → main → /docs → Save**. Use this alternative if you prefer no workflow file. Choose one publishing method; do not use both simultaneously.

Official GitHub instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Content and links

- `docs/index.html`: landing page, feature explorer, workflow, FAQs, release links.
- `docs/guide.html`: flight manual based on reviewed Hangar 0.7.0 project documentation.
- `docs/site-privacy.html`: this static website's data practices, separate from the desktop app privacy policy.
- `docs/404.html`: custom missing-page screen.
- `docs/assets/styles.css`: responsive styling, system fonts, reduced-motion support.
- `docs/assets/site.js`: accessible tabs, mobile navigation, current year. No tracking or persistence.
- `docs/assets/hangar-hero.webp`: optimized generated background, 1280 × 640.
- `docs/assets/hangar-hero.png`: original supplied background, 1280 × 640, used for the social preview.
- `docs/assets/favicon.svg`: original simple hangar-shaped site mark, not an established trademark claim.

The interface illustration is explicitly labeled illustrative and uses example content. It is not an app screenshot. Logbook and virtual airline functionality are labeled planned, matching the reviewed source. Check the manual and claims whenever the application changes.

Release buttons point to this repository's `/releases` page. They do not claim an installer is already uploaded. If application releases live in a different repository, update those links in `docs/index.html`. Attach only authorized, tested app artifacts to an actual GitHub release; this site package does not include the Windows app or Microsoft runtime files.

The repository link is not a declaration that Hangar's application code is open-source. No application license is assigned by this website package. Desktop legal policies from the earlier draft are intentionally not published as effective legal terms: publisher identity, privacy/security contacts, licensing and legal review remain pending.

## Local preview

From the repository root:

    python -m http.server 8787 --directory docs

Open http://localhost:8787/ in your browser. You may also open `docs/index.html` directly for a basic offline preview.

## Update the site

Edit files under `docs/`, then commit them to `main`. Changes to the README do not affect the visible page. No third-party fonts or JavaScript CDNs are used. External GitHub links follow GitHub's own privacy practices.

The canonical, social and sitemap URLs target the root of TheAddonArchitect.github.io. If moving to a project subdirectory or custom domain, update those URLs, `docs/404.html`, and `docs/robots.txt` accordingly. Do not add a CNAME unless you own and configure the corresponding domain.
