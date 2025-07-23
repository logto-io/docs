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
var Link_1 = require("@docusaurus/Link");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
var Button = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.type, type = _c === void 0 ? 'outline' : _c, rest = __rest(_a, ["className", "children", "size", "type"]);
    return (<Link_1.default tabIndex={0} role="button" className={(0, clsx_1.default)(index_module_scss_1.default.button, index_module_scss_1.default[type], index_module_scss_1.default[size], className)} {...rest}>
      <div className={index_module_scss_1.default.children}>{children}</div>
    </Link_1.default>);
};
exports.default = Button;
