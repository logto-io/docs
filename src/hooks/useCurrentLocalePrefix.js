"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentLocalePrefix = void 0;
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var useCurrentLocalePrefix = function () {
    var i18n = (0, useDocusaurusContext_1.default)().i18n;
    return i18n.currentLocale === 'en' ? '' : "/".concat(i18n.currentLocale);
};
exports.useCurrentLocalePrefix = useCurrentLocalePrefix;
