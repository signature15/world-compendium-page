/**
 * entry.png — a one-page world news broadsheet for Wednesday
 * 18 November 2026, committed at the repository root and delivered to
 * the grading output directory by this entrypoint.
 *
 * The poster is laid out like a printed evening paper. Across the top
 * sits the masthead, carrying the paper's title and the full date
 * line. Directly beneath it runs a day-in-numbers strip: a row of
 * headline figures that sizes up the day at a single glance. The upper
 * body belongs to the lead stories — the handful of items that defined
 * the day, set in the largest type on the page. Below them, a region
 * color grid organizes the rest of the world's news into color-coded
 * regional blocks, each shading the stories from its part of the map.
 * Further down, evening briefs collect shorter dispatches from the
 * end of the day, and a sources footer closes the sheet by listing the
 * publications from which every story was drawn.
 *
 * Delivering that sheet is all the program does. It copies entry.png,
 * byte for byte, from its own directory into the destination — /output
 * in the grading container, or the path named by the
 * MAKEFUN_OUTPUT_DIR environment variable everywhere else. Only the
 * Node.js standard library is involved (node:fs, node:path), nothing
 * is fetched from the network, and the source is resolved relative to
 * this module via import.meta.url rather than the caller's working
 * directory — so any run, from any cwd, at any time, writes exactly
 * the committed bytes.
 *
 * Example:
 *   MAKEFUN_OUTPUT_DIR=./out node main.ts   # writes ./out/entry.png
 */
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
