import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readme = await readFile(resolve(root, 'README.md'), 'utf8');
const links = [
  ...[...readme.matchAll(/(?:src|href|srcset)="([^"]+)"/g)].map((match) => match[1]),
  ...[...readme.matchAll(/!?\[[^\]]*\]\(([^\s)]+)\)/g)].map((match) => match[1]),
];
const assetPrefix = 'https://github.com/cendevweb/cendevweb/blob/main/';
const references = links.map((link) => link.startsWith(assetPrefix) ? link.slice(assetPrefix.length) : link)
  .filter((link) => !/^(?:[a-z]+:|#|\/\/)/i.test(link));
const anchors = new Set([...readme.matchAll(/^#{1,6}\s+(.+)$/gm)].map((match) =>
  match[1].toLowerCase().replace(/[^\p{L}\p{N}_\s-]/gu, '').replace(/\s/g, '-')));
const errors = [];

for (const anchor of links.filter((link) => link.startsWith('#'))) {
  if (!anchors.has(anchor.slice(1))) errors.push(`Missing section: ${anchor}`);
}

for (const reference of new Set(references)) {
  const target = resolve(root, decodeURIComponent(reference.split(/[?#]/)[0]));
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
  console.log(`Profile ready: ${new Set(references).size} local files, ${links.filter((link) => link.startsWith('#')).length} section links and asset sizes checked. External URLs are not checked.`);
}
