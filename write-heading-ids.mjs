/* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation, @silverhand/fp/no-mutating-methods, no-await-in-loop */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const headingRegex = /^(#+)\s+(.*?)(\s*{#(.*?)})?$/;

const generateHeadingId = (text) =>
  text
    .toLowerCase()
    .split(/[^\da-z-]/gi)
    .filter(Boolean)
    .join('-');

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (['.md', '.mdx'].includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function findTranslationFiles(sourcePath) {
  const translations = [];

  try {
    const langDirs = await fs.readdir(path.join('i18n'));

    for (const lang of langDirs) {
      const candidate = path.join(
        'i18n',
        lang,
        'docusaurus-plugin-content-docs',
        'current',
        path.relative('docs', sourcePath)
      );
      try {
        await fs.access(candidate);
        translations.push(candidate);
      } catch {
        console.log(`ℹ️ Skipping non-existing translation: ${candidate}`);
      }
    }
  } catch (error) {
    console.error('❌ Error reading i18n directory:', error.message);
  }

  return translations;
}

async function processFile(filePath) {
  const isEnglishDocFile = filePath.startsWith('docs/');
  if (!isEnglishDocFile) {
    return;
  }

  const ext = path.extname(filePath);
  const content = await fs.readFile(filePath, 'utf8');

  const lines = content.split('\n');
  const generatedIds = [];
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(headingRegex);
    if (!match || match[1].length < 2) {
      continue;
    }

    const [_full, hashes, text, existingIdMark, existingId] = match;

    if (existingIdMark && existingId) {
      generatedIds.push(existingId);
      continue;
    }

    const newId = generateHeadingId(text);
    const idStr = ext === '.mdx' ? `\\{#${newId}}` : `{#${newId}}`;
    lines[i] = `${hashes} ${text} ${idStr}`;
    generatedIds.push(newId);
    modified = true;
  }

  if (modified) {
    await fs.writeFile(filePath, lines.join('\n'), 'utf8');
    console.log(`✅ ${filePath}`);
  }

  // Process corresponding i18n translations
  if (generatedIds.length > 0) {
    const translations = await findTranslationFiles(filePath);
    await Promise.all(translations.map((transPath) => updateTranslations(transPath, generatedIds)));
  }
}

async function updateTranslations(translationDocPath, sourceDocHeadingIds) {
  try {
    const ext = path.extname(translationDocPath);
    const content = await fs.readFile(translationDocPath, 'utf8');
    const lines = content.split('\n');
    let idIndex = 0;
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(headingRegex);
      if (!match || match[1].length < 2 || idIndex >= sourceDocHeadingIds.length) {
        continue;
      }

      const [_full, hashes, text, existingIdMark, existingId] = match;
      const headingId = sourceDocHeadingIds[idIndex];

      if (!existingIdMark || existingId !== headingId) {
        const idStr = ext === '.mdx' ? `\\{#${headingId}}` : `{#${headingId}}`;
        lines[i] = `${hashes} ${text} ${idStr}`;
        modified = true;
      }

      idIndex++;
    }

    if (modified) {
      await fs.writeFile(translationDocPath, lines.join('\n'), 'utf8');
      console.log(`✅ ${translationDocPath}`);
    }
  } catch (error) {
    console.error(`ℹ️ Skipping ${translationDocPath}:`, error.message);
  }
}

async function main() {
  try {
    const args = process.argv.slice(2);
    const targets = args.length > 0 ? args : ['docs'];

    const files = await Promise.all(
      targets.map(async (target) => {
        const stat = await fs.stat(target);
        return stat.isDirectory() ? getFiles(target) : target;
      })
    );

    await Promise.all(files.flat().map(async (file) => processFile(file)));
  } catch (error) {
    console.error('❌ Fatal error:', error);
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  }
}

await main();

/* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation, @silverhand/fp/no-mutating-methods, no-await-in-loop */
