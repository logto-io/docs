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
exports.default = FooterLinkItem;
var Link_1 = require("@docusaurus/Link");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var ExternalLink_1 = require("@theme/Icon/ExternalLink");
var discord_svg_1 = require("@site/src/assets/discord.svg");
var email_svg_1 = require("@site/src/assets/email.svg");
var github_svg_1 = require("@site/src/assets/github.svg");
var roadmap_svg_1 = require("@site/src/assets/roadmap.svg");
var iconMap = Object.freeze({
    discord: <discord_svg_1.default />,
    email: <email_svg_1.default />,
    github: <github_svg_1.default />,
    roadmap: <roadmap_svg_1.default />,
});
function FooterLinkItem(_a) {
    var item = _a.item;
    var to = item.to, href = item.href, label = item.label, i18nLabel = item.i18nLabel, prependBaseUrlToHref = item.prependBaseUrlToHref, hideExternalLinkIcon = item.hideExternalLinkIcon, icon = item.icon, props = __rest(item, ["to", "href", "label", "i18nLabel", "prependBaseUrlToHref", "hideExternalLinkIcon", "icon"]);
    var toUrl = (0, useBaseUrl_1.default)(to);
    var normalizedHref = (0, useBaseUrl_1.default)(href, { forcePrependBaseUrl: true });
    var SvgIcon = typeof icon === 'string' ? iconMap[icon] : undefined;
    return (<Link_1.default className="footer__link-item" {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
            to: toUrl,
        })} {...props}>
      {SvgIcon}
      <span>{label}</span>
      {href && !(0, isInternalUrl_1.default)(href) && !hideExternalLinkIcon && <ExternalLink_1.default />}
    </Link_1.default>);
}
