import fs from 'node:fs/promises';
import path from 'node:path';

import { execa } from 'execa';
import picocolors from 'picocolors';

import { log } from './translate.openai.mjs';

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

/**
 * Given a list of files, filter out if the target locale file has a newer timestamp in Git.
 * @type {(files: string[]) => Promise<string[]>}
 */
export const filterFiles = async (files, locale, sync, check) => {
  if (!sync && !check) {
    return files;
  }

  log('Checking for files that need to be translated by comparing timestamps in Git...');
  const result = await Promise.all(
    files.map(async (file) => {
      const targetFile = file.replace(docsBaseDir, path.join(i18nBaseDir, locale, translateDir));
      const [sourceTimestamp, targetTimestamp] = await Promise.all([
        execa`git log -1 --format=%ad --date=unix -- ${file}`,
        execa`git log -1 --format=%ad --date=unix -- ${targetFile}`,
      ]);

      const sourceDate = Number(sourceTimestamp.stdout);
      const targetDate = Number(targetTimestamp.stdout);
      log(`${file}: ${sourceDate} - ${targetDate}`);

      return Number(sourceDate) > Number(targetDate) ? file : null;
    })
  );

  if (check) {
    const outdatedFiles = result.filter(Boolean);
    if (outdatedFiles.length > 0) {
      exit(
        `The following files are outdated and need to be translated:\n${outdatedFiles
          .map((file) => `  - ${file}`)
          .join('\n')}`
      );
    }

    log(picocolors.green('All files are up to date.'));
    exit();
  }

  return result.filter(Boolean);
};
