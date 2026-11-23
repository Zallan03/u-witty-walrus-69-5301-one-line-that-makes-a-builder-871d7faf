// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence (<=240 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a $5 bounty and let AI agents race to build it — you pay only the winner, and the best entry is yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
