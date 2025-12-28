/**
 * @file chords-node.js
 * @description A collection of chord definitions.
 * This file contains standard 12-EDO chords as well as microtonal chords
 * from 19, 24, and 31-EDO systems.
 *
 * Each object represents a chord with its properties:
 * - edo: Equal Divisions of the Octave.
 * - name: The common name of the chord.
 * - steps: An array of intervals from the root note, in EDO steps.
 * - aliases: An array of alternative names or symbols for the chord.
 */

const chords = [
  // =======================================================================
  // --- 12-EDO Chords ---
  // =======================================================================

  // --- Basic Triads (3 notes) ---
  { edo: 12, name: 'Major', steps: [4, 7], aliases: ['M', ''] },
  { edo: 12, name: 'Minor', steps: [3, 7], aliases: ['m', 'min'] },
  { edo: 12, name: 'Diminished', steps: [3, 6], aliases: ['dim', '°'] },
  { edo: 12, name: 'Augmented', steps: [4, 8], aliases: ['aug', '+'] },

  // --- Suspended Chords (3 notes) ---
  { edo: 12, name: 'Suspended 4th', steps: [5, 7], aliases: ['sus4', 'sus'] },
  { edo: 12, name: 'Suspended 2nd', steps: [2, 7], aliases: ['sus2'] },

  // --- Seventh Chords (4 notes) ---
  { edo: 12, name: 'Major Seventh', steps: [4, 7, 11], aliases: ['maj7', 'M7'] },
  { edo: 12, name: 'Dominant Seventh', steps: [4, 7, 10], aliases: ['7', 'dom7'] },
  { edo: 12, name: 'Minor Seventh', steps: [3, 7, 10], aliases: ['m7', 'min7'] },
  { edo: 12, name: 'Diminished Seventh', steps: [3, 6, 9], aliases: ['dim7', '°7'] },
  { edo: 12, name: 'Half-Diminished Seventh', steps: [3, 6, 10], aliases: ['m7b5', 'ø7'] },
  { edo: 12, name: 'Minor Major Seventh', steps: [3, 7, 11], aliases: ['m(maj7)'] },
  { edo: 12, name: 'Augmented Seventh', steps: [4, 8, 10], aliases: ['aug7', '7#5'] },
  { edo: 12, name: 'Augmented Major Seventh', steps: [4, 8, 11], aliases: ['maj7#5'] },

  // --- Sixth Chords ---
  { edo: 12, name: 'Major Sixth', steps: [4, 7, 9], aliases: ['6', 'M6'] },
  { edo: 12, name: 'Minor Sixth', steps: [3, 7, 9], aliases: ['m6', 'min6'] },

  // --- Extended Chords ---
  { edo: 12, name: 'Add 9', steps: [2, 4, 7], aliases: ['add9', 'add2'] },
  { edo: 12, name: 'Major Ninth', steps: [2, 4, 7, 11], aliases: ['maj9', 'M9'] },
  { edo: 12, name: 'Dominant Ninth', steps: [2, 4, 7, 10], aliases: ['9', 'dom9'] },
  { edo: 12, name: 'Minor Ninth', steps: [2, 3, 7, 10], aliases: ['m9', 'min9'] },
  { edo: 12, name: 'Minor Eleventh', steps: [2, 3, 5, 7, 10], aliases: ['m11'] },
  { edo: 12, name: 'Major Seventh Sharp Eleventh', steps: [4, 6, 7, 11], aliases: ['maj7#11'] },
  { edo: 12, name: 'Dominant Seventh Suspended Fourth', steps: [5, 7, 10], aliases: ['7sus4'] },
  { edo: 12, name: 'Major Thirteenth', steps: [2, 4, 7, 9, 11], aliases: ['maj13', 'M13'] },
  { edo: 12, name: 'Dominant Thirteenth', steps: [2, 4, 7, 9, 10], aliases: ['13', 'dom13'] },
  { edo: 12, name: 'Minor Thirteenth', steps: [2, 3, 7, 9, 10], aliases: ['m13', 'min13'] },

  // --- Other Chords ---
  { edo: 12, name: 'Five', steps: [7], aliases: ['5'] },

  // =======================================================================
  // --- 19-EDO Chords ---
  // =======================================================================
  { edo: 19, name: 'Subminor', steps: [4, 11], aliases: [] },
  { edo: 19, name: 'Supermajor', steps: [7, 11], aliases: [] },
  { edo: 19, name: 'Diminished Seventh (19-EDO)', steps: [5, 10, 15], aliases: [] },

  // =======================================================================
  // --- 24-EDO Chords ---
  // =======================================================================
  { edo: 24, name: 'Neutral', steps: [7, 14], aliases: [] },

  // =======================================================================
  // --- 31-EDO Chords ---
  // =======================================================================
  { edo: 31, name: 'Neutral (31-EDO)', steps: [9, 18], aliases: [] },
  { edo: 31, name: 'Barbershop Seventh', steps: [10, 18, 25], aliases: [] },
  { edo: 31, name: 'I Supermajor Minor Seven', steps: [11, 18, 25], aliases: [] },
  { edo: 31, name: 'Septimal 11th', steps: [10, 15, 18, 25], aliases: [] },
  { edo: 31, name: 'Undecimal 11th', steps: [10, 14, 18, 25], aliases: [] },
  { edo: 31, name: 'Neutral Harmonic Seventh', steps: [9, 18, 25], aliases: [] },
  { edo: 31, name: 'Neutral Minor Seventh', steps: [9, 18, 26], aliases: [] },
  { edo: 31, name: 'Neutral Major Seventh', steps: [9, 18, 28], aliases: [] },
];

const chordList = chords;