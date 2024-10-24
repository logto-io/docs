const configs = {
  'tutorial/**/!(generated-|_template-)*.md?(x)': ['pnpm lint'],
  '(src|docs)/**/*.md?(x)': ['pnpm lint'],
  '!(*.config).ts?(x)': ['pnpm lint --fix', () => 'tsc -p tsconfig.json --noEmit'],
};

export default configs;
