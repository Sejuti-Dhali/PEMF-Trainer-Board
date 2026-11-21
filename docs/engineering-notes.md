# Engineering notes and evidence boundaries

## 1. Provenance

The underlying report is titled **Design and Implementation of a Pulsed Electromagnetic Field (PEMF) Trainer Board for Therapeutic Application**, BME 3200, Khulna University of Engineering & Technology, May 2025. The cover identifies Sadia Islam as the submitting student. This repository represents an **educational web interpretation**, not independent reproduction of all hardware experiments.

## 2. Circuit components and sequence

The report describes a 5 V power-bank supply, a 555 timer configured in astable mode, a transistor amplification/switching stage, a BD135 driver and a copper-coil output (pp. 9–12). The prototype is illustrated on a vero board in the source report (p. 11). This repository contains an *original functional block diagram*, deliberately not a component-level construction drawing.

**Part-number conflict:** p. 9 names an initial transistor `2N3319A`; p. 12 uses `2N3391A`. The identity must be checked against a verified bill of materials or component markings. Neither identifier is presented here as a confirmed final part.

## 3. Source observations

| Quantity | Reported value | Source | Interpretation |
| --- | ---: | --- | --- |
| Supply voltage | 5 V | p. 13 | Nominal power-bank voltage |
| Supply current | 2 A | p. 13 | Reported input rating/value; not necessarily winding current |
| Output voltage | 2.9 V | pp. 13, 15 | Measurement point unspecified |
| Output current | 12 mA | pp. 13, 15 | Measurement point unspecified |
| Coil turns | 60 | p. 13 | Winding count |
| Coil diameter | 10 cm | p. 13 | Reported coil geometry |
| Output frequency | 65.74 Hz | p. 15 | Reported oscilloscope measurement |
| Duty cycle | 92% | p. 9 | Described design value; not independently measured here |
| Field magnitude | 1.44 mT | pp. 13, 15 | Calculated in report; not independently verified |

The report also shows oscilloscope photographs on pp. 13–14. These photographs are **not** reproduced in this repository and the website's waveform is explicitly illustrative.

## 4. Model and interpretation

For an ideal circular coil of `N` coincident turns and radius `r` in air, the center-field magnitude from current `I` is

`B = μ₀ × N × I / (2 × r)`.

Using the **assumption** `I = 12 mA`, `N = 60`, and `r = 0.05 m`, the computed model is approximately `9.05 µT`. The reported 12 mA is **not confirmed as winding current**, so this numerical exercise does not reconstruct the experimental conditions. The report's `1.44 mT` calculation cannot be reproduced unambiguously without its current and geometry assumptions. Real pulse shapes, wire positions, magnetic materials, measurement probe position and equipment calibration must also be considered.

The timer's actual timing components and oscilloscope scale would be needed to verify the claimed 65.74 Hz and 92% duty cycle. The interactive control values are separate *what-if inputs*, not recovered original measurements.

## 5. Safety and scientific claims

No clinical experiment, patient cohort, controlled comparison or dose–response analysis is documented in the report. The phrase “therapeutic application” occurs in its title and motivation; the reported electronics results do not demonstrate therapeutic efficacy or human-use safety. Public-facing descriptions should not call this a proven treatment or prescribe human exposure.

## 6. Reproducibility roadmap

1. Reconcile the transistor identification and provide a confirmed bill of materials.
2. Record a complete annotated circuit schematic and timing-component values.
3. Measure actual coil current with a calibrated instrument and document waveform and probe position.
4. Validate pulse frequency, duty cycle, output voltage and coil heating across operating conditions.
5. Compare independently measured magnetic flux density against a correctly parameterized model.
6. Keep any subsequent safety or human-subject investigations separate from electronics verification and follow applicable review procedures.

## 7. References

- Source: 17-page BME 3200 project report, KUET, May 2025, especially pp. 9–15.
- Texas Instruments, [NE555 precision timer datasheet](https://www.ti.com/lit/ds/symlink/ne555.pdf).
