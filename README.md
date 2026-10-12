# Austurusa Research Website

Static institutional site for Austurusa.

## Local preview

From this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Recommended permanent workflow

Treat the Git repository as the source of truth for the website.

### First-time setup

```bash
git init
git add .
git commit -m "Initial Austurusa research site"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/austurusa.com.git
git push -u origin main
```

Create the empty GitHub repository before the final two commands.

### Every future update

1. Edit/add files locally.
2. Preview with `python3 -m http.server 8000`.
3. Commit and push:

```bash
git add .
git commit -m "Add AP-002 problem statement"
git push
```

Once Vercel is connected to the GitHub repository, each push to `main` becomes a production deployment automatically. Work on a separate branch when you want a preview deployment before merging.

Example:

```bash
git checkout -b ap-002
git add .
git commit -m "Draft AP-002"
git push -u origin ap-002
```

Vercel can create a preview URL for that branch; merge to `main` only when the draft is ready.

## Content taxonomy

- `AP-###` — Open Problem
- `RN-###` — Research Note
- `EXP-###` — Experiment / implementation / measurement artifact
- Working Paper — manuscript with a coherent research claim, not yet a preprint
- Preprint — publicly posted manuscript
- Published — peer-reviewed or formally published work

Keep status explicit. Do not promote simulation to measurement, implementation to research result, or conjecture to theorem.

## Revision F

Revision F adds AP-002 — Adaptive Causal Worlds, including the website problem page, a compiled PDF problem statement, and self-contained pdfLaTeX source.

## Revision G

- Adds EXP-004 / FIPE, including the IHP 130 nm routed-layout and cell-detail images.
- Updates the home page, experiments index, and sitemap.
- Removes the Meta experience entry and adds Python-based power anomaly detection under Quest Global.
- All claims about FIPE's verification and timing figures are project-reported; this is not a fabricated-silicon measurement report.

### Safe deployment (existing clone)

Copy the contents of this extracted directory into a clean checkout of `jlsviper/austurusa.com`, then `git add -A`, commit, and push. Do not copy the parent directory as a nested folder.
