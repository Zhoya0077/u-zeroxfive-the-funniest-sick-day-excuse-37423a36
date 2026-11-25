import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My smartwatch says my heart rate spiked while I was asleep, so either I'm dying or my dreams started doing cardio — either way, I'm staying in bed today.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-checking gate: the competition requires one line, 1-200 chars, non-blank.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
