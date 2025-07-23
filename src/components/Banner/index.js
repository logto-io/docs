"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var cross_svg_1 = require("@site/src/assets/cross.svg");
var a11y_1 = require("@site/src/utils/a11y");
var index_module_scss_1 = require("./index.module.scss");
var Banner = function (_a) {
    var className = _a.className, children = _a.children, onClose = _a.onClose;
    return (<div className={(0, clsx_1.default)(index_module_scss_1.default.banner, className)}>
      {children}
      <div tabIndex={0} role="button" className={index_module_scss_1.default.close} onClick={onClose} onKeyDown={(0, a11y_1.onKeyDownHandler)(onClose)}>
        <cross_svg_1.default />
      </div>
    </div>);
};
exports.default = Banner;
