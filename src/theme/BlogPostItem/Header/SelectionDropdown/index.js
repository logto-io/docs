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
var Translate_1 = require("@docusaurus/Translate");
var react_1 = require("react");
var react_modal_1 = require("react-modal");
var use_position_1 = require("@site/src/hooks/use-position");
var a11y_1 = require("@site/src/utils/a11y");
var index_module_scss_1 = require("./index.module.scss");
var SelectionDropdown = function (_a) {
    var isOpen = _a.isOpen, anchorRef = _a.anchorRef, options = _a.options, onSelect = _a.onSelect, onClose = _a.onClose, onReset = _a.onReset;
    var overlayRef = (0, react_1.useRef)(null);
    var _b = (0, use_position_1.usePosition)({
        verticalAlign: 'bottom',
        horizontalAlign: 'start',
        offset: { vertical: 6, horizontal: 0 },
        anchorRef: anchorRef,
        overlayRef: overlayRef,
    }), position = _b.position, mutate = _b.mutate;
    return (<react_modal_1.default shouldCloseOnOverlayClick isOpen={isOpen} className={index_module_scss_1.default.dropdown} overlayClassName={index_module_scss_1.default.overlay} style={{
            content: __assign(__assign({ zIndex: 198 }, (!position && { opacity: 0 })), position),
        }} onAfterOpen={mutate} onRequestClose={onClose}>
      <div ref={overlayRef} className={index_module_scss_1.default.dropdownContainer}>
        {Object.entries(options).map(function (_a) {
            var groupLabel = _a[0], categorizedGuides = _a[1];
            return (<react_1.Fragment key={groupLabel}>
              <label>{groupLabel}</label>
              <div className={index_module_scss_1.default.dropdownGroup}>
                {categorizedGuides.map(function (metadata) {
                    var _a, _b;
                    var frontMatter = metadata.frontMatter, file = metadata.file;
                    var displayName = String((_b = (_a = frontMatter.tutorial_name) !== null && _a !== void 0 ? _a : frontMatter.sidebar_label) !== null && _b !== void 0 ? _b : '').replace(' enterprise SSO', '');
                    return (<div key={file} tabIndex={0} role="menuitem" className={index_module_scss_1.default.dropdownItem} onKeyDown={(0, a11y_1.onKeyDownHandler)(function () {
                            onSelect({ displayName: displayName, metadata: metadata });
                        })} onClick={function () {
                            onSelect({ displayName: displayName, metadata: metadata });
                        }}>
                      {displayName}
                    </div>);
                })}
              </div>
            </react_1.Fragment>);
        })}
        {onReset && (<button className={index_module_scss_1.default.clearButton} onClick={onReset} onKeyDown={(0, a11y_1.onKeyDownHandler)(onReset)}>
            <Translate_1.default id="theme.common.resetFilters">Reset filters</Translate_1.default>
          </button>)}
      </div>
    </react_modal_1.default>);
};
exports.default = SelectionDropdown;
