# PEMF Trainer Board — Pulse & Field

An editorial, responsive educational website documenting an electronics-based **Pulsed Electromagnetic Field (PEMF) trainer board** and presenting a clearly labeled *idealized* signal/coil-field simulator.

**Live site (after GitHub Pages deployment):** https://sejuti-dhali.github.io/PEMF-Trainer-Board/

## Project scope

The supplied coursework report describes a 555-timer astable oscillator, a transistor driver, and a copper coil. The website preserves its *reported* observations but does not claim independent experimental replication or medical efficacy.

| Item | Source report value | Status |
|---|---:|---|
| Supply | 5 V (power bank; 2 A rating stated) | Reported |
| Coil | 60 turns, 10 cm diameter | Reported |
| Frequency | 65.74 Hz | Reported oscilloscope observation |
| Output voltage | 2.9 V | Reported measurement |
| Output current | 12 mA | Reported measurement; measurement location unclear |
| Magnetic field | 1.44 mT | Report calculation; not independently verified |
| Duty cycle | 92% | Reported design description; requires confirmation |

## Interactive learning module

- Change frequency (1–150 Hz), duty cycle, turns, radius, and **assumed** coil current.
- Observe the illustrative square-wave trace and calculated period/high-time.
- Examine the approximate center-field magnitude, using `B = μ₀ N I / (2r)` for a circular coil in free space.
- No sliders connect to physical hardware; the result is **not** a safety, efficacy, treatment, or calibration measurement.

At the default *assumed* 12 mA current, 60 turns and 50 mm radius, this elementary model gives about **9.05 µT**. This does **not** establish that the reported 12 mA was the winding current; neither result validates the report's 1.44 mT value. A verified winding-current measurement and geometry would be required for a meaningful comparison.

## Repository structure

```text
index.html               Single-page portfolio and interactive lab
assets/style.css         Responsive editorial design
assets/app.js            Dependency-free educational model
assets/system-flow.svg   Original functional diagram
.github/workflows/       GitHub Pages deployment workflow
docs/engineering-notes.md Source audit, scope, limitations
tests/verify.js          Source-level validation (Node.js)
```

## Run

Open `index.html` in a browser. No build system or Python installation is required. Optional source checks: `node tests/verify.js`.

## Source attribution and provenance

This web presentation is **derived from a supplied 17-page undergraduate project report** titled *Design and Implementation of a Pulsed Electromagnetic Field (PEMF) Trainer Board for Therapeutic Application*, Department of Biomedical Engineering, Khulna University of Engineering & Technology, May 2025. The cover identifies **Sadia Islam** as the submitting student. The report itself is not redistributed, since it includes identifying information and instructor annotations. All figures used in this website are new, schematic illustrations, not photographs of the prototype.

This website's repository ownership is not evidence of authorship of the physical prototype. Credit for the source report and any independent contributors should be retained and clarified before portfolio claims are made.

## Safety and limitations

This is an educational electronics website, **not** medical advice or a clinically validated therapy device. Human application, safety, dosage, and therapeutic outcomes are outside the evidence presented. The source report's field calculation and the first transistor part number require technical reconciliation. See [engineering notes](docs/engineering-notes.md).

## Technical references

- Project report, May 2025, chapters 2–5, pp. 9–15 (supplied source, not republished).
- Texas Instruments, [NE555 precision timer datasheet](https://www.ti.com/lit/ds/symlink/ne555.pdf), for oscillator principles.


## Original report figures

The website presents eight original figures from the
May 2025 PEMF trainer board coursework report:

- Electronic circuit schematic and methodology flowchart
- Vero board, copper coil and assembled prototype photographs
- Three original oscilloscope waveform photographs

The report identifies Sadia Islam as the submitting student.
Original hardware authorship is not implied by repository ownership.

These figures are documentary evidence of the source report,
not new experimental measurements or clinical validation.
