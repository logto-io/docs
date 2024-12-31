import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ThemeConfig, Options } from '@docusaurus/preset-classic';
import type { Config, PluginConfig } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { generateConnectorGuides } from './docs/integrations/generate';
import ogImageGenerator from './plugins/og-image-generator';

const defaultLocale = 'en';

// A workaround for locale-specific values in the config
// https://github.com/facebook/docusaurus/issues/4542#issuecomment-1434839071
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
const localePath = currentLocale === defaultLocale ? '' : currentLocale;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cfPagesBranch = process.env.CF_PAGES_BRANCH;

// https://community.cloudflare.com/t/algorithm-to-generate-a-preview-dns-subdomain-from-a-branch-name/477633/2
const getCloudflareSubdomain = (branchName: string) =>
  branchName
    .replace(/[^a-z0-9-]/g, '-')
    .substring(0, 28)
    .replace(/^-|-$/, '');

const getLogtoDocsUrl = () =>
  cfPagesBranch && cfPagesBranch !== 'master'
    ? `https://${getCloudflareSubdomain(cfPagesBranch)}.logto-docs.pages.dev/`
    : 'https://docs.logto.io/';

const { dracula } = themes;

const addAliasPlugin: PluginConfig = () => ({
  name: 'add-alias-plugin',
  configureWebpack: (config) => ({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@mdx-components': path.resolve(__dirname, './src/mdx-components'),
        '@scss': path.resolve(__dirname, './src/scss'),
      },
    },
  }),
});

/**
 * A workaround to override the docusaurus svgo config. By default docusaurus
 * does not prefix the svg ids, which can cause conflicts when multiple svgs
 * are used on the same page.
 * https://github.com/facebook/docusaurus/issues/8297
 *
 * TODO: @charles - Remove this once docusaurus 3.7 is released
 */
// @ts-expect-error - No return value is expected
const prefixSvgIdsPlugin: PluginConfig = () => ({
  name: 'prefix-svg-ids',
  configureWebpack(config) {
    const svgRule = config.module?.rules?.find(
      (
        rule
      ): rule is {
        test: RegExp;
        oneOf: Array<{ use: Array<{ options: { svgoConfig: { plugins: unknown[] } } }> }>;
      } =>
        rule !== null &&
        typeof rule === 'object' &&
        'test' in rule &&
        rule.test instanceof RegExp &&
        rule.test.source === '\\.svg$'
    );

    if (svgRule) {
      const useRule = svgRule.oneOf[0]?.use?.[0];
      const svgoConfig = useRule?.options.svgoConfig;

      if (svgoConfig && Array.isArray(svgoConfig.plugins)) {
        // eslint-disable-next-line @silverhand/fp/no-mutation
        svgoConfig.plugins = [...svgoConfig.plugins, 'prefixIds'];
      }
    }
  },
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
  url: getLogtoDocsUrl(),
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: 'logto-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN'],
  },

  markdown: {
    mermaid: true,
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        sitemap: {
          changefreq: 'weekly',
          ignorePatterns: [
            '/blog/**',
            '/tutorial/tags/**',
            // Some pages are not translated. Ignore them.
            '/*/tutorial',
            '/*/tutorial/**',
            '/*/terms',
            '/*/terms/**',
            '/*/about',
            '/*/about/**',
          ],
        },
        docs: {
          routeBasePath: '/',
          breadcrumbs: true,
          sidebarPath: './src/sidebar/index.ts',
          editUrl: 'https://github.com/logto-io/docs/tree/master',
          editLocalizedFiles: true,
          // To enabled math formula rendering
          // See https://docusaurus.io/docs/markdown-features/math-equations#configuration
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/scss/custom.scss',
        },
      } satisfies Options,
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Logto Logo',
        src: 'img/logto.svg',
        srcDark: 'img/logto_dark.svg',
        href: new URL(localePath, 'https://logto.io/').href,
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
        {
          title: 'Need help?',
          items: [
            {
              label: 'Contact support',
              href: 'https://logto.io/contact',
              icon: 'email',
              hideExternalLinkIcon: true,
            },
            {
              label: 'Open a GitHub issue',
              href: 'https://github.com/logto-io/logto/issues/new/choose',
              icon: 'github',
              hideExternalLinkIcon: true,
            },
            {
              label: 'Request a new feature',
              href: 'https://logto.productlane.com/roadmap',
              icon: 'roadmap',
              hideExternalLinkIcon: true,
            },
            {
              label: 'Ask the Discord community',
              href: 'https://discord.com/invite/UEPaF3j5e6',
              icon: 'discord',
              hideExternalLinkIcon: true,
            },
          ]
        }
      ],
      copyright: `Designed by Silverhand Inc.`,
    },
    prism: {
      theme: dracula,
      darkTheme: dracula,
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
    prefixSvgIdsPlugin,
    injectHeadTagsPlugin,
    'docusaurus-plugin-sass',
    ...generateConnectorGuides(),
    ogImageGenerator,
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
            to: '/logto-cloud/tenant-settings/#tenant-types-dev-vs-prod',
            from: ['/docs/recipes/tenant-type/', '/docs/references/tenant-type/'],
          },
          {
            to: '/logto-cloud/tenant-settings',
            from: '/docs/references/tenants/',
          },
          {
            to: '/end-user-flows/mfa/configure-mfa',
            from: [
              '/docs/recipes/multi-factor-auth/config-mfa/',
              '/docs/recipes/multi-factor-auth/configure-mfa/',
            ],
          },
          {
            to: '/connectors',
            from: [
              '/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors/',
              '/docs/recipes/configure-connectors/',
            ],
          },
          {
            to: '/introduction',
            from: [
              '/docs/tutorials/get-started/',
              '/docs/get-started/',
              '/docs/tutorials/get-started/introduction/',
              '/docs/get-started/welcome/',
            ],
          },
          {
            to: '/concepts/sign-in-experience',
            from: [
              '/docs/tutorials/get-started/sign-in-experience/',
              '/docs/concepts/sign-in-experience/',
            ],
          },
          {
            to: '/user-management/personal-access-token',
            from: [
              '/docs/recipes/manage-users/management-api/personal-access-token/',
              '/docs/recipes/manage-users/personal-access-token/',
            ],
          },
          {
            to: '/end-user-flows/sign-up-and-sign-in',
            from: ['/docs/references/openid-connect', '/docs/recipes/openid-connect'],
          },
          {
            to: '/end-user-flows/authentication-parameters',
            from: [
              '/docs/references/openid-connect/authentication-parameters',
              '/docs/recipes/openid-connect/authentication-parameters',
            ],
          },
          {
            to: '/end-user-flows/sign-out/#federated-sign-out-back-channel-logout',
            from: [
              '/docs/references/openid-connect/backchannel-logout',
              '/docs/recipes/openid-connect/backchannel-logout',
            ],
          },
          {
            to: '/concepts/opaque-token',
            from: [
              '/docs/references/openid-connect/introspect-tokens',
              '/docs/recipes/openid-connect/introspect-tokens',
            ],
          },
          {
            to: '/developers/signing-keys',
            from: [
              '/docs/references/openid-connect/signing-keys-rotation',
              '/docs/recipes/openid-connect/signing-keys-rotation',
            ],
          },
        ],
        // `existingPath` is the path `to`, the return value is the path `from`.
        createRedirects(existingPath: string) {
          if (existingPath.includes('/quick-starts')) {
            return existingPath.replace('/quick-starts', '/sdk');
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
