"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@docusaurus/router");
var internal_1 = require("@docusaurus/theme-common/internal");
var react_1 = require("react");
var useLocalizedUrl = function () {
    var createUrl = (0, internal_1.useAlternatePageUtils)().createUrl;
    var _a = (0, router_1.useLocation)(), search = _a.search, hash = _a.hash;
    return (0, react_1.useCallback)(function (locale) {
        var localizedPath = createUrl({
            locale: locale,
            fullyQualified: true,
        });
        return "".concat(localizedPath).concat(search).concat(hash);
    }, [createUrl, search, hash]);
};
exports.default = useLocalizedUrl;
