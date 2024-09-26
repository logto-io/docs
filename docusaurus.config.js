// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('node:path');

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

export const gtagAwTrackingId = 'AW-11124811245';

/** @type {import('@docusaurus/types').PluginConfig} */
const injectHeadTagsPlugin = () => ({
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
        tagName: 'script',
        attributes: {
          async: true,
          crossorigin: 'anonymous',
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagAwTrackingId}`,
        },
      },
      {
        tagName: 'script',
        innerHTML: `
          if (shouldTrack) {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAwTrackingId}');
          }
        `,
      },
      {
        tagName: 'script',
        innerHTML: `
          if (shouldTrack) {
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "o9cb961ir0");
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
            items: [
              {
                to: 'https://bump.sh/logto/doc/logto-experience-api',
                label: 'Experience API',
              },
              {
                to: 'https://bump.sh/logto/doc/logto-management-api',
                label: 'Management API',
              },
            ],
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
        redirects: [
          {
            to: '/docs/references/tenants/#tenant-type',
            from: ['/docs/recipes/tenant-type/', '/docs/references/tenant-type/'],
          },
          {
            to: '/docs/recipes/multi-factor-auth/configure-mfa/',
            from: '/docs/recipes/multi-factor-auth/config-mfa/',
          },
          {
            to: '/docs/recipes/configure-connectors/',
            from: '/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors/',
          },
          {
            to: '/docs/get-started/',
            from: '/docs/tutorials/get-started/',
          },
          {
            to: '/docs/get-started/welcome/',
            from: '/docs/tutorials/get-started/introduction/',
          },
          {
            to: '/docs/concepts/sign-in-experience/',
            from: '/docs/tutorials/get-started/sign-in-experience/',
          },
        ],
        // `existingPath` is the path `to`, the return value is the path `from`.
        createRedirects(existingPath) {
          if (existingPath.includes('/quick-starts')) {
            return existingPath.replace('/quick-starts', '/sdk');
          }

          if (existingPath.includes('/references/openid-connect')) {
            return existingPath.replace('/references/openid-connect', '/recipes/openid-connect');
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
