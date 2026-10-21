import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readme = await readFile(resolve(root, 'README.md'), 'utf8');
const references = [...readme.matchAll(/(?:src|href)="(assets\/[^"#?]+)"/g)]
  .map((match) => match[1]);
const errors = [];

for (const reference of new Set(references)) {
  const target = resolve(root, reference);
  const path = relative(root, target);
  if (path.startsWith('..') || isAbsolute(path)) {
    errors.push(`Asset outside repository: ${reference}`);
    continue;
  }
  try {
    if (!(await stat(target)).isFile()) errors.push(`Not a file: ${reference}`);
  } catch {
    errors.push(`Missing asset: ${reference}`);
  }
}

// GitHub rejects individual files larger than 100 MiB.
async function checkSizes(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await checkSizes(path);
    else if (entry.isFile() && (await stat(path)).size > 100 * 1024 * 1024) {
      errors.push(`Asset exceeds GitHub's 100 MiB limit: ${relative(root, path)}`);
    }
  }
}
await checkSizes(resolve(root, 'assets'));

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Profile ready: ${new Set(references).size} local asset links checked; asset sizes valid.`);
}
