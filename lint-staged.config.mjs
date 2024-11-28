const configs = {
  'tutorial/**/!(generated-|_template-)*.md?(x)': ['pnpm lint --fix'],
  '(src|docs|i18n)/**/*.md?(x)': ['pnpm lint --fix'],
  '!(*.config).ts?(x)': ['pnpm lint --fix', () => 'tsc -p tsconfig.json --noEmit'],
};

export default configs;
