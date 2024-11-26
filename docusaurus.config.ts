import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ThemeConfig, Options } from '@docusaurus/preset-classic';
import type { Config, PluginConfig } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { generateConnectorGuides } from './docs/integrations/generate';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { dracula: darkCodeTheme, github: lightCodeTheme } = themes;

const addAliasPlugin: PluginConfig = () => ({
  name: 'add-alias-plugin',
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@mdx-components': path.resolve(__dirname, './src/mdx-components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

const gtagAwTrackingId = 'AW-11124811245';

const injectHeadTagsPlugin: PluginConfig = () => ({
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

const config: Config = {
  title: 'Logto docs',
  url: 'https://docs.logto.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
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
      {
        docs: {
          routeBasePath: '/',
          breadcrumbs: true,
          sidebarPath: './src/sidebar/index.ts',
          editUrl: 'https://github.com/logto-io/docs/tree/feature/docs-v2',
          editLocalizedFiles: true,
          // To enabled math formula rendering
          // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/scss/custom.scss',
        },
      } satisfies Options,
    ],
  ],
  // To enabled math formula rendering
  // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
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
    footer: {
      logo: {
        alt: 'Logo',
        src: '/img/silverhand.svg',
      },
      style: 'dark',
      links: [
        {
          title: 'Developers',
          items: [
            { label: 'Docs', to: '/' },
            { label: 'Quick starts', to: '/quick-starts' },
            { label: 'Integrations', to: '/integrations' },
            {
              label: 'Account API',
              to: 'https://openapi.logto.io/group/endpoint-account-center',
            },
            {
              label: 'Experience API',
              to: 'https://openapi.logto.io/group/endpoint-experience',
            },
            { label: 'Management API', to: 'https://openapi.logto.io' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Pricing', href: 'https://logto.io/pricing' },
            { label: 'Blogs', href: 'https://blog.logto.io' },
            { label: 'Auth Wiki', href: 'https://auth.wiki' },
            { label: "What's new", href: 'https://blog.logto.io/categories/changelogs/#all' },
            { label: 'YouTube', href: 'https://youtube.com/@logto-io' },
            { label: 'GitHub', href: 'https://github.com/logto-io/logto' },
          ],
        },
      ],
      copyright: `Designed by © Silverhand Inc.`,
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
  } satisfies ThemeConfig,
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
          {
            to: '/docs/recipes/manage-users/personal-access-token/',
            from: '/docs/recipes/manage-users/management-api/personal-access-token/',
          },
        ],
        // `existingPath` is the path `to`, the return value is the path `from`.
        createRedirects(existingPath: string) {
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

export default config;
