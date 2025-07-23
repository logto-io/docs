"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var use_main_site_url_1 = require("@site/src/hooks/use-main-site-url");
var Url_1 = require("../Url");
/**
 * A `<Url />` wrapper component that generates a URL based on the current site context.
 *
 * It is useful when you want to link to the main site from other sites, but keep the URL relative
 * to the main site.
 *
 * @example
 * If the main site URL is `https://docs.logto.io`, and you want to link to `/docs/quick-start`,
 * you can use this component like this:
 *
 * ```tsx
 * <MainSiteUrl href="/docs/quick-start">Quick Start</MainSiteUrl>
 * ```
 *
 * - When this component is rendered on the main site, it will generate a link to
 * `/docs/quick-start`;
 * - Otherwise, it will generate a link to `https://docs.logto.io/docs/quick-start`.
 *
 * @see {@link useMainSiteUrl} for how the main site URL is retrieved.
 */
var MainSiteUrl = function (_a) {
    var href = _a.href, _b = _a.type, type = _b === void 0 ? 'inline' : _b, rest = __rest(_a, ["href", "type"]);
    var getMainSiteLink = (0, use_main_site_url_1.default)().getMainSiteLink;
    if (!href) {
        throw new Error('<MainSiteUrl /> requires a `href` prop.');
    }
    if (!href.startsWith('/')) {
        throw new Error('<MainSiteUrl /> requires a `href` prop that starts with `/`.');
    }
    return <Url_1.default href={getMainSiteLink(href)} {...rest}/>;
};
exports.default = MainSiteUrl;
