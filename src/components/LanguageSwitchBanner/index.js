"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExecutionEnvironment_1 = require("@docusaurus/ExecutionEnvironment");
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var essentials_1 = require("@silverhand/essentials");
var js_cookie_1 = require("js-cookie");
var react_1 = require("react");
var use_localized_url_1 = require("@site/src/hooks/use-localized-url");
var Banner_1 = require("../Banner");
var index_module_scss_1 = require("./index.module.scss");
var storageKey = 'disableLanguageDetectionBanner';
var LanguageSwitchBanner = function () {
    var _a;
    var _b = (0, useDocusaurusContext_1.default)().i18n, currentLocale = _b.currentLocale, locales = _b.locales, localeConfigs = _b.localeConfigs;
    var getLocalizedPageUrl = (0, use_localized_url_1.default)();
    var _c = (0, react_1.useState)(), targetLocale = _c[0], setTargetLocale = _c[1];
    var userLocale = (0, essentials_1.cond)(ExecutionEnvironment_1.default.canUseDOM && navigator.language);
    (0, react_1.useEffect)(function () {
        if (!userLocale || js_cookie_1.default.get(storageKey) === 'true') {
            return;
        }
        var detectedBaseLanguageCode = userLocale.split('-')[0];
        var foundMatchingLocale = locales.find(function (locale) {
            return locale === userLocale ||
                locale === detectedBaseLanguageCode ||
                locale.startsWith("".concat(detectedBaseLanguageCode, "-"));
        });
        if (foundMatchingLocale && foundMatchingLocale !== currentLocale) {
            setTargetLocale(foundMatchingLocale);
        }
    }, [userLocale, currentLocale, locales]);
    return (targetLocale && (<Banner_1.default onClose={function () {
            js_cookie_1.default.set(storageKey, 'true', { expires: 365 });
            setTargetLocale(undefined);
        }}>
        <span className={index_module_scss_1.default.message}>
          {(0, Translate_1.translate)({
            id: 'theme.languageSwitchBanner.message',
            message: 'A version matching your device language is available. Switch to ',
            description: 'The prompt message displayed in the language switch banner',
        })}
          <Link_1.default className={index_module_scss_1.default.link} href={getLocalizedPageUrl(targetLocale)} target="_self">
            {(_a = localeConfigs[targetLocale]) === null || _a === void 0 ? void 0 : _a.label}
          </Link_1.default>
        </span>
      </Banner_1.default>));
};
exports.default = LanguageSwitchBanner;
