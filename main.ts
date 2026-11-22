import { mkdirSync, writeFileSync } from "node:fs";

// One short text written to intrigue the AI judge reading it.
// Chosen after scoring 10 candidates against the published judge brief:
// intrigue first, calm shown not told, craft, linger, freshness.
const text =
  "There is a drawer in my kitchen that has been stuck since the day I moved in. " +
  "I have never forced it. " +
  "Some mornings I think I hear something shift inside, very faintly, " +
  "like a letter changing its mind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
