// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').PluginConfig} */
const addAliasPlugin = () => ({
  name: 'add-alias-plugin',
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

/** @type {import('@docusaurus/types').PluginConfig} */
const injectPlausiblePlugin = () => ({
  name: 'inject-plausible-plugin',
  injectHtmlTags: () => ({
    headTags: [
      {
        tagName: 'script',
        attributes: {
          src: 'https://plausible.io/js/plausible.js',
          defer: true,
          'data-domain': 'docs.logto.io',
        },
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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logto Docs',
  url: 'https://docs.logto.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'logto-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/logto-io/docs/tree/master',
          editLocalizedFiles: true,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Silverhand Logo',
          src: 'img/logto.svg',
          srcDark: 'img/logto_dark.svg',
          href: 'https://logto.io',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs/README',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://blog.logto.io/',
            position: 'left',
            label: 'Blog',
          },
          {
            type: 'doc',
            docId: 'sdk/README',
            position: 'left',
            label: 'SDK',
          },
          {
            to: 'api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/logto-io/logto',
            label: 'GitHub',
            position: 'right',
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
            label: 'Docs',
            to: '/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/logto-io/logto',
          },
          {
            label: 'About Us',
            href: 'https://logto.io/about',
          },
          {
            label: 'Contact Us',
            href: 'mailto: contact@logto.io',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Silverhand Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        /**
         * When the page uses 'docusaurus-theme-redoc' theme, it requires 'scala' language in prism, or it will crash.
         *
         * Since 'additionalLanguages' here will override `"additionalLanguages": ["scala"]` from 'docusaurus-theme-redoc'
         * in `.docusaurus/globalData.json`, we should append 'scala' here instead.
         */
        additionalLanguages: ['swift', 'kotlin', 'groovy', 'java', 'scala'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'DE7QZWOVO6',
        apiKey: '4c64ad7f3b8622f59d8121dbac801337',
        indexName: 'logto',
      },
    }),
  plugins: [
    addAliasPlugin,
    injectPlausiblePlugin,
    'docusaurus-plugin-sass',
    [
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
      },
    ],
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
  ],
  themes: ['docusaurus-theme-redoc', '@docusaurus/theme-mermaid'],
};

module.exports = config;
