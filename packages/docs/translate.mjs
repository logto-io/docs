import fs from 'node:fs/promises';
import path from 'node:path';

import arg from 'arg';
import dotenv from 'dotenv';
import { Listr } from 'listr2';
import picocolors from 'picocolors';

import { log, OpenAiTranslate } from './translate.openai.mjs';
import { sampleTranslations } from './translate.samples.mjs';
import {
  walk,
  exit,
  docsBaseDir,
  i18nBaseDir,
  validExtensions,
  translateDir,
  filterFiles,
} from './translate.shared.mjs';

dotenv.config();

const args = arg({
  '--file': [String],
  '--all': Boolean,
  '--sync': Boolean,
  '--check': Boolean,
  '--locale': String,
  '--silent': Boolean,
});

/**
 * The list of files to translate from the `--file` argument. File paths are relative to the
 * `docs` directory. It can be a single file or a directory.
 *
 * - This option is mutually exclusive with `--all`.
 *
 * @type {string[]}
 */
const inputFiles = args['--file'];
/**
 * Whether to translate all files in the `docs` directory.
 *
 * - This option is mutually exclusive with `--file`.
 *
 * @type {boolean}
 */
const all = args['--all'];
/**
 * Whether to filter out files that are already translated in the target locale. This option
 * uses Git commit timestamps to compare the source and target files.
 *
 * - This option should be used in conjunction with `--file` or `--all`.
 * - This option is mutually exclusive with `--check`.
 *
 * @type {boolean}
 */
const sync = args['--sync'];
/**
 * Whether to check if files are outdated and need to be translated. If any file is outdated, the
 * script will exit with a non-zero status code; otherwise, it will exit with a zero status code.
 *
 * - This option should be used in conjunction with `--file` or `--all`.
 * - This option is mutually exclusive with `--sync`.
 *
 * Note: This option does not translate any files.
 *
 * @type {boolean}
 */
const check = args['--check'];
/**
 * The target locale to translate the files to. Note that the locale must exist in the `i18n`
 * directory. It's recommended to run the Docusaurus write translation command before running this
 * script.
 *
 * @type {string}
 */
const locale = args['--locale'];

/**
 * Whether to suppress user confirmations.
 *
 * @type {boolean}
 */
const silent = args['--silent'];

if (sync && check) {
  exit('Cannot use --sync and --check together.');
}

if (all && inputFiles?.length) {
  exit('Cannot use --all and --file together.');
}

if (locale) {
  await fs.readdir(path.join(i18nBaseDir, locale)).catch(() => {
    exit(
      `Locale ${locale} does not exist. Did you forget to run the Docusaurus write translation command?`
    );
  });
}

const getFiles = async () => {
  if (inputFiles?.length) {
    const result = await Promise.all(
      inputFiles.map(async (file) => {
        const filePath = path.join(docsBaseDir, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
          return walk(filePath);
        }

        if (!validExtensions.has(path.extname(filePath))) {
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

const confirm = async () =>
  new Promise((resolve) => {
    process.stdin.once('data', (data) => resolve(data.toString().trim()));
  });

const translate = async (locale, files) => {
  const filteredFiles = await filterFiles(files, locale, sync, check);

  if (filteredFiles.length === 0) {
    log(
      'No files found to translate. You can provide a list of files with --file or use --all to force translate all files.'
    );
    exit();
  }
  const sortedFiles = filteredFiles.slice().sort();
  log(`The following files will be translated:`);
  for (const slug of sortedFiles) {
    log(`  - ${picocolors.blue(slug)}`);
  }

  if (filteredFiles.length > 1 && !silent) {
    log(`${filteredFiles.length} files will be translated. Enter "y" to confirm.`);
    const confirmation = await confirm();

    if (confirmation.toLowerCase() !== 'y') {
      exit('Translation cancelled.');
    }
  }

  if (!sampleTranslations[locale] && !silent) {
    log(
      picocolors.yellow(
        `No sample translation found for locale "${locale}", the translation quality may vary. Enter "y" to confirm.`
      )
    );
    const confirmation = await confirm();

    if (confirmation.toLowerCase() !== 'y') {
      exit('Translation cancelled.');
    }
  }

  const openAiTranslate = new OpenAiTranslate(locale);
  const listr = new Listr([], { concurrent: 8 });

  for (const file of filteredFiles) {
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
    });
  }

  await listr.run();

  log(picocolors.green(`✅ Completed translation for "${locale}".`));
};

const locales = locale ? [locale] : await fs.readdir(path.join(i18nBaseDir));
const files = await getFiles();

for (const locale of locales) {
  // eslint-disable-next-line no-await-in-loop
  await translate(locale, files);
}

exit();
