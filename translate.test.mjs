import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import test from 'node:test';

import { ESLint } from 'eslint';

import {
  normalizeTranslatedMdx,
  normalizeTranslatedMdxAfterAutofix,
} from './translate.normalize.mjs';
import { prepareTranslatedMdx } from './translate.validate.mjs';

const filePath =
  'i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/mfa/trusted-devices.mdx';
const broken = `<CloudLink to="/user">
  コンソール > ユーザー管理
</CloudLink> でユーザーを開き、その信頼済みデバイスを表示・削除できます。信頼済みデバイスを削除しても、今後のサインインにのみ影響し、現在のアクティブセッションは終了しません。
`;
const lint = new ESLint();
const autofix = new ESLint({ fix: true });

test('PR 1495: repairs both paragraph and list components through the complete autofix cycle', async () => {
  const [original] = await lint.lintText(broken, { filePath });
  assert.ok(original.errorCount > 0);

  for (const prefix of ['', '- ', '1. ']) {
    const input = prefix + broken;
    for (const normalize of [normalizeTranslatedMdx, normalizeTranslatedMdxAfterAutofix]) {
      const normalized = normalize(input);
      assert.match(normalized, /prettier-ignore/);
      assert.equal(normalize(normalized), normalized);
      const [fixed] = await autofix.lintText(normalized, { filePath });
      const final = normalizeTranslatedMdxAfterAutofix(fixed.output ?? normalized);
      const [result] = await lint.lintText(final, { filePath });
      assert.equal(result.errorCount, 0, JSON.stringify(result.messages));
      assert.equal(final, normalized);
    }
    const prepared = await prepareTranslatedMdx(input, filePath);
    assert.equal(await prepareTranslatedMdx(prepared, filePath), prepared);
  }
});

test('protects fenced examples, mismatched nested markers, and unterminated fences', () => {
  const example = `${broken}\n### Title{slug} \\{#slug}\n[webhook](Grant.LimitExceeded) (/events)\nnonbreaking\u00a0space`;
  for (const input of [
    `\`\`\`mdx\n${example}\n\`\`\``,
    `\`\`\`\`mdx\n\`\`\`\n${example}\n\`\`\`\n\`\`\`\`\n`,
    `- ~~~mdx\n${example}\n  ~~~`,
    `~~~mdx\n\`\`\`\n${example}\n~~~\n`,
    `\`\`\`mdx\n${example}`,
    `> ~~~mdx\n${example
      .split('\n')
      .map((line) => '> ' + line)
      .join('\n')}\n> ~~~`,
  ]) {
    assert.equal(normalizeTranslatedMdx(input), input);
    assert.equal(normalizeTranslatedMdxAfterAutofix(input), input);
  }
});

test('repairs prose after a closed fence without changing the example', () => {
  const fenced = `~~~mdx\n${broken}~~~`;
  assert.equal(
    normalizeTranslatedMdx(`${fenced}\n\n${broken}`),
    `${fenced}\n\n${normalizeTranslatedMdx(broken)}`
  );
});

test('retains earlier details and misplaced-link repairs across code blocks', () => {
  const input =
    '<details>\n<summary>\nTitle\n</summary>\n\n````mdx\n```\n</summary>\n```\n````\n\n[webhook](Grant.LimitExceeded) (/events)\n</summary>\n';
  const expected = input
    .replace('[webhook](Grant.LimitExceeded) (/events)', '`Grant.LimitExceeded` [webhook](/events)')
    .replace(/<\/summary>\n$/, '</details>\n');
  assert.equal(normalizeTranslatedMdx(input), expected);
  assert.equal(normalizeTranslatedMdxAfterAutofix(input), expected);
});

test('rejects unknown syntax errors before a translation can be saved', async () => {
  await assert.rejects(
    prepareTranslatedMdx('<CloudLink>\n\n</Other>\n', filePath),
    /Invalid translated MDX/
  );
});

test('rejects ignored paths instead of treating them as validated', async () => {
  await assert.rejects(
    prepareTranslatedMdx(broken, 'i18n/ja/generated-example.mdx'),
    /Invalid translated MDX/
  );
});

test('the repaired Japanese document remains lint-clean after autofix', async () => {
  const content = await fs.readFile(filePath, 'utf8');
  assert.equal(await prepareTranslatedMdx(content, filePath), content);
});
