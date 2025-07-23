"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-unassigned-import
require("dotenv/config");
var docusaurus_common_config_1 = require("./docusaurus-common.config");
var og_image_generator_1 = require("./plugins/og-image-generator");
var getLogtoDocsUrl = function () {
    return docusaurus_common_config_1.isCfPagesPreview
        ? "https://".concat((0, docusaurus_common_config_1.getCloudflareSubdomain)(docusaurus_common_config_1.cfPagesBranch), ".logto-docs.pages.dev/")
        : docusaurus_common_config_1.mainSiteUrl;
};
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
        locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
        localeConfigs: docusaurus_common_config_1.localeConfigs,
    },
    customFields: {
        inkeepApiKey: process.env.INKEEP_API_KEY,
    },
    staticDirectories: ['static', 'static-localized/' + docusaurus_common_config_1.currentLocale],
    markdown: docusaurus_common_config_1.commonMarkdown,
    trailingSlash: false,
    presets: [['classic', docusaurus_common_config_1.classicPresetConfig]],
    stylesheets: docusaurus_common_config_1.commonStylesheets,
    themeConfig: (0, docusaurus_common_config_1.createCommonThemeConfig)('main'),
    plugins: [
        docusaurus_common_config_1.addAliasPlugin,
        docusaurus_common_config_1.injectHeadTagsPlugin,
        'docusaurus-plugin-sass',
        og_image_generator_1.default,
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
exports.default = config;
