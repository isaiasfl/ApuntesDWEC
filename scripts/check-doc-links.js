import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const markdownLink = /\[[^\]]+\]\(([^)]+)\)/g;
const errors = [];

function collectMarkdownFiles(folder) {
  const entries = readdirSync(folder);
  const files = [];

  for (const entry of entries) {
    if (entry === ".git" || entry === "node_modules") {
      continue;
    }

    const absolute = join(folder, entry);
    const stat = statSync(absolute);

    if (stat.isDirectory()) {
      files.push(...collectMarkdownFiles(absolute));
    } else if (entry.endsWith(".md")) {
      files.push(absolute.slice(root.length + 1));
    }
  }

  return files;
}

const files = process.argv.slice(2);
const filesToCheck = files.length > 0 ? files : collectMarkdownFiles(root);

for (const file of filesToCheck) {
  const content = readFileSync(join(root, file), "utf8");
  const folder = dirname(file);

  for (const match of content.matchAll(markdownLink)) {
    const target = match[1];

    if (
      target.startsWith("http://") ||
      target.startsWith("https://") ||
      target.startsWith("mailto:") ||
      target.startsWith("#")
    ) {
      continue;
    }

    const [pathPart] = target.split("#");

    if (!pathPart) {
      continue;
    }

    const resolved = normalize(join(root, folder, decodeURIComponent(pathPart)));

    if (!existsSync(resolved)) {
      errors.push(`${file} -> ${target}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Enlaces locales rotos:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Enlaces locales Markdown correctos (${filesToCheck.length} archivos).`);
