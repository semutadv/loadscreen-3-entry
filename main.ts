// Loading Screen Gold — batch3 entry (loadscreen)
// Tip number 4,096. The first 4,095 were just the word "patience."
// Writes the loading tip to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Shown at 87% loaded, where all builds go to be stared at.
const TIP_LINE =
  "Tip: If the build is taking forever, do not stare at it. Compilers, like cats and senior engineers, only work when nobody is watching.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), TIP_LINE, "utf8");
}

main();
