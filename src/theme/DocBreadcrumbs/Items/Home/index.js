"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeBreadcrumbItem;
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var index_js_1 = require("@docusaurus/plugin-content-docs/lib/client/index.js");
var theme_common_1 = require("@docusaurus/theme-common");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
function HomeBreadcrumbItem() {
    var _a, _b;
    var navbarItems = (0, theme_common_1.useThemeConfig)().navbar.items;
    // Note: The plugin ID will fall back to the default plugin ID if not specified.
    // We are fine with that until we have multiple docs plugins.
    var activeDoc = (0, index_js_1.useActiveDocContext)(undefined).activeDoc;
    var activeNavbarItem = navbarItems.find(function (item) {
        if (typeof item.to !== 'string') {
            return false;
        }
        // Check if the item is an internal link and the `activeDoc` matches the link.
        // This usually means the item is a link to the home page of the current active doc.
        // E.g., `/api-protection` is the home page of the `api-protection/nodejs/README` doc.
        return item.to.startsWith('/') && (activeDoc === null || activeDoc === void 0 ? void 0 : activeDoc.id.startsWith(item.to.slice(1)));
    });
    var homeHref = (0, useBaseUrl_1.default)(String((_a = activeNavbarItem === null || activeNavbarItem === void 0 ? void 0 : activeNavbarItem.to) !== null && _a !== void 0 ? _a : '/'));
    return (<li className="breadcrumbs__item">
      <Link_1.default aria-label={(0, Translate_1.translate)({
            id: 'theme.docs.breadcrumbs.home',
            message: 'Home page',
            description: 'The ARIA label for the home page in the breadcrumbs',
        })} className="breadcrumbs__link" href={homeHref}>
        {(_b = activeNavbarItem === null || activeNavbarItem === void 0 ? void 0 : activeNavbarItem.label) !== null && _b !== void 0 ? _b : (0, Translate_1.translate)({ id: 'theme.docs.breadcrumbs.home', message: 'Docs' })}
      </Link_1.default>
    </li>);
}
