import fs from 'node:fs/promises';
import path from 'node:path';

import arg from 'arg';
import dotenv from 'dotenv';
import { Listr } from 'listr2';
import picocolors from 'picocolors';

import { log, OpenAiTranslate } from './translate.openai.mjs';
import { sampleTranslations } from './translate.samples.mjs';
import { walk, exit, i18nBaseDir, filterFiles } from './translate.shared.mjs';

dotenv.config();

const args = arg({
  '--all': Boolean,
  '--locale': String,
});

const tutorialBaseDir = 'tutorial';
const translateDir = 'docusaurus-plugin-content-blog-tutorial';

/**
 * Whether to translate all tutorial fragments and templates.
 * Use this option when you want to translate all templates for a new locale.
 *
 * @type {boolean}
 */
const all = args['--all'];

/**
 * The target locale to translate the files to. Note that the locale must exist in the `i18n`
 * directory. It's recommended to run the Docusaurus write translation command before running this
 * script.
 *
 * @type {string}
 */
const locale = args['--locale'];

if (!locale) {
  exit('No locale specified. Use --locale to specify the target locale.');
}

await fs.readdir(path.join(i18nBaseDir, locale)).catch(() => {
  exit(
    `Locale ${locale} does not exist. Did you forget to run the Docusaurus write translation command?`
  );
});

const getFiles = async () => {
  const filePaths = await walk(tutorialBaseDir);
  return filePaths.filter((file) => !file.startsWith('tutorial/build-with-logto/generated-'));
};

const files = await filterFiles(await getFiles(), locale, !all);

if (files.length === 0) {
  exit('No generated tutorial found to translate.');
}

const sortedFiles = files.slice().sort();
log(`The following files will be translated:`);
for (const slug of sortedFiles) {
  log(`  - ${picocolors.blue(slug)}`);
}

const confirm = async () =>
  new Promise((resolve) => {
    process.stdin.once('data', (data) => resolve(data.toString().trim()));
  });

if (files.length > 1) {
  log(`${files.length} files will be translated. Enter "y" to confirm.`);
  const confirmation = await confirm();

  if (confirmation.toLowerCase() !== 'y') {
    exit('Translation cancelled.');
  }
}

if (!sampleTranslations[locale]) {
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
const listr = new Listr([], { concurrent: 2 });

for (const file of files) {
  listr.add({
    async task(_, task) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      task.title = `Translating ${file}...`;
      const content = await fs.readFile(file, 'utf8');
      const translated = await openAiTranslate.translate(content, locale, task);
      const targetFile = file.replace(
        tutorialBaseDir,
        path.join(i18nBaseDir, locale, translateDir)
      );
      await fs.mkdir(path.dirname(targetFile), { recursive: true });
      await fs.writeFile(targetFile, translated, 'utf8');
      // eslint-disable-next-line @silverhand/fp/no-mutation
      task.title = `Done: ${targetFile}`;
    },
    retry: 1,
  });
}

await listr.run();

log(picocolors.green('✓ Completed translation.'));
exit();
