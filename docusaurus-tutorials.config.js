"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-unassigned-import
require("dotenv/config");
var essentials_1 = require("@silverhand/essentials");
var docusaurus_common_config_1 = require("./docusaurus-common.config");
var utils_1 = require("./src/theme/BlogPostItem/utils");
var getLogtoDocsUrl = function () {
    return docusaurus_common_config_1.isCfPagesPreview
        ? "https://".concat((0, docusaurus_common_config_1.getCloudflareSubdomain)(docusaurus_common_config_1.cfPagesBranch), ".logto-docs-tutorials.pages.dev/")
        : docusaurus_common_config_1.tutorialsSiteUrl;
};
// Supported locales for the "Build X with Y" tutorials
var tutorialLocales = ['en', 'es', 'fr', 'ja'];
var config = {
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
        defaultLocale: docusaurus_common_config_1.defaultLocale,
        locales: ['en', 'es', 'fr', 'ja'],
        localeConfigs: docusaurus_common_config_1.localeConfigs,
    },
    customFields: {
        mainSiteUrl: docusaurus_common_config_1.mainSiteUrl,
        // Remove this on purpose to avoid rendering search bar in the tutorials site
        // inkeepApiKey: process.env.INKEEP_API_KEY,
    },
    staticDirectories: ['static', 'static-localized/' + docusaurus_common_config_1.currentLocale],
    markdown: docusaurus_common_config_1.commonMarkdown,
    trailingSlash: false,
    presets: [
        [
            'classic',
            __assign(__assign({}, docusaurus_common_config_1.classicPresetConfig), { docs: __assign(__assign({}, docusaurus_common_config_1.classicPresetConfig.docs), { sidebarPath: undefined, exclude: ['*/**'] }) }),
        ],
    ],
    stylesheets: docusaurus_common_config_1.commonStylesheets,
    themeConfig: (0, docusaurus_common_config_1.createCommonThemeConfig)('tutorials'),
    plugins: [
        docusaurus_common_config_1.addAliasPlugin,
        docusaurus_common_config_1.injectHeadTagsPlugin,
        'docusaurus-plugin-sass',
        (0, essentials_1.cond)(tutorialLocales.includes(docusaurus_common_config_1.currentLocale) && [
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
                routeBasePath: utils_1.howToBasePath,
                /**
                 * Path to data on filesystem relative to site dir.
                 */
                path: './tutorial',
                blogSidebarCount: 0,
                showReadingTime: false,
                postsPerPage: 'ALL',
            },
        ]),
    ].filter(Boolean),
    themes: ['@docusaurus/theme-mermaid'],
};
exports.default = config;
