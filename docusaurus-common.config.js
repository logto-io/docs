"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.classicPresetConfig = exports.commonStylesheets = exports.commonMarkdown = exports.localeConfigs = exports.createCommonThemeConfig = exports.injectHeadTagsPlugin = exports.addAliasPlugin = exports.dracula = exports.getCloudflareSubdomain = exports.siteUrls = exports.isCfPagesPreview = exports.cfPagesBranch = exports.tutorialsSiteUrl = exports.mainSiteUrl = exports.__dirname = exports.localePath = exports.currentLocale = exports.defaultLocale = void 0;
var node_path_1 = require("node:path");
var node_url_1 = require("node:url");
var prism_react_renderer_1 = require("prism-react-renderer");
var rehype_katex_1 = require("rehype-katex");
var remark_math_1 = require("remark-math");
var utils_1 = require("./src/theme/BlogPostItem/utils");
exports.defaultLocale = 'en';
// A workaround for locale-specific values in the config
// https://github.com/facebook/docusaurus/issues/4542#issuecomment-1434839071
exports.currentLocale = String((_a = process.env.DOCUSAURUS_CURRENT_LOCALE) !== null && _a !== void 0 ? _a : exports.defaultLocale);
exports.localePath = exports.currentLocale === exports.defaultLocale ? '' : exports.currentLocale;
exports.__dirname = node_path_1.default.dirname((0, node_url_1.fileURLToPath)(import.meta.url));
exports.mainSiteUrl = 'https://docs.logto.io/';
exports.tutorialsSiteUrl = 'https://tutorials.logto.io/';
exports.cfPagesBranch = String(process.env.CF_PAGES_BRANCH);
exports.isCfPagesPreview = Boolean(exports.cfPagesBranch && exports.cfPagesBranch !== 'master');
exports.siteUrls = Object.freeze({
    main: exports.mainSiteUrl,
    tutorials: exports.tutorialsSiteUrl,
});
// https://community.cloudflare.com/t/algorithm-to-generate-a-preview-dns-subdomain-from-a-branch-name/477633/2
var getCloudflareSubdomain = function (branchName) {
    return branchName
        .replaceAll(/[^\da-z-]/g, '-')
        .slice(0, 28)
        .replace(/^-|-$/, '');
};
exports.getCloudflareSubdomain = getCloudflareSubdomain;
exports.dracula = prism_react_renderer_1.themes.dracula;
var addAliasPlugin = function () { return ({
    name: 'add-alias-plugin',
    configureWebpack: function () { return ({
        resolve: {
            alias: {
                '@components': node_path_1.default.resolve(exports.__dirname, './src/components'),
                '@mdx-components': node_path_1.default.resolve(exports.__dirname, './src/mdx-components'),
                '@scss': node_path_1.default.resolve(exports.__dirname, './src/scss'),
            },
        },
    }); },
}); };
exports.addAliasPlugin = addAliasPlugin;
var injectHeadTagsPlugin = function () { return ({
    name: 'inject-head-tags-plugin',
    injectHtmlTags: function () { return ({
        headTags: [
            {
                tagName: 'script',
                innerHTML: "\n          var shouldTrack =\n            window.location.hostname === 'logto.io' || window.location.hostname.endsWith('logto.io');\n          if (!shouldTrack) {\n            console.warn('Not tracking because the hostname is not logto.io');\n          }\n        ",
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
                innerHTML: "\n          if (shouldTrack) {\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };\n          }\n        ",
            },
            {
                tagName: 'meta',
                attributes: {
                    name: 'google-site-verification',
                    content: '3EYzsnarDwG6zL2dlHvyC8ySVcV6Q3RGlvh7-bvhb2k',
                },
            },
        ],
    }); },
}); };
exports.injectHeadTagsPlugin = injectHeadTagsPlugin;
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
var createCommonThemeConfig = function (site) {
    var buildUrl = function (pathname, forSite) {
        return site === forSite ? pathname : new URL(pathname, exports.siteUrls[forSite]).href;
    };
    return Object.freeze({
        navbar: {
            logo: {
                alt: 'Logto Logo',
                src: 'img/logto.svg',
                srcDark: 'img/logto_dark.svg',
                href: new URL(exports.localePath, 'https://logto.io/').href,
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
                    to: new URL('https://openapi.logto.io', exports.mainSiteUrl).href,
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
                        { label: 'Build X with Y', to: buildUrl('/' + utils_1.howToBasePath, 'tutorials') },
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
            copyright: "Designed by Silverhand Inc.",
        },
        prism: {
            theme: exports.dracula,
            darkTheme: exports.dracula,
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
    });
};
exports.createCommonThemeConfig = createCommonThemeConfig;
exports.localeConfigs = Object.freeze({
    'zh-CN': { label: '简体中文' },
    'zh-TW': { label: '繁體中文（台灣）' },
});
exports.commonMarkdown = {
    mermaid: true,
};
exports.commonStylesheets = [
    {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
        type: 'text/css',
        crossorigin: 'anonymous',
    },
];
exports.classicPresetConfig = {
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
        remarkPlugins: [remark_math_1.default],
        rehypePlugins: [rehype_katex_1.default],
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
