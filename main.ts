import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — the label a year-3000 museum puts beside an ordinary object from today.
const ENTRY =
  "Plastic fork, c. 2025. Ritual implement of the Takeaway People, believed to have been used once, then worshipped briefly, then buried in the sea.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 200-char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
