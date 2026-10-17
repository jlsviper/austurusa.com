# Austurusa Rev H — FIPE-first site redesign

Dark, premium, single-page marketing website. Plain static HTML/CSS/JS: no npm, build step, external runtime libraries, tracking pixels, or third-party fonts.

## Sections

- Hero: FIPE first-silicon pitch with generated semiconductor artwork.
- Architecture: program, observe, quantify; diagram is an illustration, not a photograph of a device.
- Interactive report preview: **simulation data only** (supplier A/B timing t99) from the provided sample report.
- Evidence: distinguishes public ASIC/RTL baseline, private simulated characterization, and private Monte Carlo qualification.
- Protocols: I2C and SPI as first pilot; others explicitly labeled simulation-level.
- Design partner pilot CTA: opens an email draft with relevant fields.
- Founder: retains supplied biography and original portrait location.

## IMPORTANT: preserve the founder photo

The original portrait is intentionally **not reconstructed, replaced, or synthesized**. This ZIP cannot fetch that existing photo. The site refers to `/assets/jack-shaquer.jpg`. During deployment, restore that original JPEG from the existing GitHub `main` history:

```sh
git show origin/main:assets/jack-shaquer.jpg > assets/jack-shaquer.jpg
```

If the repository uses another photo path, fetch it from the current website/repository and place the real file at `assets/jack-shaquer.jpg` before committing. **Do not deploy without checking that the original photo is present.**

## Preview

In this folder: `python3 -m http.server 8000`, then open http://localhost:8000. The founder portrait is only available after the original asset is restored.

## Deployment workflow

Run `bash publish.sh` from **inside the unzipped Rev-H folder**, not a new clone or `deploy` directory. The script fetches existing Git history, restores the real portrait, replaces the tracked site, and pushes to `main` to trigger the connected Vercel production deployment. Review `publish.sh` first if you want to inspect the exact operations.

## Safety / claims

- Engineering evidence is described by stage; physical measurements are *not* implied by simulated numbers.
- Latest coding-stage FIPE RTL changes require renewed ASIC GDS, notwithstanding the earlier clean sign-off baseline.
- The preview t99 values are model-estimated from a simulated two-supplier EEPROM study.
- Keep private HTML characterization and qualification reports private until engineering review (including I2C data-hold reference semantics).
- Hero chip artwork is creative CGI, not a photograph of the FIPE die.
