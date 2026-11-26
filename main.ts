// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard (1-180 chars, one line)
// for an ordinary office object treated as an ancient artifact,
// to /output/entry.txt.
//
// The object: a keyboard missing its E key. The defect drives the
// whole imagined history: the Silent Department, memos ending in
// riddles, retirement after the Great Typo. Deadpan curator voice,
// catalogue date and material sell the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Keyboard, c. 2016. Plastic, missing E. Scribe's tool of the Silent Department; every memo ended in riddles. Retired after the Great Typo.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate self-check: the entry must be 1-180 characters, a single line,
// and not only whitespace — otherwise refuse to write anything.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 180) {
  throw new Error(`entry is ${chars.length} chars, must be 1-180`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${outPath}`);
