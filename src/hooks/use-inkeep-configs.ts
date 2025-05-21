import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { translate } from '@docusaurus/Translate';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { type InkeepSettings } from '@inkeep/cxkit-react';
import { cond } from '@silverhand/essentials';
import { themes } from 'prism-react-renderer';
import { useMemo } from 'react';

const customStyles = `
.ikp-ai-chat-tagline__container,
.ikp-ai-search-tagline__container {
  position: relative;
  color: var(--logto-neutral-variant-80);

  > * {
    color: var(--logto-neutral-variant-80) !important;
  }

  &:before {
    content: '&';
    position: absolute;
    margin-left: 160px;
    font: var(--font-body-2);
    color: inherit;
  }

  &:after {
    content: '';
    position: absolute;
    margin-left: 178px;
    width: 60px;
    height: 20px;
    background: var(--inkeep-logto-icon) center/60px 20px no-repeat;
  }
}

.ikp-ai-chat-header__toolbar-header-wrapper {
  visibility: hidden;
}

.ikp-codeblock-header {
  background-color: var(--ikp-color-gray-dark-800);

  .ikp-codeblock-header-language {
    color: var(--ikp-color-gray-400);
  }

  .ikp-codeblock-copy-button {
    color: var(--ikp-color-white-alpha-700);
    
    &:hover {
      color: var(--ikp-color-white-alpha-950);
    }
  }
}

.ikp-codeblock-highlighter {
  background-color: var(--ikp-color-gray-dark-900);
}`;

const useInkeepConfigs = () => {
  const { colorMode } = useColorMode();
  const {
    siteConfig: { customFields = {} },
  } = useDocusaurusContext();
  const { inkeepApiKey } = customFields;
  const apiKey: string | undefined = cond(typeof inkeepApiKey === 'string' && inkeepApiKey);

  return useMemo(
    () =>
      ({
        baseSettings: {
          apiKey,
          primaryBrandColor: colorMode === 'dark' ? '#7958ff' : '#5d34f2',
          organizationDisplayName: 'Logto',
          colorMode: {
            sync: cond(
              ExecutionEnvironment.canUseDOM && {
                target: document.documentElement,
                attributes: ['data-theme'],
                isDarkMode: (attributes) => attributes['data-theme'] === 'dark',
              }
            ),
          },
          theme: {
            syntaxHighlighter: {
              lightTheme: themes.dracula,
              darkTheme: themes.dracula,
            },
            styles: [
              {
                key: 'custom-styles',
                type: 'style',
                value: customStyles,
              },
            ],
          },
          transformSource: (source) => {
            const urlConfig = {
              'docs.logto.io': translate({ id: 'inkeep.search.tabs.docs', message: 'Docs' }),
              'blog.logto.io': translate({ id: 'inkeep.search.tabs.blogs', message: 'Blogs' }),
              'openapi.logto.io': 'APIs',
              'auth-wiki.logto.io': 'Auth Wiki',
              'logto.io': translate({ id: 'inkeep.search.tabs.websites', message: 'Websites' }),
            } as const;

            const tab = Object.entries(urlConfig).find(([pattern]) =>
              source.url.includes(pattern)
            )?.[1];

            if (!tab) {
              return source;
            }

            return {
              ...source,
              tabs: [...(source.tabs || []), tab],
            };
          },
        },
        aiChatSettings: {
          aiAssistantAvatar:
            colorMode === 'dark' ? '/img/logto-ai-bot-dark.svg' : '/img/logto-ai-bot.svg',
          aiAssistantName: 'Logto AI',
          introMessage: translate({
            id: 'inkeep.intro.message',
            message:
              "Hi, I'm Logto AI!\n\nI'm an AI assistant trained on documentation, help articles, and other content.\n\nAsk me anything about `Logto`.",
          }),
          placeholder: translate({
            id: 'inkeep.chat.placeholder',
            message: 'Ask Logto AI your question for a step-by-step guide',
          }),
          exampleQuestions: [
            translate({
              id: 'inkeep.example.question.1',
              message: 'Quickstart guide for Logto setup',
            }),
            translate({
              id: 'inkeep.example.question.2',
              message: 'Configure multi-tenancy architecture',
            }),
            translate({
              id: 'inkeep.example.question.3',
              message: 'How to integrate user profile?',
            }),
          ],
          disclaimerSettings: {
            isEnabled: true,
            label: translate({ id: 'inkeep.disclaimer.label', message: 'Logto AI disclaimer' }),
            tooltip: translate({
              id: 'inkeep.disclaimer.tooltip',
              message: 'Responses are AI-generated and may require verification.',
            }),
          },
          toolbarButtonLabels: {
            clear: translate({ id: 'inkeep.toolbar.clear', message: 'Start over' }),
            stop: translate({ id: 'inkeep.toolbar.stop', message: 'Stop' }),
            copyChat: translate({ id: 'inkeep.toolbar.copy', message: 'Copy' }),
            getHelp: translate({ id: 'inkeep.toolbar.help', message: 'Get help' }),
          },
          getHelpOptions: [
            {
              icon: { builtIn: 'IoChatbubblesOutline' },
              name: translate({ id: 'inkeep.help.options.contact', message: 'Contact' }),
              action: {
                type: 'open_link',
                url: 'https://logto.io/contact',
              },
            },
            {
              icon: { builtIn: 'FaDiscord' },
              name: translate({ id: 'inkeep.help.options.discord', message: 'Discord' }),
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
          placeholder: translate({ id: 'inkeep.search.placeholder', message: 'Search...' }),
          tabs: [
            [
              translate({ id: 'inkeep.search.tabs.docs', message: 'Docs' }),
              { isAlwaysVisible: true },
            ],
            'APIs',
            'GitHub',
            translate({ id: 'inkeep.search.tabs.blogs', message: 'Blogs' }),
            'Auth Wiki',
            translate({ id: 'inkeep.search.tabs.websites', message: 'Websites' }),
            translate({ id: 'inkeep.search.tabs.all', message: 'All' }),
          ],
        },
      }) satisfies InkeepSettings,
    [apiKey, colorMode]
  );
};

export default useInkeepConfigs;
