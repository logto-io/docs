import 'dotenv/config';
import type { Config } from '@docusaurus/types';

import ogImageGenerator from './plugins/og-image-generator';
import tutorialGenerator from './plugins/tutorial-generator';
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

const getLogtoDocsUrl = () =>
  cfPagesBranch && cfPagesBranch !== 'master'
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs.pages.dev/`
    : 'https://docs.logto.io/';

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
    inkeepApiKey: process.env.INKEEP_API_KEY,
  },


  staticDirectories: [
    'static',
    'static-localized/' + currentLocale,
  ],

  markdown: commonMarkdown,

  trailingSlash: false,

  presets: [
    [ 'classic', classicPresetConfig ],
  ],

  stylesheets: commonStylesheets,

  themeConfig: {
    ...commonThemeConfig,
    navbar: {
      ...commonThemeConfig.navbar,
      items: [
        {
          type: 'doc',
          docId: 'introduction/README',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'quick-starts/README',
          position: 'left',
          label: 'Quick starts',
        },
        {
          type: 'doc',
          docId: 'integrations/README',
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
    tutorialGenerator,
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
