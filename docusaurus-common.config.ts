import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { PluginConfig, ThemeConfig } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export const defaultLocale = 'en';

// A workaround for locale-specific values in the config
// https://github.com/facebook/docusaurus/issues/4542#issuecomment-1434839071
export const currentLocale = String(process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale);
export const localePath = currentLocale === defaultLocale ? '' : currentLocale;

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const cfPagesBranch = String(process.env.CF_PAGES_BRANCH);
export const isCfPagesPreview = Boolean(cfPagesBranch && cfPagesBranch !== 'master');

// https://community.cloudflare.com/t/algorithm-to-generate-a-preview-dns-subdomain-from-a-branch-name/477633/2
export const getCloudflareSubdomain = (branchName: string) =>
  branchName
    .replaceAll(/[^\da-z-]/g, '-')
    .slice(0, 28)
    .replace(/^-|-$/, '');

export const { dracula } = themes;

export const addAliasPlugin: PluginConfig = () => ({
  name: 'add-alias-plugin',
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@mdx-components': path.resolve(__dirname, './src/mdx-components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

export const injectHeadTagsPlugin: PluginConfig = () => ({
  name: 'inject-head-tags-plugin',
  injectHtmlTags: () => ({
    headTags: [
      {
        tagName: 'script',
        innerHTML: `
          var shouldTrack =
            window.location.hostname === 'logto.io' || window.location.hostname.endsWith('logto.io');
          if (!shouldTrack) {
            console.warn('Not tracking because the hostname is not logto.io');
          }
        `,
      },
      {
        tagName: 'script',
        attributes: {
          src: 'https://akasha.logto.io/placebo/sabaean.js',
          defer: true,
          'data-api': 'https://akasha.logto.io/placebo/eagan',
          'data-domain': 'logto.io',
        },
      },
      {
        tagName: 'script',
        innerHTML: `
          if (shouldTrack) {
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          }
        `,
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'google-site-verification',
          content: '3EYzsnarDwG6zL2dlHvyC8ySVcV6Q3RGlvh7-bvhb2k',
        },
      },
    ],
  }),
});

export const commonThemeConfig = {
  navbar: {
    logo: {
      alt: 'Logto Logo',
      src: 'img/logto.svg',
      srcDark: 'img/logto_dark.svg',
      href: new URL(localePath, 'https://logto.io/').href,
    },
  },
  footer: {
    logo: {
      alt: 'Logo',
      src: '/img/silverhand.svg',
    },
    style: 'dark',
    links: [
      {
        title: 'Developers',
        items: [
          { label: 'Docs', to: '/' },
          { label: 'Quick starts', to: '/quick-starts' },
          { label: 'Integrations', to: '/integrations' },
          {
            label: 'Account API',
            href: 'https://openapi.logto.io/group/endpoint-account-center',
          },
          {
            label: 'Experience API',
            href: 'https://openapi.logto.io/group/endpoint-experience',
          },
          { label: 'Management API', href: 'https://openapi.logto.io' },
          { label: 'Build X with Y', href: 'pathname:///tutorials' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Pricing', href: 'https://logto.io/pricing' },
          { label: 'Blogs', href: 'https://blog.logto.io' },
          { label: 'Auth Wiki', href: 'https://auth.wiki' },
          { label: "What's new", href: 'https://blog.logto.io/categories/changelogs/#all' },
          { label: 'YouTube', href: 'https://youtube.com/@logto-io' },
          { label: 'GitHub', href: 'https://github.com/logto-io/logto' },
        ],
      },
      {
        title: 'Need help?',
        items: [
          {
            label: 'Contact support',
            href: 'https://logto.io/contact',
            icon: 'email',
            hideExternalLinkIcon: true,
          },
          {
            label: 'Open a GitHub issue',
            href: 'https://github.com/logto-io/logto/issues/new/choose',
            icon: 'github',
            hideExternalLinkIcon: true,
          },
          {
            label: 'Request a new feature',
            href: 'https://logto.productlane.com/roadmap',
            icon: 'roadmap',
            hideExternalLinkIcon: true,
          },
          {
            label: 'Ask the Discord community',
            href: 'https://discord.com/invite/UEPaF3j5e6',
            icon: 'discord',
            hideExternalLinkIcon: true,
          },
        ],
      },
    ],
    copyright: `Designed by Silverhand Inc.`,
  },
  prism: {
    theme: dracula,
    darkTheme: dracula,
    additionalLanguages: [
      'swift',
      'kotlin',
      'groovy',
      'java',
      'php',
      'json',
      'bash',
      'csharp',
      'cshtml',
      'json5',
      'dart',
      'ruby',
      'erb',
      'http',
    ],
  },
  colorMode: {
    respectPrefersColorScheme: true,
  },
  algolia: {
    appId: 'DE7QZWOVO6',
    apiKey: '4c64ad7f3b8622f59d8121dbac801337',
    indexName: 'logto',
  },
} satisfies ThemeConfig;

export const commonI18n = {
  defaultLocale: 'en',
  locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
  localeConfigs: {
    'zh-CN': { label: '简体中文' },
    'zh-TW': { label: '繁體中文（台灣）' },
  },
};

export const commonMarkdown = {
  mermaid: true,
};

export const commonStylesheets = [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
    type: 'text/css',
    crossorigin: 'anonymous',
  },
];

export const classicPresetConfig = {
  sitemap: {
    changefreq: 'weekly',
    ignorePatterns: [
      '/blog/**',
      // Some pages are not translated. Ignore them.
      '/*/terms',
      '/*/terms/**',
      '/*/about',
      '/*/about/**',
    ],
  },
  docs: {
    routeBasePath: '/',
    breadcrumbs: true,
    sidebarPath: './src/sidebar/index.ts',
    editUrl: 'https://github.com/logto-io/docs/tree/master',
    editLocalizedFiles: true,
    // To enabled math formula rendering
    // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  theme: {
    customCss: './src/scss/custom.scss',
  },
  svgr: {
    svgrConfig: {
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: { removeViewBox: false },
            },
          },
          'prefixIds',
        ],
      },
    },
  },
};
