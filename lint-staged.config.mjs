const configs = {
  'tutorial/**/!(generated-|_template-)*.md?(x)': ['pnpm lint'],
  '(src|docs|i18n)/**/*.md?(x)': ['pnpm lint'],
  '!(*.config).ts?(x)': ['pnpm lint', () => 'tsc -p tsconfig.json --noEmit'],
};

export default configs;
