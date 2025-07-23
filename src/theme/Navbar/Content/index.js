"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavbarContent;
var BrowserOnly_1 = require("@docusaurus/BrowserOnly");
var Translate_1 = require("@docusaurus/Translate");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var cxkit_react_1 = require("@inkeep/cxkit-react");
var ColorModeToggle_1 = require("@theme/Navbar/ColorModeToggle");
var Logo_1 = require("@theme/Navbar/Logo");
var Toggle_1 = require("@theme/Navbar/MobileSidebar/Toggle");
var NavbarItem_1 = require("@theme/NavbarItem");
var clsx_1 = require("clsx");
var react_1 = require("react");
var Button_1 = require("@site/src/components/Button");
var SearchBar_1 = require("@site/src/components/SearchBar");
var use_inkeep_configs_1 = require("@site/src/hooks/use-inkeep-configs");
var logto_ai_bot_dark_svg_1 = require("@site/static/img/logto-ai-bot-dark.svg");
var logto_ai_bot_svg_1 = require("@site/static/img/logto-ai-bot.svg");
var index_module_scss_1 = require("./index.module.scss");
function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    // eslint-disable-next-line no-restricted-syntax
    return (0, theme_common_1.useThemeConfig)().navbar.items;
}
function NavbarItems(_a) {
    var items = _a.items;
    return (<>
      {items.map(function (item, i) { return (<theme_common_1.ErrorCauseBoundary 
        // eslint-disable-next-line react/no-array-index-key
        key={i} onError={function (error) {
                return new Error("A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n".concat(JSON.stringify(item, null, 2)), { cause: error });
            }}>
          <NavbarItem_1.default {...item}/>
        </theme_common_1.ErrorCauseBoundary>); })}
    </>);
}
function NavbarContentLayout(_a) {
    var left = _a.left, right = _a.right;
    return (<div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>);
}
function NavbarContent() {
    var mobileSidebar = (0, internal_1.useNavbarMobileSidebar)();
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var items = useNavbarItems();
    var _a = (0, internal_1.splitNavbarItems)(items), leftItems = _a[0], rightItems = _a[1];
    var inkeepConfigs = (0, use_inkeep_configs_1.default)();
    var _b = (0, react_1.useState)(), openModal = _b[0], setOpenModal = _b[1];
    return (<NavbarContentLayout left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <Toggle_1.default />}
          <Logo_1.default />
          <NavbarItems items={leftItems}/>
        </>} right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems}/>
          <ColorModeToggle_1.default className={index_module_scss_1.default.colorModeToggle}/>
          {/* Charles ejected the component and added the inkeep search bar here */}
          {inkeepConfigs.baseSettings.apiKey && (<BrowserOnly_1.default fallback={<div />}>
              {function () { return (<>
                  <SearchBar_1.default className={index_module_scss_1.default.searchBar} onClick={function () {
                        setOpenModal('search');
                    }}/>
                  <Button_1.default className={(0, clsx_1.default)(index_module_scss_1.default.button, index_module_scss_1.default.askAi)} type="outline" size="medium" onClick={function () {
                        setOpenModal('chat');
                    }}>
                    {colorMode === 'dark' ? <logto_ai_bot_dark_svg_1.default /> : <logto_ai_bot_svg_1.default />}
                    {(0, Translate_1.translate)({ id: 'inkeep.ask.ai', message: 'Ask AI' })}
                  </Button_1.default>
                  <cxkit_react_1.InkeepModalSearchAndChat {...inkeepConfigs} shouldAutoFocusInput modalSettings={{
                        isOpen: openModal === 'search',
                        shortcutKey: 'k',
                        onOpenChange: function (isOpen) {
                            setOpenModal(isOpen ? 'search' : undefined);
                        },
                    }} askAILabel={(0, Translate_1.translate)({ id: 'inkeep.ask.ai', message: 'Ask AI' })} searchLabel={(0, Translate_1.translate)({ id: 'theme.SearchBar.label', message: 'Search' })}/>
                  <cxkit_react_1.InkeepModalChat {...inkeepConfigs} shouldAutoFocusInput modalSettings={{
                        isOpen: openModal === 'chat',
                        shortcutKey: null,
                        onOpenChange: function (isOpen) {
                            setOpenModal(isOpen ? 'chat' : undefined);
                        },
                    }}/>
                </>); }}
            </BrowserOnly_1.default>)}

          {/* Charles ejected the component and added the Cloud button here */}
          <Button_1.default className={(0, clsx_1.default)(index_module_scss_1.default.button, index_module_scss_1.default.cloud)} type="secondary" size="medium" href="https://cloud.logto.io">
            Logto Cloud
          </Button_1.default>
        </>}/>);
}
