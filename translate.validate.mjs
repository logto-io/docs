import { ESLint } from 'eslint';

import {
  normalizeTranslatedMdx,
  normalizeTranslatedMdxAfterAutofix,
} from './translate.normalize.mjs';

const autofix = new ESLint({ fix: true });
const validate = new ESLint();

/** Normalize and lint before writing, so failed translations can be retried without replacing a file. */
export const prepareTranslatedMdx = async (content, filePath) => {
  const normalized = normalizeTranslatedMdx(content);
  const [fixed] = await autofix.lintText(normalized, { filePath });
  const output = normalizeTranslatedMdxAfterAutofix(fixed?.output ?? normalized);
  const [result] = await validate.lintText(output, { filePath });

  if (
    !result ||
    (result.warningCount > 0 && result.messages.some((message) => message.ruleId === null)) ||
    result.errorCount > 0
  ) {
    const diagnostics = result?.messages
      .map(({ line, column, message }) => `${line ?? 1}:${column ?? 1} ${message}`)
      .join('\n');
    throw new Error(`Invalid translated MDX: ${filePath}\n${diagnostics ?? 'File was not linted'}`);
  }

  return output;
};
