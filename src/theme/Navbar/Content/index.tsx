import BrowserOnly from '@docusaurus/BrowserOnly';
import { translate } from '@docusaurus/Translate';
import { useThemeConfig, ErrorCauseBoundary, useColorMode } from '@docusaurus/theme-common';
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { InkeepModalChat, InkeepModalSearchAndChat } from '@inkeep/cxkit-react';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import clsx from 'clsx';
import { useState, type ReactNode } from 'react';

import Button from '@site/src/components/Button';
import SearchBar from '@site/src/components/SearchBar';
import useInkeepConfigs from '@site/src/hooks/use-inkeep-configs';
import LogtoAiBotDark from '@site/static/img/logto-ai-bot-dark.svg';
import LogtoAiBot from '@site/static/img/logto-ai-bot.svg';

import styles from './index.module.scss';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  // eslint-disable-next-line no-restricted-syntax
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { readonly items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  readonly left: ReactNode;
  readonly right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const { colorMode } = useColorMode();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const inkeepConfigs = useInkeepConfigs();
  const [openModal, setOpenModal] = useState<'chat' | 'search'>();

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {/* Charles ejected the component and added the inkeep search bar here */}
          {inkeepConfigs.baseSettings.apiKey && (
            <BrowserOnly fallback={<div />}>
              {() => (
                <>
                  <SearchBar
                    className={styles.searchBar}
                    onClick={() => {
                      setOpenModal('search');
                    }}
                  />
                  <Button
                    className={clsx(styles.button, styles.askAi)}
                    type="outline"
                    size="medium"
                    onClick={() => {
                      setOpenModal('chat');
                    }}
                  >
                    {colorMode === 'dark' ? <LogtoAiBotDark /> : <LogtoAiBot />}
                    {translate({ id: 'inkeep.ask.ai', message: 'Ask AI' })}
                  </Button>
                  <InkeepModalSearchAndChat
                    {...inkeepConfigs}
                    shouldAutoFocusInput
                    modalSettings={{
                      isOpen: openModal === 'search',
                      shortcutKey: 'k',
                      onOpenChange: (isOpen) => {
                        setOpenModal(isOpen ? 'search' : undefined);
                      },
                    }}
                    askAILabel={translate({ id: 'inkeep.ask.ai', message: 'Ask AI' })}
                    searchLabel={translate({ id: 'theme.SearchBar.label', message: 'Search' })}
                  />
                  <InkeepModalChat
                    {...inkeepConfigs}
                    shouldAutoFocusInput
                    modalSettings={{
                      isOpen: openModal === 'chat',
                      shortcutKey: null,
                      onOpenChange: (isOpen) => {
                        setOpenModal(isOpen ? 'chat' : undefined);
                      },
                    }}
                  />
                </>
              )}
            </BrowserOnly>
          )}

          {/* Charles ejected the component and added the Cloud button here */}
          <Button
            className={clsx(styles.button, styles.cloud)}
            type="secondary"
            size="medium"
            href="https://cloud.logto.io"
          >
            Logto Cloud
          </Button>
        </>
      }
    />
  );
}
