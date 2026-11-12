// Works around a Next.js 16.4 static-export mismatch: the build writes prefetch
// payloads as `__next.<segment>/<more>/__PAGE__.txt`, but the browser requests
// `__next.<segment>.<more>.__PAGE__.txt`. Without this, link prefetches 404
// (pages still work, but navigation is slower and the console fills with errors).
// Runs automatically after `npm run build`. Remove once Next.js fixes it.
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
let copied = 0;

function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? filesIn(p) : [p];
  });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      for (const file of filesIn(full)) {
        const rel = path.relative(full, file).split(path.sep).join(".");
        const target = path.join(dir, `${entry.name}.${rel}`);
        if (!fs.existsSync(target)) {
          fs.copyFileSync(file, target);
          copied++;
        }
      }
    } else if (entry.name !== "_next") {
      walk(full);
    }
  }
}

if (fs.existsSync(outDir)) {
  walk(outDir);
  console.log(`fix-export-prefetch: added ${copied} prefetch files`);
}
