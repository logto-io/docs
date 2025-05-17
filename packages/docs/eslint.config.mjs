import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import * as mdx from 'eslint-plugin-mdx';

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

const configs = [
  // Mimic ESLintRC-style extends
  ...compat.extends('@silverhand/react'),
  {
    rules: {
      'sql/no-unsafe-query': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    ignores: ['**/generated-*.md', '**/generated-*.mdx', '**/_template-*.mdx'],
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.md', '**/*.mdx'],
    rules: {
      complexity: 'off',
      'unicorn/filename-case': 'off',
      'no-unused-expressions': 'off',
      'max-statements-per-line': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'react/self-closing-comp': 'off',
      'react/no-unescaped-entities': 'off',
    },
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.mdx'],
      },
      globals: {
        props: 'readonly',
      },
    },
  },
  {
    files: ['**/*.mdx', '**/*.md'],
    rules: {
      camelcase: 'off',
      'no-warning-comments': 'off',
      'no-undef': 'off',
      'react/jsx-no-undef': 'off',
      'max-lines': 'off',
    },
  },
  {
    files: ['**/*.config.ts', '**/*.config.js'],
    rules: {
      'max-lines': 'off',
    },
    env: {
      node: true,
    },
  },
  {
    files: ['**/generate.mjs', '**/generate.js'],
    rules: {
      'no-template-curly-in-string': 'off',
    },
  },
  {
    files: ['**/pages/**/*.tsx'],
    rules: {
      'consistent-default-export-name/default-export-match-filename': 'off',
    },
  },
  {
    files: ['src/theme/**/*'],
    rules: {
      'consistent-default-export-name/default-export-match-filename': 'off',
      'react/function-component-definition': 'off',
      'unicorn/prevent-abbreviations': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'react/boolean-prop-naming': 'off',
    },
  },
];

export default configs;
