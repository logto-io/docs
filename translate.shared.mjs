import fs from 'node:fs/promises';
import path from 'node:path';

import picocolors from 'picocolors';

export const exit = (message) => {
  if (!message) {
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
  }
  console.error(picocolors.red(message));
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
};

export const validExtensions = new Set(['.mdx', '.md']);
export const docsBaseDir = 'docs';
export const i18nBaseDir = 'i18n';
export const translateDir = 'docusaurus-plugin-content-docs/current';

// Recursively get all files in the docs directory.
/** @type {(dir: string) => Promise<string[]>} */
export const walk = async (dir) => {
  const files = await fs.readdir(dir);
  const entries = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        return filePath.startsWith('.') ? [] : walk(filePath);
      }

      if (!validExtensions.has(path.extname(filePath))) {
        return [];
      }

      return filePath;
    })
  );

  return entries.flat();
};
