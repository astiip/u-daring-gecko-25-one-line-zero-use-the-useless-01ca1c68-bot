// One Line, Zero Use: The Useless Superpower Sprint
// make.fun entry — program/v1. Writes exactly one line (90 characters)
// naming a hilariously useless superpower to /output/entry.txt.
//
// The line: a fire-control power that only works on birthday candles,
// and only at the exact moment someone else blows them out — a power
// that is redundant by construction. The joke pays off in the last
// few words, which is what the judge weighs second.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can control fire — but only birthday candles, and only when someone else blows them out.";

// The gate allows 1–200 characters and refuses a blank line; refuse to
// write an over-long or empty line rather than submit an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
