import fs from 'node:fs/promises';
import path from 'node:path';

import arg from 'arg';
import dotenv from 'dotenv';
import { execa } from 'execa';
import { Listr } from 'listr2';
import picocolors from 'picocolors';

import { log, OpenAiTranslate } from './translate.openai.mjs';

dotenv.config();

const exit = (message) => {
  if (!message) {
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(0);
  }
  console.error(picocolors.red(message));
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
};

const args = arg({
  '--file': [String],
  '--all': Boolean,
  '--sync': Boolean,
  '--check': Boolean,
  '--locale': String,
});

/** @type {string[]} */
const inputFiles = args['--file'];
/** @type {boolean} */
const all = args['--all'];
/** @type {boolean} */
const sync = args['--sync'];
/** @type {boolean} */
const check = args['--check'];
/** @type {string} */
const locale = args['--locale'];

const validExtensions = ['.mdx', '.md'];
const docsBaseDir = 'docs';
const i18nBaseDir = 'i18n';
const translateDir = 'docusaurus-plugin-content-docs/current';

if (!locale) {
  exit('No locale specified. Use --locale to specify the target locale.');
}

await fs.readdir(path.join(i18nBaseDir, locale)).catch(() => {
  exit(
    `Locale ${locale} does not exist. Did you forget to run the Docusaurus write translation command?`
  );
});

// Recursively get all files in the docs directory.
/** @type {(dir: string) => Promise<string[]>} */
const walk = async (dir) => {
  const files = await fs.readdir(dir);
  const entries = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        return filePath.startsWith('.') ? [] : walk(filePath);
      }

      if (!validExtensions.includes(path.extname(filePath))) {
        return [];
      }

      return filePath;
    })
  );

  return entries.flat();
};

const getFiles = async () => {
  if (inputFiles?.length) {
    const result = await Promise.all(
      inputFiles.map(async (file) => {
        const filePath = path.join(docsBaseDir, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
          return walk(filePath);
        }

        if (!validExtensions.includes(path.extname(filePath))) {
          exit(`Invalid file extension: ${file}. Only ${validExtensions.join(', ')} allowed.`);
        }

        return filePath;
      })
    );
    return result.flat();
  }

  if (all) {
    return walk(docsBaseDir);
  }

  return [];
};

/**
 * Given a list of files, filter out if the target locale file has a newer timestamp in Git.
 * @type {(files: string[]) => Promise<string[]>}
 */
const filterFiles = async (files) => {
  if (!sync) {
    return files;
  }

  log('Checking for files that need to be translated by comparing timestamps in Git...');
  const result = await Promise.all(
    files.map(async (file) => {
      const targetFile = file.replace(docsBaseDir, path.join(i18nBaseDir, locale, translateDir));
      const [sourceTimestamp, targetTimestamp] = await Promise.all([
        execa`git log -1 --format=%cd --date=iso-local -- ${file}`,
        execa`git log -1 --format=%cd --date=iso-local -- ${targetFile}`,
      ]);

      return sourceTimestamp.stdout > targetTimestamp.stdout ? file : null;
    })
  );

  return result.filter(Boolean);
};

const files = await filterFiles(await getFiles());

if (files.length === 0) {
  exit(
    'No files found to translate. Provide a list of files with --file or use --all to translate all files.'
  );
}

const sortedFiles = files.slice().sort();
log(`The following files will be translated:`);
for (const slug of sortedFiles) {
  log(`  - ${picocolors.blue(slug)}`);
}

if (files.length > 1) {
  log(`${files.length} files will be translated. Enter "y" to confirm.`);
  const confirmation = await new Promise((resolve) => {
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });

  if (confirmation.toLowerCase() !== 'y') {
    exit('Translation cancelled.');
  }
}

const openAiTranslate = new OpenAiTranslate(locale);
const listr = new Listr([], { concurrent: 4 });

for (const file of files) {
  listr.add({
    async task(_, task) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      task.title = `Translating ${file}...`;
      const content = await fs.readFile(file, 'utf8');
      const translated = await openAiTranslate.translate(content, locale, task);
      const targetFile = file.replace(docsBaseDir, path.join(i18nBaseDir, locale, translateDir));
      await fs.mkdir(path.dirname(targetFile), { recursive: true });
      await fs.writeFile(targetFile, translated, 'utf8');
      // eslint-disable-next-line @silverhand/fp/no-mutation
      task.title = `Done: ${targetFile}`;
    },
    retry: 1,
    exitOnError: false,
  });
}

await listr.run();

log(picocolors.green('✓ Completed translation.'));
exit();
