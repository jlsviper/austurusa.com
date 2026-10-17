# Austurusa Rev I — Theme + layout refinement

Small revision of the FIPE-first Rev H site, keeping the architecture, simulated report preview, CGI hero, engineering caveats, pilot CTA, and About bio unchanged.

## Changes
- Entire full-width mint-green `SPECIFICATION / STIMULUS / OBSERVATION / STATISTICS / ENGINEERING EVIDENCE` band removed (desktop and mobile).
- Accessible light/dark mode button in header, visible on desktop and mobile. Label and icon reflect the next action. Button is keyboard accessible and state is persistent using localStorage when allowed.
- Light theme restyles the entire site (hero, sections, cards, graph panels, CTA, About, navigation, footer), keeping instrumentation visuals on intentionally dark surfaces for readability.
- The selected theme is applied in `<head>` before CSS loads to avoid a bright flash; the 404 page uses the same theme system.
- Browser toolbar theme-color follows the selected mode.

## Preview
From this extracted directory, run `python3 -m http.server 8000` and open http://localhost:8000 . Both themes work without a build step.

## Deploy
Run `bash publish.sh` **inside this extracted Rev-I directory**. The script attaches this directory to the existing GitHub history, restores the original founder portrait from current `main`, stages and commits the site, and pushes to `main` to trigger the existing Git-connected Vercel production project. No separate clone or deploy folder.

It intentionally does not contain a reconstructed or generated Jack portrait. It restores the exact original JPEG from Git history before any push and refuses to publish if it cannot.

## Measurement claims
- Demonstration data are from simulated parts, **not physical measured silicon**.
- Earlier 50 MHz physical-design baseline is not a claim that more recent RTL changes completed a new GDS signoff.
- No private HTML characterization or Monte Carlo reports are included in the deployment.
