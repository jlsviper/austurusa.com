# Austurusa — Research & Engineering Website (Revision H)

Static site built from the user's authentic Revision G archive, preserving existing PDF reports, FIPE layout images, experience details and older research pages.

## Changes in H (12 October 2026)

- Repositions homepage toward IC/FPGA, mixed-signal board-level electronics, real-time embedded systems, power conversion and measurement-based analysis.
- Creates `/capabilities/`, `/work/` and `/research/` without removing existing research and experiment URLs.
- Adds `EXP-005` `/experiments/verified-power-controller.html` as a **planned** formally verified power-converter controller safety-kernel project. No proofs, silicon or hardware are claimed.
- Preserves `EXP-004` FIPE as flagship implemented digital ASIC work; clarifies revision-specific physical verification.
- Retains completed `EXP-003` Geiger counter report, AP-001/AP-002 and RN-001; moves unrelated software experiment from featured content into the archive.
- About retains the actual historical experience from Revision G, including the Quest Global Python power-anomaly-detection correction.
- Adds sitemap entries, richer metadata, and accessible mobile-friendly architecture diagram in HTML/CSS.

## Production deployment: existing local Git clone (recommended)

Extract the ZIP, then copy the **contents of `austurusa-research-rev-h/`** into the root of your already cloned `jlsviper/austurusa.com` repository. Don't accidentally create a nested directory.

```bash
cd /path/to/austurusa.com
rsync -av /path/to/unzipped/austurusa-research-rev-h/ ./
git status
git add -A
git commit -m "Rev H: electronic systems focus and verified power controller proposal"
git push origin main
```

`rsync` intentionally does not delete unrelated files from the checkout; review `git status` before committing. Your connected Vercel Git integration should deploy on push to the production branch. No direct deploy command is required if this integration is already configured.

## Local preview

```bash
cd /path/to/unzipped/austurusa-research-rev-h
python3 -m http.server 8000
```

Visit <http://localhost:8000>. This site contains only static HTML/CSS and existing PDFs/images, and does not require an npm build.

## Evidence levels

- Proposed: concept, scope or architecture **without formal / physical evidence**.
- Implemented: an RTL, software, schematic or physical-design artifact documented for a specified revision.
- Verified: check type, exact design revision, tool configuration and assumptions provided.
- Measured: actual board/silicon/instrument conditions, calibration, uncertainty and method stated.
- Certified: only with independent, applicable assessment evidence; **not claimed here**.

Status is associated with each project individually; prior-art patterns like Simplex are credited, and digital RTL proofs never stand in for analog hazard analysis.
