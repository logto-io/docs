import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

import type { ThemeConfig, Options } from '@docusaurus/preset-classic';
import type { Config, PluginConfig } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { cond } from '@silverhand/essentials';

const defaultLocale = 'en';

// Supported locales for the "Build X with Y" tutorials
const tutorialLocales = ['en', 'es', 'fr', 'ja'];

// A workaround for locale-specific values in the config
// https://github.com/facebook/docusaurus/issues/4542#issuecomment-1434839071
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
const localePath = currentLocale === defaultLocale ? '' : currentLocale;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cfPagesBranch = process.env.CF_PAGES_BRANCH;

// https://community.cloudflare.com/t/algorithm-to-generate-a-preview-dns-subdomain-from-a-branch-name/477633/2
const getCloudflareSubdomain = (branchName: string) =>
  branchName
    .replace(/[^a-z0-9-]/g, '-')
    .substring(0, 28)
    .replace(/^-|-$/, '');

const getLogtoDocsUrl = () =>
  cfPagesBranch && cfPagesBranch !== 'master'
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-tutorial.pages.dev/`
    : 'https://docs.logto.io/';

const { dracula } = themes;

const addAliasPlugin: PluginConfig = () => ({
  name: 'add-alias-plugin',
  configureWebpack: (config) => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@mdx-components': path.resolve(__dirname, './src/mdx-components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

const injectHeadTagsPlugin: PluginConfig = () => ({
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

const config: Config = {
  title: 'Logto docs',
  url: getLogtoDocsUrl(),
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'logto-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
    localeConfigs: {
      'zh-CN': { label: '简体中文' },
      'zh-TW': { label: '繁體中文（台灣）' },
    },
  },

  customFields: {
    inkeepApiKey: process.env.INKEEP_API_KEY,
    buildTarget: process.env.BUILD_TARGET,
  },

  staticDirectories: ['static', 'static-localized/' + currentLocale],

  markdown: {
    mermaid: true,
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
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
          editUrl: 'https://github.com/logto-io/docs/tree/master',
          editLocalizedFiles: true,
          // To enabled math formula rendering
          // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          exclude: [
            '*/**',
          ],
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
      } satisfies Options,
    ],
  ],
  // To enabled math formula rendering
  // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Logto Logo',
        src: 'img/logto.svg',
        srcDark: 'img/logto_dark.svg',
        href: new URL(localePath, 'https://logto.io/').href,
      },
      items: [
        {
          to: 'https://docs.logto.io/introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://docs.logto.io/quick-starts',
          position: 'left',
          label: 'Quick starts',
        },
        {
          to: 'https://docs.logto.io/integrations',
          position: 'left',
          label: 'Connectors',
        },
        {
          to: 'https://openapi.logto.io',
          position: 'left',
          label: 'API',
        },
      ],
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
            { label: 'Docs', href: 'https://docs.logto.io' },
            { label: 'Quick starts', href: 'https://docs.logto.io/quick-starts' },
            { label: 'Integrations', href: 'https://docs.logto.io/integrations' },
            {
              label: 'Account API',
              href: 'https://openapi.logto.io/group/endpoint-account-center',
            },
            {
              label: 'Experience API',
              href: 'https://openapi.logto.io/group/endpoint-experience',
            },
            { label: 'Management API', href: 'https://openapi.logto.io' },
            { label: 'Build X with Y', href: 'pathname:///tutorial' },
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
  } satisfies ThemeConfig,
  plugins: [
    addAliasPlugin,
    injectHeadTagsPlugin,
    'docusaurus-plugin-sass',
    cond(
      tutorialLocales.includes(currentLocale) && [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'tutorial',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'tutorial',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './tutorial',
          blogSidebarCount: 0,
          showReadingTime: false,
          postsPerPage: 'ALL',
        },
      ]
    ),
  ].filter(Boolean),
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
