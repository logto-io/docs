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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExecutionEnvironment_1 = require("@docusaurus/ExecutionEnvironment");
var Translate_1 = require("@docusaurus/Translate");
var theme_common_1 = require("@docusaurus/theme-common");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var essentials_1 = require("@silverhand/essentials");
var prism_react_renderer_1 = require("prism-react-renderer");
var react_1 = require("react");
var customStyles = "\n.ikp-ai-chat-tagline__container,\n.ikp-ai-search-tagline__container {\n  position: relative;\n  color: var(--logto-neutral-variant-80);\n\n  > * {\n    color: var(--logto-neutral-variant-80) !important;\n  }\n\n  &:before {\n    content: '&';\n    position: absolute;\n    margin-left: 160px;\n    font: var(--font-body-2);\n    color: inherit;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    margin-left: 178px;\n    width: 60px;\n    height: 20px;\n    background: var(--inkeep-logto-icon) center/60px 20px no-repeat;\n  }\n}\n\n.ikp-ai-chat-header__toolbar-header-wrapper {\n  visibility: hidden;\n}\n\n.ikp-codeblock-header {\n  background-color: var(--ikp-color-gray-dark-800);\n\n  .ikp-codeblock-header-language {\n    color: var(--ikp-color-gray-400);\n  }\n\n  .ikp-codeblock-copy-button {\n    color: var(--ikp-color-white-alpha-700);\n    \n    &:hover {\n      color: var(--ikp-color-white-alpha-950);\n    }\n  }\n}\n\n.ikp-codeblock-highlighter {\n  background-color: var(--ikp-color-gray-dark-900);\n}";
var useInkeepConfigs = function () {
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var _a = (0, useDocusaurusContext_1.default)().siteConfig.customFields, customFields = _a === void 0 ? {} : _a;
    var inkeepApiKey = customFields.inkeepApiKey;
    var apiKey = (0, essentials_1.cond)(typeof inkeepApiKey === 'string' && inkeepApiKey);
    return (0, react_1.useMemo)(function () {
        return ({
            baseSettings: {
                apiKey: apiKey,
                primaryBrandColor: colorMode === 'dark' ? '#7958ff' : '#5d34f2',
                organizationDisplayName: 'Logto',
                colorMode: {
                    sync: (0, essentials_1.cond)(ExecutionEnvironment_1.default.canUseDOM && {
                        target: document.documentElement,
                        attributes: ['data-theme'],
                        isDarkMode: function (attributes) { return attributes['data-theme'] === 'dark'; },
                    }),
                },
                theme: {
                    syntaxHighlighter: {
                        lightTheme: prism_react_renderer_1.themes.dracula,
                        darkTheme: prism_react_renderer_1.themes.dracula,
                    },
                    styles: [
                        {
                            key: 'custom-styles',
                            type: 'style',
                            value: customStyles,
                        },
                    ],
                },
                transformSource: function (source) {
                    var _a;
                    var urlConfig = {
                        'docs.logto.io': (0, Translate_1.translate)({ id: 'inkeep.search.tabs.docs', message: 'Docs' }),
                        'blog.logto.io': (0, Translate_1.translate)({ id: 'inkeep.search.tabs.blogs', message: 'Blogs' }),
                        'openapi.logto.io': 'APIs',
                        'auth-wiki.logto.io': 'Auth Wiki',
                        'logto.io': (0, Translate_1.translate)({ id: 'inkeep.search.tabs.websites', message: 'Websites' }),
                    };
                    var tab = (_a = Object.entries(urlConfig).find(function (_a) {
                        var pattern = _a[0];
                        return source.url.includes(pattern);
                    })) === null || _a === void 0 ? void 0 : _a[1];
                    if (!tab) {
                        return source;
                    }
                    return __assign(__assign({}, source), { tabs: __spreadArray(__spreadArray([], (source.tabs || []), true), [tab], false) });
                },
            },
            aiChatSettings: {
                aiAssistantAvatar: colorMode === 'dark' ? '/img/logto-ai-bot-dark.svg' : '/img/logto-ai-bot.svg',
                aiAssistantName: 'Logto AI',
                introMessage: (0, Translate_1.translate)({
                    id: 'inkeep.intro.message',
                    message: "Hi, I'm Logto AI!\n\nI'm an AI assistant trained on documentation, help articles, and other content.\n\nAsk me anything about `Logto`.",
                }),
                placeholder: (0, Translate_1.translate)({
                    id: 'inkeep.chat.placeholder',
                    message: 'Ask Logto AI your question for a step-by-step guide',
                }),
                exampleQuestions: [
                    (0, Translate_1.translate)({
                        id: 'inkeep.example.question.1',
                        message: 'Quickstart guide for Logto setup',
                    }),
                    (0, Translate_1.translate)({
                        id: 'inkeep.example.question.2',
                        message: 'Configure multi-tenancy architecture',
                    }),
                    (0, Translate_1.translate)({
                        id: 'inkeep.example.question.3',
                        message: 'How to integrate user profile?',
                    }),
                ],
                disclaimerSettings: {
                    isEnabled: true,
                    label: (0, Translate_1.translate)({ id: 'inkeep.disclaimer.label', message: 'Logto AI disclaimer' }),
                    tooltip: (0, Translate_1.translate)({
                        id: 'inkeep.disclaimer.tooltip',
                        message: 'Responses are AI-generated and may require verification.',
                    }),
                },
                toolbarButtonLabels: {
                    clear: (0, Translate_1.translate)({ id: 'inkeep.toolbar.clear', message: 'Start over' }),
                    stop: (0, Translate_1.translate)({ id: 'inkeep.toolbar.stop', message: 'Stop' }),
                    copyChat: (0, Translate_1.translate)({ id: 'inkeep.toolbar.copy', message: 'Copy' }),
                    getHelp: (0, Translate_1.translate)({ id: 'inkeep.toolbar.help', message: 'Get help' }),
                },
                getHelpOptions: [
                    {
                        icon: { builtIn: 'IoChatbubblesOutline' },
                        name: (0, Translate_1.translate)({ id: 'inkeep.help.options.contact', message: 'Contact' }),
                        action: {
                            type: 'open_link',
                            url: 'https://logto.io/contact',
                        },
                    },
                    {
                        icon: { builtIn: 'FaDiscord' },
                        name: (0, Translate_1.translate)({ id: 'inkeep.help.options.discord', message: 'Discord' }),
                        action: {
                            type: 'open_link',
                            url: 'https://discord.com/invite/UEPaF3j5e6',
                        },
                    },
                    {
                        icon: { builtIn: 'FaGithub' },
                        name: 'GitHub',
                        action: {
                            type: 'open_link',
                            url: 'https://github.com/logto-io/logto/issues/new/choose',
                        },
                    },
                ],
            },
            searchSettings: {
                debounceTimeMs: 300,
                placeholder: (0, Translate_1.translate)({ id: 'inkeep.search.placeholder', message: 'Search...' }),
                tabs: [
                    [
                        (0, Translate_1.translate)({ id: 'inkeep.search.tabs.docs', message: 'Docs' }),
                        { isAlwaysVisible: true },
                    ],
                    'APIs',
                    'GitHub',
                    (0, Translate_1.translate)({ id: 'inkeep.search.tabs.blogs', message: 'Blogs' }),
                    'Auth Wiki',
                    (0, Translate_1.translate)({ id: 'inkeep.search.tabs.websites', message: 'Websites' }),
                    (0, Translate_1.translate)({ id: 'inkeep.search.tabs.all', message: 'All' }),
                ],
            },
        });
    }, [apiKey, colorMode]);
};
exports.default = useInkeepConfigs;
