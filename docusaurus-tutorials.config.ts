// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';

import ssrTemplate from '@docusaurus/core/lib/ssg/ssgTemplate.html';
import type { Config, PluginConfig } from '@docusaurus/types';
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

/**
 * The public path for the static files. Since docusaurus does not have a built-in way to set the
 * public path for the static files, we have to use the workaround from
 * https://github.com/facebook/docusaurus/discussions/4123#discussioncomment-8850455
 *
 * If it's a preview environment, no need to set the public path, since the static files are served
 * directly from the root of the domain (e.g. https://some-branch.logto-docs-tutorials.pages.dev/foo.js).
 *
 * If it's a production environment, we need to set the public path to the base URL to a special
 * directory to avoid conflicts with the static files from the main site (e.g. https://docs.logto.io/tutorials/public/foo.js).
 * In this way, we can set up a rewrite rule in the CDN to serve the static files from this directory
 * without messing with the main site.
 */
const publicPath =
  isCfPagesPreview || process.env.NODE_ENV !== 'production' ? '' : '/tutorials/public/';

const publicPathPlugin: PluginConfig = () => ({
  name: 'public-path-plugin',
  configureWebpack: () => ({
    output: {
      publicPath,
    },
  }),
});

// Supported locales for the "Build X with Y" tutorials
const tutorialLocales = ['en', 'es', 'fr', 'ja'];

const getLogtoDocsUrl = () =>
  isCfPagesPreview
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs-tutorials.pages.dev/`
    : mainSiteUrl;

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

  ssrTemplate: ssrTemplate.replaceAll('<%= it.baseUrl %>', publicPath + '<%= it.baseUrl %>'),

  i18n: commonI18n,

  customFields: {
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
  themeConfig: createCommonThemeConfig(false),

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
    publicPathPlugin,
  ].filter(Boolean),
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
