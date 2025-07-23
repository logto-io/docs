"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = require("@docusaurus/Link");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var clsx_1 = require("clsx");
var react_1 = require("react");
var a11y_1 = require("@site/src/utils/a11y");
var DropdownItem_module_scss_1 = require("./DropdownItem.module.scss");
var DropdownItem = function (_a) {
    var onClick = _a.onClick, to = _a.to, className = _a.className, children = _a.children, style = _a.style, _b = _a.type, type = _b === void 0 ? 'default' : _b;
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var isInternalUrl = (0, react_1.useCallback)(function (url) { return (url === null || url === void 0 ? void 0 : url.startsWith(siteConfig.url)) || (0, isInternalUrl_1.default)(url); }, [siteConfig.url]);
    var item = (0, react_1.useMemo)(function () { return (<li role="menuitem" tabIndex={0} className={(0, clsx_1.default)(DropdownItem_module_scss_1.default.item, DropdownItem_module_scss_1.default[type], className)} style={style} onKeyDown={(0, a11y_1.onKeyDownHandler)(onClick)} onClick={onClick}>
        {children}
      </li>); }, [className, children, onClick, style, type]);
    return to ? (<Link_1.default to={to} target={isInternalUrl(to) ? '_self' : '_blank'} className={DropdownItem_module_scss_1.default.link}>
      {item}
    </Link_1.default>) : (item);
};
exports.default = DropdownItem;
