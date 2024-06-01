// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const { dracula: darkCodeTheme, github: lightCodeTheme } = require('prism-react-renderer').themes;

const { generateConnectorGuides } = require('./docs/integrations/generate');

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
const injectHeadTagsPlugin = () => ({
  name: 'inject-head-tags-plugin',
  injectHtmlTags: () => ({
    headTags: [
      {
        tagName: 'script',
        attributes: {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'logto.io',
        },
      },
      {
        tagName: 'script',
        innerHTML: `
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          window.addEventListener('load', function() {
            plausible('AnyPageView', { props: { source: 'Docs' } });
          });
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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logto docs',
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
            docId: 'quick-starts/README',
            position: 'left',
            label: 'Quick starts',
          },
          {
            type: 'doc',
            docId: 'integrations/README',
            position: 'left',
            label: 'Integrations',
          },
          {
            to: 'https://openapi.logto.io/',
            position: 'left',
            label: 'API',
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
    }),
  plugins: [
    addAliasPlugin,
    injectHeadTagsPlugin,
    'docusaurus-plugin-sass',
    ...generateConnectorGuides(),
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        // `existingPath` is the path `to`, the return value is the path `from`.
        createRedirects(existingPath) {
          if (existingPath.includes('/quick-starts')) {
            return existingPath.replace('/quick-starts', '/sdk');
          }

          if (['/references/openid-connect', '/references/tenant-type'].some((path) => existingPath.includes(path))) {
            return existingPath.replace('/references/', '/recipes/');
          }

          // eslint-disable-next-line unicorn/no-useless-undefined
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
