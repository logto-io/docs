// eslint-disable-next-line import/no-unassigned-import
import 'dotenv/config';

import type { Config } from '@docusaurus/types';
import { yes } from '@silverhand/essentials';

import {
  addAliasPlugin,
  cfPagesBranch,
  classicPresetConfig,
  commonMarkdown,
  commonStylesheets,
  createCommonCustomFields,
  createCommonThemeConfig,
  currentLocale,
  defaultLocale,
  getCloudflareSubdomain,
  googleOneTapScripts,
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

  scripts: googleOneTapScripts,

  i18n: {
    defaultLocale,
    locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
    localeConfigs,
  },

  customFields: createCommonCustomFields({
    inkeepApiKey: process.env.INKEEP_API_KEY,
    logtoApiBaseUrl: process.env.LOGTO_API_BASE_URL,
    isDevFeatureEnabled: yes(process.env.IS_DEV_FEATURE_ENABLED),
  }),

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
