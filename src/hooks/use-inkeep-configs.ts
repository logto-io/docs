import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
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
}`;

const useInkeepConfigs = () => {
  const { colorMode } = useColorMode();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const apiKey = String(customFields?.inkeepApiKey ?? '');

  return useMemo(
    (): InkeepSettings =>
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
            const urlPatterns = {
              docs: 'docs.logto.io',
              blog: 'blog.logto.io',
              apis: 'openapi.logto.io',
              authWiki: 'auth.wiki',
              websites: 'https://logto.io',
            };

            const tabConfig = {
              [urlPatterns.docs]: { tab: 'Docs' },
              [urlPatterns.blog]: { tab: 'Blogs' },
              [urlPatterns.apis]: { tab: 'APIs' },
              [urlPatterns.authWiki]: { tab: 'Auth Wiki' },
              [urlPatterns.websites]: { tab: 'Websites' },
            } as const;

            // Find matching config based on URL
            const matchingPattern = Object.keys(tabConfig).find((pattern) =>
              source.url.includes(pattern)
            );
            const config = matchingPattern
              ? // eslint-disable-next-line no-restricted-syntax
                tabConfig[matchingPattern as keyof typeof tabConfig]
              : null;

            if (!config) {
              return source;
            }

            return {
              ...source,
              tabs: [...(source.tabs || []), config.tab],
            };
          },
        },
        aiChatSettings: {
          aiAssistantAvatar:
            colorMode === 'dark' ? '/img/logto-ai-bot-dark.svg' : '/img/logto-ai-bot.svg',
          aiAssistantName: 'Logto AI',
          exampleQuestions: [
            'Quickstart guide for Logto setup',
            'Configure multi-tenancy architecture',
            'How to integrate AI agent with my product?',
            'How to integrate user profile?',
          ],
        },
        searchSettings: {
          debounceTimeMs: 300,
          tabs: [
            ['Docs', { isAlwaysVisible: true }],
            'APIs',
            'GitHub',
            'Blog',
            'Auth Wiki',
            'Websites',
            ['All', { isAlwaysVisible: true }],
          ],
        },
      }) satisfies InkeepSettings,
    [apiKey, colorMode]
  );
};

export default useInkeepConfigs;
