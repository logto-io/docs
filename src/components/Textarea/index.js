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
var clsx_1 = require("clsx");
var react_1 = require("react");
var index_module_scss_1 = require("./index.module.scss");
var Textarea = function (_a, reference) {
    var className = _a.className, error = _a.error, rest = __rest(_a, ["className", "error"]);
    return (<div className={(0, clsx_1.default)(index_module_scss_1.default.container, Boolean(error) && index_module_scss_1.default.error, className)}>
      <textarea {...rest} ref={reference}/>
    </div>);
};
exports.default = (0, react_1.forwardRef)(Textarea);
