# Austurusa / Rev J — Compact theme control fix

Rev J preserves the FIPE-first layout, hero artwork, simulated characterization preview, measurement caveats, pilot proposition and founder section from Rev I.

## Fixed
- Replaces the oversized desktop theme control with an **icon-only circular button**, 42px desktop / 40px mobile. Sun means switch to light; moon means switch to dark.
- Removes the visible “Light mode” label and native HTML `title` tooltip.
- Retains accessible, dynamically updated aria-labels, keyboard operation and pressed state.
- A click swaps the theme in place without reload; the choice survives reloads and later visits via localStorage.
- Crucially: **CSS and JS are now versioned as `site.rev-j.css` and `site.rev-j.js`**, preventing the old cached stylesheet from rendering the new SVG icons unstyled.
- Site-wide light and dark visuals remain available, including on the 404 page.

## Preview
Run `python3 -m http.server 8000` from this extracted directory and open `http://localhost:8000`.

## Deploy directly from extracted directory
Run `bash publish.sh` in this folder. It fetches the live Git history, restores the ORIGINAL portrait from the repo, stages this redesign and pushes to `main` for existing Git-connected Vercel production deployments. No clone or separate deployment folder is used. You must have Git credentials to push.

## Transparency
- The on-page comparison demonstrates simulation-based, not physical-silicon, characterization.
- Formal/physical-design claims refer to the earlier implementation baseline and do not imply a new signoff of all subsequent RTL changes.
- Private full HTML and Monte Carlo reports are not published.
