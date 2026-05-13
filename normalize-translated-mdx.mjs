import fs from 'node:fs/promises';
import path from 'node:path';

import { normalizeTranslatedMdx } from './translate.normalize.mjs';
import { i18nBaseDir, validExtensions, walk } from './translate.shared.mjs';

const inputPaths = process.argv.slice(2);
const roots = inputPaths.length > 0 ? inputPaths : [i18nBaseDir];

const getFiles = async (root) => {
  const stats = await fs.stat(root);

  if (stats.isDirectory()) {
    return walk(root);
  }

  return [root];
};

const fileGroups = await Promise.all(roots.map(async (root) => getFiles(path.resolve(root))));
const files = fileGroups.flat().filter((file) => validExtensions.has(path.extname(file)));

const results = await Promise.all(
  files.map(async (file) => {
    const content = await fs.readFile(file, 'utf8');
    const normalized = normalizeTranslatedMdx(content);

    if (normalized === content) {
      return false;
    }

    await fs.writeFile(file, normalized, 'utf8');
    return true;
  })
);
const updatedCount = results.filter(Boolean).length;

console.log(`Normalized ${updatedCount} translated MDX file${updatedCount === 1 ? '' : 's'}.`);
