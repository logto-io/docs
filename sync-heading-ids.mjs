import fs from 'node:fs/promises';
import path from 'node:path';

import arg from 'arg';
import picocolors from 'picocolors';

import { docsBaseDir, i18nBaseDir, translateDir, walk, exit } from './translate.shared.mjs';

const args = arg({
  '--locale': String,
});

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

const headingRegex = /^(#+ .*)$/gm;
const headingLevelRegex = /^(#+) /;
const headingIdRegex = /(\\?{#[^}]+})/;
const files = await walk(docsBaseDir);

for (const file of files) {
  const i18nFile = file.replace(docsBaseDir, path.join(i18nBaseDir, locale, translateDir));

  console.log(picocolors.blue('Processing'), file, '->', i18nFile);
  // eslint-disable-next-line no-await-in-loop
  const [content, i18nContent] = await Promise.all([
    fs.readFile(file, 'utf8'),
    fs.readFile(i18nFile, 'utf8'),
  ]);

  // Find all headings in the file.
  const headings = content.match(headingRegex);
  const i18nHeadings = i18nContent.match(headingRegex);
  const length = headings?.length ?? 0;
  const i18nLength = i18nHeadings?.length ?? 0;

  if (length !== i18nLength) {
    console.error(
      picocolors.red(
        `Mismatched heading count in ${file}.\n\n  -> Original: ${length} headings in ${file}\n  -> Translated: ${
          i18nLength
        } headings in ${i18nFile}`
      )
    );
    throw new Error('Mismatched heading count');
  }

  if (!headings) {
    console.log(picocolors.dim('  🏃 No headings found, skipping'));
    continue;
  }

  // Ensure heading levels are the same.
  for (const [i, heading] of headings.entries()) {
    const i18nHeading = i18nHeadings[i];

    const level = heading.match(headingLevelRegex)[1].length;
    const i18nLevel = i18nHeading.match(headingLevelRegex)[1].length;

    if (level !== i18nLevel) {
      console.error(
        picocolors.red(
          `Mismatched heading level in ${file}. Original: ${level}, Translated: ${i18nLevel}`
        )
      );
      throw new Error('Mismatched heading level');
    }
  }

  // Append heading IDs to i18n headings if they don't exist.
  // eslint-disable-next-line @silverhand/fp/no-let
  let index = -1;
  // eslint-disable-next-line no-await-in-loop
  await fs.writeFile(
    i18nFile,
    i18nContent.replaceAll(headingRegex, (match) => {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      index += 1;

      const idMatch = match.match(headingIdRegex);
      if (idMatch) {
        console.log(picocolors.dim(`  🙅 ID exists, skipping ${match}`));
        return match;
      }

      const headingId = headings[index].match(headingIdRegex);
      if (!headingId) {
        console.log(picocolors.dim(`  🏃 No ID found in the original content, skipping ${match}`));
        return match;
      }

      const newHeading = `${match} ${headingId[0]}`;
      console.log(picocolors.dim(`  ✅ Appended ID ${newHeading}`));
      return newHeading;
    })
  );
}

console.log(
  picocolors.green(`✓ Completed processing heading IDs for ${locale} with ${files.length} files.`)
);
