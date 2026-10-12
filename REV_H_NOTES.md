# Revision H — October 12, 2026

**Austurusa** is repositioned as an independent engineering R&D practice focused on mixed-signal IC-adjacent and PCB hardware, digital ASIC/FPGA design, power conversion, real-time embedded systems and hardware characterization with statistics/ML as supporting tools.

## New core technical item
EXP-005 — Formally Verified Power-Converter Controller, **proposed**.
- Independent PWM safety kernel; flexible controller is not assumed trustworthy.
- Planned digital proofs: complementary pin nonoverlap, dead time, qualified current-limit response, on/off constraints, fault containment, configuration non-bypass, watchdog and bounded conditional soft-start recovery.
- Proof boundary: finite tick guarantees rely on clocks/reset/CDC assumptions; real gate delays and flyback magnetics are not digitally proven.
- Prototype sequence: requirements -> SymbiYosys checks -> low-voltage synchronous buck FPGA board -> optional digital-only Tiny Tapeout -> silicon/board timing and fault characterization.
- As of Rev H, no claim that EXP-005 has RTL, proofs, physical design, working hardware or certification.

## Structural revisions
- Homepage, new /capabilities, /work, /research archive index, refreshed experiments index and About.
- Prior research and software materials retained as archives.
- EXP-004 FIPE data stays as previously reported, caveated for specific completed snapshot.
- Style is deliberately academic/minimal rather than startup marketing.
- robots, Vercel config, PDF attachments and original layout images preserved.
