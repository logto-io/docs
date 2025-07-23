"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownItem = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_modal_1 = require("react-modal");
var use_position_1 = require("@site/src/hooks/use-position");
var a11y_1 = require("../../utils/a11y");
var index_module_scss_1 = require("./index.module.scss");
var DropdownItem_1 = require("./DropdownItem");
Object.defineProperty(exports, "DropdownItem", { enumerable: true, get: function () { return DropdownItem_1.default; } });
react_modal_1.default.setAppElement('#__docusaurus');
var Dropdown = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, style = _a.style, onClose = _a.onClose, anchorRef = _a.anchorRef, isFullWidth = _a.isFullWidth, className = _a.className, _b = _a.horizontalAlign, horizontalAlign = _b === void 0 ? 'end' : _b;
    var overlayRef = (0, react_1.useRef)(null);
    var _c = (0, use_position_1.usePosition)({
        verticalAlign: 'bottom',
        horizontalAlign: horizontalAlign,
        offset: { vertical: -4, horizontal: 0 },
        anchorRef: anchorRef,
        overlayRef: overlayRef,
    }), position = _c.position, positionState = _c.positionState, mutate = _c.mutate;
    return (<react_modal_1.default shouldCloseOnOverlayClick isOpen={isOpen} style={{
            content: __assign(__assign({ width: isFullWidth && anchorRef.current
                    ? anchorRef.current.getBoundingClientRect().width
                    : undefined }, (!position && { opacity: 0 })), position),
        }} className={(0, clsx_1.default)(index_module_scss_1.default.content, positionState.verticalAlign === 'top' && index_module_scss_1.default.onTop)} overlayClassName={index_module_scss_1.default.overlay} onRequestClose={onClose} onAfterOpen={mutate}>
      <div ref={overlayRef}>
        <ul className={(0, clsx_1.default)(index_module_scss_1.default.list, className)} role="menu" tabIndex={0} style={style} onClick={onClose} onKeyDown={(0, a11y_1.onKeyDownHandler)({ Enter: onClose, Esc: onClose })}>
          {children}
        </ul>
      </div>
    </react_modal_1.default>);
};
exports.default = Dropdown;
