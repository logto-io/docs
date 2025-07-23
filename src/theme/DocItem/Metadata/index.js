"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemMetadata;
var client_1 = require("@docusaurus/plugin-content-docs/client");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var removeTrailingBackSlashes = function (str) { return str.replace(/\\+$/, '').trim(); };
function DocItemMetadata() {
    var _a, _b;
    var _c = (0, client_1.useDoc)(), metadata = _c.metadata, frontMatter = _c.frontMatter, assets = _c.assets;
    var pathname = (0, router_1.useLocation)().pathname;
    var generatedOgImage = "/img/og/".concat(pathname.replaceAll('/', '_'), ".png");
    var trimmedDescription = removeTrailingBackSlashes(metadata.description);
    return (<theme_common_1.PageMetadata title={metadata.title} description={trimmedDescription} keywords={frontMatter.keywords} image={(_b = (_a = assets.image) !== null && _a !== void 0 ? _a : frontMatter.image) !== null && _b !== void 0 ? _b : generatedOgImage}/>);
}
