"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translate_1 = require("@docusaurus/Translate");
var clsx_1 = require("clsx");
var search_bar_svg_1 = require("@site/src/assets/search-bar.svg");
var a11y_1 = require("@site/src/utils/a11y");
var device_1 = require("@site/src/utils/device");
var index_module_scss_1 = require("./index.module.scss");
var SearchBar = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (<div tabIndex={0} role="button" className={(0, clsx_1.default)(index_module_scss_1.default.searchBarContainer, className)} aria-label="Search" onClick={onClick} onKeyDown={(0, a11y_1.onKeyDownHandler)(onClick)}>
      <search_bar_svg_1.default className={index_module_scss_1.default.icon}/>
      <span className={index_module_scss_1.default.placeholder}>
        <Translate_1.default id="theme.SearchBar.label">Search</Translate_1.default>
      </span>
      <div className={index_module_scss_1.default.keys}>
        <kbd>{(0, device_1.isAppleDevice)() ? '⌘' : 'Ctrl'}</kbd>
        <kbd>K</kbd>
      </div>
    </div>);
};
exports.default = SearchBar;
