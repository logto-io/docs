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
exports.default = Details;
var theme_common_1 = require("@docusaurus/theme-common");
var Details_1 = require("@docusaurus/theme-common/Details");
var useIsBrowser_1 = require("@docusaurus/useIsBrowser");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
function Details(_a) {
    var props = __rest(_a, []);
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    var isBrowser = (0, useIsBrowser_1.default)();
    return (<Details_1.Details {...props} className={(0, clsx_1.default)(index_module_scss_1.default.details, props.className, colorMode === 'dark' && index_module_scss_1.default.dark, isBrowser && index_module_scss_1.default.isBrowser)}/>);
}
