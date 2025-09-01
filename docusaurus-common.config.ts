import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { Config, PluginConfig, ThemeConfig } from '@docusaurus/types';
import { yes } from '@silverhand/essentials';
import { themes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { howToBasePath } from './src/theme/BlogPostItem/utils';

export const defaultLocale = 'en';

// A workaround for locale-specific values in the config
// https://github.com/facebook/docusaurus/issues/4542#issuecomment-1434839071
export const currentLocale = String(process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale);
export const localePath = currentLocale === defaultLocale ? '' : currentLocale;
export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const mainSiteUrl = 'https://docs.logto.io/';
export const tutorialsSiteUrl = 'https://tutorials.logto.io/';
export const cfPagesBranch = String(process.env.CF_PAGES_BRANCH);
export const isCfPagesPreview = Boolean(cfPagesBranch && cfPagesBranch !== 'master');
export const siteUrls = Object.freeze({
  main: mainSiteUrl,
  tutorials: tutorialsSiteUrl,
});

type Site = keyof typeof siteUrls;

// https://community.cloudflare.com/t/algorithm-to-generate-a-preview-dns-subdomain-from-a-branch-name/477633/2
export const getCloudflareSubdomain = (branchName: string) =>
  branchName
    .replaceAll(/[^\da-z-]/g, '-')
    .slice(0, 28)
    .replace(/^-|-$/, '');

export const { dracula } = themes;

export const addAliasPlugin: PluginConfig = () => ({
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

export const injectHeadTagsPlugin: PluginConfig = () => ({
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
        tagName: 'meta',
        attributes: {
          name: 'google-site-verification',
          content: '3EYzsnarDwG6zL2dlHvyC8ySVcV6Q3RGlvh7-bvhb2k',
        },
      },
    ],
  }),
});

/**
 * Disable the expensive bundler optimizations for non-production deployments, including previews.
 * @see https://github.com/facebook/docusaurus/discussions/11199
 */
const isProductionDeployment = yes(process.env.IS_PRODUCTION) && !isCfPagesPreview;
export const disableExpensiveBundlerOptimizationPlugin: PluginConfig = () => ({
  name: 'disable-expensive-bundler-optimizations',
  configureWebpack(_config, isServer) {
    return {
      optimization: {
        concatenateModules: isProductionDeployment ? !isServer : false,
      },
    };
  },
});

export const commonConfigs = {
  title: 'Logto docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/favicon.ico',
  organizationName: 'logto-io',
  projectName: 'docs',
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: false,
    },
    experimental_faster: {
      rspackBundler: true,
      rspackPersistentCache: false,
      ssgWorkerThreads: false,
    },
  },
} satisfies Partial<Config>;

/**
 * Create a common theme config for a Docusaurus site.
 *
 * If `isMainSite` is true, the config will generate relative URLs when possible; otherwise, it will
 * generate absolute URLs. This is useful when deploying multiple Docusaurus sites under the same
 * domain.
 *
 * For example, the main site is deployed at `https://docs.logto.io/`, and the
 * tutorials site is deployed at `https://tutorials.logto.io/`. A relative URL for the main site
 * in the tutorials site would result 404 errors if the URL is not prefixed with the main site
 * domain, as each site is a standalone single-page application.
 */
export const createCommonThemeConfig = (site: Site) => {
  const buildUrl = (pathname: string, forSite: Site) =>
    site === forSite ? pathname : new URL(pathname, siteUrls[forSite]).href;

  return Object.freeze({
    navbar: {
      logo: {
        alt: 'Logto Logo',
        src: 'img/logto.svg',
        srcDark: 'img/logto_dark.svg',
        href: new URL(localePath, 'https://logto.io/').href,
      },
      items: [
        {
          to: buildUrl('/introduction', 'main'),
          position: 'left',
          label: 'Docs',
        },
        {
          to: buildUrl('/quick-starts', 'main'),
          position: 'left',
          label: 'Quick starts',
        },
        {
          to: buildUrl('/integrations', 'main'),
          position: 'left',
          label: 'Integrations',
        },
        {
          to: buildUrl('/api-protection', 'main'),
          position: 'left',
          label: 'API protection',
        },
        {
          to: buildUrl('/use-cases', 'main'),
          position: 'left',
          label: 'Use cases',
        },
        {
          to: new URL('https://openapi.logto.io', mainSiteUrl).href,
          position: 'left',
          label: 'Logto APIs',
        },
        {
          type: 'localeDropdown',
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
          title: 'Developers',
          items: [
            { label: 'Docs', to: buildUrl('/introduction', 'main') },
            { label: 'Quick starts', to: buildUrl('/quick-starts', 'main') },
            { label: 'Integrations', to: buildUrl('/integrations', 'main') },
            {
              label: 'Account API',
              href: 'https://openapi.logto.io/group/endpoint-account-center',
            },
            {
              label: 'Experience API',
              href: 'https://openapi.logto.io/group/endpoint-experience',
            },
            { label: 'Management API', href: 'https://openapi.logto.io' },
            { label: 'Build X with Y', to: buildUrl('/' + howToBasePath, 'tutorials') },
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
          ],
        },
      ],
      copyright: `Designed by Silverhand Inc.`,
    },
    prism: {
      theme: dracula,
      darkTheme: dracula,
      additionalLanguages: [
        'bash',
        'csharp',
        'cshtml',
        'dart',
        'erb',
        'groovy',
        'http',
        'java',
        'json',
        'json5',
        'kotlin',
        'php',
        'ruby',
        'swift',
        'toml',
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
  } satisfies ThemeConfig);
};

export const localeConfigs = Object.freeze({
  'zh-CN': { label: '简体中文' },
  'zh-TW': { label: '繁體中文（台灣）' },
});

export const commonMarkdown = {
  mermaid: true,
};

export const commonStylesheets = [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
    type: 'text/css',
    crossorigin: 'anonymous',
  },
];

export const classicPresetConfig = {
  sitemap: {
    changefreq: 'weekly',
    ignorePatterns: [
      '/blog/**',
      // Some pages are not translated. Ignore them.
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
  svgr: {
    svgrConfig: {
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: { removeViewBox: false },
            },
          },
          'prefixIds',
        ],
      },
    },
  },
};

// Google One Tap related configurations
export const googleOneTapScripts = [
  {
    src: 'https://accounts.google.com/gsi/client',
    async: true,
    defer: true,
  },
];

export const createGoogleOneTapCustomFields = () => ({
  isProduction: yes(process.env.IS_PRODUCTION),
  isDebuggingEnabled: yes(process.env.IS_DEBUGGING_ENABLED),
  googleOneTapConfig: process.env.GOOGLE_ONE_TAP_CONFIG,
});

export const createCommonCustomFields = (siteSpecificFields: Record<string, unknown> = {}) => ({
  ...createGoogleOneTapCustomFields(),
  ...siteSpecificFields,
});
