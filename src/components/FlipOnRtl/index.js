"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var clsx_1 = require("clsx");
var react_1 = require("react");
var index_module_scss_1 = require("./index.module.scss");
/**
 * This component flips its child element horizontally if the browser's text direction is RTL (right-to-left).
 *
 * @component
 * @example
 * ```tsx
 * <FlipOnRtl>
 *   <SVG />
 * </FlipOnRtl>
 * ```
 *
 * @param {React.ReactNode} children - The SVG or other HTML content to render and flip if RTL.
 * @returns {JSX.Element} The flipped content.
 */
function FlipOnRtl(_a) {
    var _b;
    var children = _a.children;
    var i18n = (0, useDocusaurusContext_1.default)().i18n;
    var isRtl = ((_b = i18n.localeConfigs[i18n.currentLocale]) === null || _b === void 0 ? void 0 : _b.direction) === 'rtl';
    if (!(0, react_1.isValidElement)(children)) {
        return children;
    }
    return (0, react_1.cloneElement)(children, {
        className: (0, clsx_1.default)(children.props.className, isRtl && index_module_scss_1.default.flip),
    });
}
exports.default = FlipOnRtl;
