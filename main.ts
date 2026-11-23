// SPDX-License-Identifier: MIT
// Real-Life Patch Notes: The Comedy Changelog
// Writes one deadpan one-line patch note to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v3.0.0: fixed a bug where the brain kept every lyric from a song heard once in 2007 but forgot the password set this morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
