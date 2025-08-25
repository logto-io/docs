// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';

import type { Config } from '@docusaurus/types';
import { cond } from '@silverhand/essentials';

import {
  addAliasPlugin,
  cfPagesBranch,
  classicPresetConfig,
  commonConfigs,
  commonMarkdown,
  commonStylesheets,
  createCommonCustomFields,
  createCommonThemeConfig,
  currentLocale,
  defaultLocale,
  disableExpensiveBundlerOptimizationPlugin,
  getCloudflareSubdomain,
  googleOneTapScripts,
  injectHeadTagsPlugin,
  isCfPagesPreview,
  localeConfigs,
  mainSiteUrl,
  tutorialsSiteUrl,
} from './docusaurus-common.config';
import { howToBasePath } from './src/theme/BlogPostItem/utils';

const getLogtoDocsUrl = () =>
  isCfPagesPreview
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs-tutorials.pages.dev/`
    : tutorialsSiteUrl;

// Supported locales for the "Build X with Y" tutorials
const tutorialLocales = ['en', 'es', 'fr', 'ja', 'th'];

const config: Config = {
  ...commonConfigs,
  url: getLogtoDocsUrl(),

  scripts: googleOneTapScripts,

  i18n: {
    defaultLocale,
    locales: tutorialLocales,
    localeConfigs,
  },

  customFields: createCommonCustomFields({
    mainSiteUrl,
    // Remove this on purpose to avoid rendering search bar in the tutorials site
    // inkeepApiKey: process.env.INKEEP_API_KEY,
  }),

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
    disableExpensiveBundlerOptimizationPlugin,
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
          routeBasePath: howToBasePath,
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
