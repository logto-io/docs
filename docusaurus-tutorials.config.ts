// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';

import type { Config } from '@docusaurus/types';
import { cond } from '@silverhand/essentials';

import {
  addAliasPlugin,
  cfPagesBranch,
  classicPresetConfig,
  commonI18n,
  commonMarkdown,
  commonStylesheets,
  createCommonThemeConfig,
  currentLocale,
  getCloudflareSubdomain,
  injectHeadTagsPlugin,
  isCfPagesPreview,
  mainSiteUrl,
} from './docusaurus-common.config';

const getLogtoDocsUrl = () =>
  isCfPagesPreview
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs-tutorials.pages.dev/`
    : mainSiteUrl;

// Supported locales for the "Build X with Y" tutorials
const tutorialLocales = ['en', 'es', 'fr', 'ja'];

const config: Config = {
  title: 'Logto docs',
  url: getLogtoDocsUrl(),
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: 'logto-io',
  projectName: 'docs',

  i18n: commonI18n,

  customFields: {
    mainSiteUrl,
    // Remove this on purpose to avoid rendering search bar in the tutorials site
    // inkeepApiKey: process.env.INKEEP_API_KEY,
  },

  staticDirectories: ['static', 'static-localized/' + currentLocale],

  markdown: commonMarkdown,

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        ...classicPresetConfig,
        docs: {
          ...classicPresetConfig.docs,
          sidebarPath: undefined,
          exclude: ['*/**'],
        },
      },
    ],
  ],

  stylesheets: commonStylesheets,
  themeConfig: createCommonThemeConfig('tutorials'),

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
