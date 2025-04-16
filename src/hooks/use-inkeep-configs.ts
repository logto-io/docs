import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { translate } from '@docusaurus/Translate';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { type InkeepSettings } from '@inkeep/cxkit-react';
import { cond } from '@silverhand/essentials';
import { themes } from 'prism-react-renderer';
import { useMemo } from 'react';

type InkeepConfigs = {
  chatButtonConfigs: InkeepSettings;
  searchBarConfigs: InkeepSettings;
};

const useInkeepConfigs = () => {
  const { colorMode } = useColorMode();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const apiKey = String(customFields?.inkeepApiKey ?? '');

  const baseConfigs = useMemo(
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
      }) satisfies InkeepSettings,
    [apiKey, colorMode]
  );

  return useMemo(
    (): InkeepConfigs => ({
      chatButtonConfigs: {
        baseSettings: {
          ...baseConfigs.baseSettings,
          theme: {
            ...baseConfigs.baseSettings.theme,
            styles: [
              {
                key: 'custom-styles',
                type: 'style',
                value: `.ikp-chat-button__container {
  border-radius: 50%;

  .ikp-chat-button__button {
    width: 48px;
    height: 48px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ikp-chat-button__text {
    display: none;
  }

  .ikp-chat-button__avatar-content {
    width: 24px;
    height: 24px;
    margin: 0 !important;
  }
}
  
.ikp-ai-chat-tagline__container {
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
}`,
              },
            ],
          },
        },
        aiChatSettings: {
          aiAssistantAvatar: '/img/logto-ai-bot.svg',
          aiAssistantName: 'Logto AI',
          exampleQuestions: [
            'Quickstart guide for Logto setup',
            'Configure multi-tenancy architecture',
            'How to integrate AI agent with my product?',
            'How to integrate user profile?',
          ],
        },
      },
      searchBarConfigs: {
        baseSettings: {
          ...baseConfigs.baseSettings,
          theme: {
            ...baseConfigs.baseSettings.theme,
            styles: [
              {
                key: 'custom-styles',
                type: 'style',
                value: `.ikp-search-bar__container {
  display: flex;
  align-items: center;
  padding: 0 var(--ifm-navbar-item-padding-horizontal);
  min-width: unset;
  width: unset;
}

.ikp-search-bar__button {
  border: 1px solid var(--logto-border);
  border-radius: 8px;
  padding-block: 7px;
  padding-inline: 12px 6px;
  font: var(--font-label-2);
  position: relative;
  color: var(--logto-color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 36px;
  width: 173px;

  &:before {
    content: '';
    position: relative;
    top: 50%;
    inset-inline-start: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: var(--searchbar-icon) 50% / 20px 20px;
  }

  .ikp-search-bar__content-wrapper {
    flex: 1 1 0%;

    .ikp-search-bar__text {
      color: var(--logto-color-text-secondary);
    }

    svg {
      display: none;
    }
  }

  .ikp-search-bar__kbd-wrapper {
    height: 24px;
    min-width: unset;
    color: var(--logto-color-text);
    background: var(--logto-container-neutral-bg);
    padding: 4px 6px;
    border-radius: 4px;
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;

    .ikp-search-bar__kbd-shortcut-key {
      font: var(--font-body-3);
    }
  }

  &:active,
  &:focus,
  &:hover {
    border: 1px solid var(--ifm-link-color);
    border-color: var(--ifm-link-color) !important;
    background: none;
    box-shadow: none;
    color: var(--logto-color-text);
    outline: 0;
  
    .ikp-search-bar__content-wrapper .ikp-search-bar__text {
      color: var(--logto-color-text);
    }
  }
}

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
`,
              },
            ],
          },
        },
        searchSettings: {
          placeholder: translate({ id: 'theme.SearchBar.label', message: 'Search' }),
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
      },
    }),
    [baseConfigs]
  );
};

export default useInkeepConfigs;
