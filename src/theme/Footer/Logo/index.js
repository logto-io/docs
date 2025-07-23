"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FooterLogo;
var Link_1 = require("@docusaurus/Link");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var ThemedImage_1 = require("@theme/ThemedImage");
var clsx_1 = require("clsx");
var styles_module_css_1 = require("./styles.module.css");
function LogoImage(_a) {
    var _b;
    var logo = _a.logo;
    var withBaseUrl = (0, useBaseUrl_1.useBaseUrlUtils)().withBaseUrl;
    var sources = {
        light: withBaseUrl(logo.src),
        dark: withBaseUrl((_b = logo.srcDark) !== null && _b !== void 0 ? _b : logo.src),
    };
    return (<ThemedImage_1.default className={(0, clsx_1.default)('footer__logo', logo.className)} alt={logo.alt} sources={sources} width={logo.width} height={logo.height} style={logo.style} 
    // Charles note: Defer loading off-screen images
    loading="lazy"/>);
}
function FooterLogo(_a) {
    var logo = _a.logo;
    return logo.href ? (<Link_1.default href={logo.href} className={styles_module_css_1.default.footerLogoLink} target={logo.target}>
      <LogoImage logo={logo}/>
    </Link_1.default>) : (<LogoImage logo={logo}/>);
}
