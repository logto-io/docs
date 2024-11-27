import { HttpsProxyAgent } from 'https-proxy-agent';
import { OpenAI } from 'openai';
import picocolors from 'picocolors';

import { asIsTerms, terms } from './terms.mjs';

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
 */
const buildInstructions = (asIsTerms, terms) => [
  'Keep all frontmatter keys in their original language; translate values, except for the `slug` key.',
  'Do not translate JSON keys, inline code, component names and keys, urls, and file paths.',
  'For mermaid diagrams, translate the text inside the diagram, but keep the diagram type and structure.',
  `Do not translate the following terms, including their plural forms: ${asIsTerms.join(', ')}.`,
  'For the following terms with any capitalization and casing, use the specified translation (matching the casing if applicable):',
  JSON.stringify(terms) + '`.',
  'Prefer using "你" instead of "您" in Chinese.',
  'Make sure there is a space between the CJK and non-CJK characters.',
  'Make sure there are spaces around the `/` character and links.',
  'Respond with the translated content only.',
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

    this.instructions = buildInstructions(asIsTerms, terms[locale])
      .map((instruction) => `- ${instruction}`)
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
            `You are a assistant translator and will receive a MDX file. Translate it to locale "${target}". Detailed instructions are as follows:`,
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
