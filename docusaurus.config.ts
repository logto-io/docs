// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';
import type { Config } from '@docusaurus/types';

import {
  addAliasPlugin,
  cfPagesBranch,
  classicPresetConfig,
  commonMarkdown,
  commonStylesheets,
  createCommonThemeConfig,
  currentLocale,
  defaultLocale,
  getCloudflareSubdomain,
  injectHeadTagsPlugin,
  isCfPagesPreview,
  localeConfigs,
  mainSiteUrl,
} from './docusaurus-common.config';
import ogImageGenerator from './plugins/og-image-generator';

const getLogtoDocsUrl = () =>
  isCfPagesPreview
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs.pages.dev/`
    : mainSiteUrl;

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

  i18n: {
    defaultLocale,
    locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
    localeConfigs,
  },

  customFields: {
    inkeepApiKey: process.env.INKEEP_API_KEY,
  },

  staticDirectories: ['static', 'static-localized/' + currentLocale],

  markdown: commonMarkdown,

  trailingSlash: false,

  presets: [['classic', classicPresetConfig]],

  stylesheets: commonStylesheets,
  themeConfig: createCommonThemeConfig('main'),

  plugins: [
    addAliasPlugin,
    injectHeadTagsPlugin,
    'docusaurus-plugin-sass',
    ogImageGenerator,
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'terms',
        routeBasePath: 'terms',
        path: './terms',
        blogSidebarCount: 0,
        showReadingTime: false,
        feedOptions: {},
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'about',
        routeBasePath: 'about',
        path: './about',
        blogSidebarCount: 0,
        showReadingTime: false,
        feedOptions: {},
      },
    ],
  ].filter(Boolean),
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
