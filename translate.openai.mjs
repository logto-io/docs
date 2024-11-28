import { HttpsProxyAgent } from 'https-proxy-agent';
import { OpenAI } from 'openai';
import picocolors from 'picocolors';

import { asIsTerms, patterns, terms } from './terms.mjs';

const model = 'gpt-4o';

/** @type {typeof console.log} */
export const log = (...args) => {
  console.log(picocolors.dim(new Date().toLocaleTimeString()), ...args);
};

/**
 * Instructions for the translator.
 *
 * @param asIsTerms {string[]} The terms that should not be translated.
 * @param terms {Record<string, string>} The terms with their fixed translations.
 * @param patterns {Record<string, string>} The patterns with their fixed translations.
 */
const buildInstructions = (asIsTerms, terms, patterns) => [
  'Keep frontmatter keys unchanged. Translate values, except for the `slug` value.',
  'Do not translate JSON keys, inline code, component names, keys, URLs, or file paths.',
  `Do not translate the following terms, including their plural forms: ${asIsTerms.join(', ')}.`,
  'For all the keys in the following JSON object (case-insensitive matching), use the values as translations and append the untranslated content in parentheses. For example, if the JSON object is `{ "Logto": "日志", "Log": "日志" }`, then translate "Logto" to "日志 (Logto)" and "Log" to "日志 (Log)". The JSON object is `' +
    JSON.stringify(terms) +
    '`.',
  'For all the patterns in the keys of the following JSON object (case-insensitive matching), use the values as translations. For example, if the JSON object is `{ "Set up {product}": "安装 {product}" }`, then translate "Set up Logto" to "安装 Logto". The JSON object is `' +
    JSON.stringify(patterns) +
    '`.',
  'Ensure all import statements are not translated and copied as-is.',
  'For mermaid diagrams, translate only the text within the diagram, keeping the diagram type and structure unchanged.',
  'Prefer "你" over "您" when translating into Chinese.',
  'Ensure there is a space between CJK characters and non-CJK characters in the translated content.',
  'Add spaces around the `/` character in the translated content.',
  'Include spaces around links and email addresses in the translated content, e.g., `访问 [Logto](https://logto.io) 网站`.',
  "Respond with only the translated content, don't wrap it in any other text or code blocks.",
];

export class OpenAiTranslate {
  httpProxy = process.env.HTTP_PROXY;
  openai = new OpenAI({
    httpAgent: this.httpProxy ? new HttpsProxyAgent(this.httpProxy) : undefined,
  });

  /** @type {string} */
  instructions;

  /** @param locale {string} */
  constructor(locale) {
    if (this.httpProxy) {
      log(`Using HTTP proxy: ${this.httpProxy}`);
    }

    if (!terms[locale]) {
      throw new Error(`No terms translation found for locale "${locale}"`);
    }

    if (!patterns[locale]) {
      throw new Error(`No patterns translation found for locale "${locale}"`);
    }

    this.instructions = buildInstructions(asIsTerms, terms[locale], patterns[locale])
      .map((instruction, index) => `${index + 1}. ${instruction}`)
      .join('\n');

    log(`Instructions for locale "${locale}":\n${this.instructions}`);
  }

  /**
   * @param {string} content The content to translate.
   * @param {string} target The target locale.
   * @param {import('listr2').ListrTaskWrapper} task The task wrapper to update the task status.
   * @returns {Promise<string>} Translated content.
   */
  async translate(content, target, task) {
    const stream = await this.openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: [
            `You are a assistant translator and will receive a MDX content. Translate it to locale "${target}". Detailed instructions are as follows:`,
          ]
            .concat(this.instructions)
            .join('\n'),
        },
        {
          role: 'user',
          content,
        },
      ],
      temperature: 0.1,
      stream: true,
    });

    /* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    if (task) {
      task.output = 'Waiting for response...';
    } else {
      log('Waiting for response...');
    }

    // Extract the translated content from the stream.
    let count = 0;
    let result = '';
    for await (const chunk of stream) {
      const choice0 = chunk.choices[0];
      result += choice0?.delta.content ?? '';

      if (task) {
        task.output = `Receiving response (${++count} chunks)`;
      } else {
        log(`Receiving response (${++count} chunks)`);
      }

      if (choice0?.finish_reason && choice0.finish_reason !== 'stop') {
        throw new Error(
          `Invalid response from OpenAI, expected \`stop\` but got \`${choice0.finish_reason}\``
        );
      }
    }
    /* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation */

    return result;
  }
}
