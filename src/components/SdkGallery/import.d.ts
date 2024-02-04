declare module '@docusaurus/theme-common/internal' {
  import type { PropSidebar } from '@docusaurus/plugin-content-docs';

  type ContextValue = { name: string; items: PropSidebar };

  // https://github.com/facebook/docusaurus/discussions/7457
  // https://github.com/facebook/docusaurus/blob/9e5679ff1a28a6541cff0d506eab6549f2bcd7de/packages/docusaurus-theme-common/src/contexts/docsSidebar.tsx
  // eslint-disable-next-line unicorn/prevent-abbreviations
  export const useDocsSidebar: () => ContextValue | undefined;
}
