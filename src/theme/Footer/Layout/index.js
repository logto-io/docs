"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLayout;
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var clsx_1 = require("clsx");
var react_1 = require("react");
var globe_i18n_svg_1 = require("@site/src/assets/globe-i18n.svg");
var Select_1 = require("@site/src/components/Select");
var use_localized_url_1 = require("@site/src/hooks/use-localized-url");
var use_main_site_url_1 = require("@site/src/hooks/use-main-site-url");
var index_module_scss_1 = require("./index.module.scss");
function FooterLayout(_a) {
    var style = _a.style, links = _a.links, logo = _a.logo, copyright = _a.copyright;
    var _b = (0, useDocusaurusContext_1.default)().i18n, currentLocale = _b.currentLocale, localeConfigs = _b.localeConfigs;
    var getLocalizedPageUrl = (0, use_localized_url_1.default)();
    var getMainSiteLink = (0, use_main_site_url_1.default)().getMainSiteLink;
    var languageOptions = (0, react_1.useMemo)(function () {
        return Object.entries(localeConfigs).map(function (_a) {
            var locale = _a[0], label = _a[1].label;
            return ({
                value: locale,
                title: label,
                to: getLocalizedPageUrl(locale),
            });
        });
    }, [localeConfigs, getLocalizedPageUrl]);
    return (<footer className={(0, clsx_1.default)('footer', {
            'footer--dark': style === 'dark',
        })}>
      <div className="container container-fluid">
        {links}
        <div className="footer__bottom text--center">
          {logo && <div className="margin-bottom--sm">{logo}</div>}
          {copyright}
          <Link_1.default className="footer__link-item" to="https://logto.io/trust-and-security">
            <Translate_1.default>Security</Translate_1.default>
          </Link_1.default>
          <Link_1.default className="footer__link-item" to={getMainSiteLink('/terms/of-service')}>
            <Translate_1.default>Terms</Translate_1.default>
          </Link_1.default>
          <Link_1.default className="footer__link-item" to={getMainSiteLink('/terms/privacy-policy')}>
            <Translate_1.default>Privacy</Translate_1.default>
          </Link_1.default>
          <Select_1.default className={index_module_scss_1.default.languageSelector} optionContainerStyles={{ border: 'none' }} optionStyles={{ padding: '8px 16px' }} icon={<globe_i18n_svg_1.default />} value={currentLocale} options={languageOptions} size="small"/>
        </div>
      </div>
    </footer>);
}
