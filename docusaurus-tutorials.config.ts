import 'dotenv/config';

import type { Config } from '@docusaurus/types';
import { cond } from '@silverhand/essentials';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import {
  addAliasPlugin,
  cfPagesBranch,
  classicPresetConfig,
  commonI18n,
  commonMarkdown,
  commonStylesheets,
  commonThemeConfig,
  currentLocale,
  getCloudflareSubdomain,
  injectHeadTagsPlugin,
} from './docusaurus-common';

// Supported locales for the "Build X with Y" tutorials
const tutorialLocales = ['en', 'es', 'fr', 'ja'];

const getLogtoDocsUrl = () =>
  cfPagesBranch && cfPagesBranch !== 'master'
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs-tutorials.pages.dev/`
    : 'https://docs.logto.io/';

const config: Config = {
  title: 'Logto docs',
  url: getLogtoDocsUrl(),
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'logto-io',
  projectName: 'docs',

  i18n: commonI18n,

  customFields: {
    inkeepApiKey: process.env.INKEEP_API_KEY,
    buildTarget: process.env.BUILD_TARGET,
  },

  staticDirectories: ['static', 'static-localized/' + currentLocale],

  markdown: commonMarkdown,

  trailingSlash: false,

  presets: [
    [ 'classic', {
      ...classicPresetConfig,
      docs: {
        ...classicPresetConfig.docs,
        sidebarPath: undefined,
        exclude: ['*/**'],
      },
    } ],
  ],

  stylesheets: commonStylesheets,

  themeConfig: {
    ...commonThemeConfig,
    navbar: {
      ...commonThemeConfig.navbar,
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
  },

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
          id: 'tutorials',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'tutorials',
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
