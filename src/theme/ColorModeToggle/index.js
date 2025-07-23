"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translate_1 = require("@docusaurus/Translate");
var useIsBrowser_1 = require("@docusaurus/useIsBrowser");
var clsx_1 = require("clsx");
var react_1 = require("react");
var moon_svg_1 = require("@site/src/assets/moon.svg");
var sun_svg_1 = require("@site/src/assets/sun.svg");
var styles_module_css_1 = require("./styles.module.css");
function ColorModeToggle(_a) {
    var className = _a.className, buttonClassName = _a.buttonClassName, value = _a.value, onChange = _a.onChange;
    var isBrowser = (0, useIsBrowser_1.default)();
    var title = (0, Translate_1.translate)({
        message: 'Switch between dark and light mode (currently {mode})',
        id: 'theme.colorToggle.ariaLabel',
        description: 'The ARIA label for the navbar color mode toggle',
    }, {
        mode: value === 'dark'
            ? (0, Translate_1.translate)({
                message: 'dark mode',
                id: 'theme.colorToggle.ariaLabel.mode.dark',
                description: 'The name for the dark color mode',
            })
            : (0, Translate_1.translate)({
                message: 'light mode',
                id: 'theme.colorToggle.ariaLabel.mode.light',
                description: 'The name for the light color mode',
            }),
    });
    return (<div className={(0, clsx_1.default)(styles_module_css_1.default.toggle, className)}>
      <button className={(0, clsx_1.default)('clean-btn', styles_module_css_1.default.toggleButton, !isBrowser && styles_module_css_1.default.toggleButtonDisabled, buttonClassName)} type="button" disabled={!isBrowser} title={title} aria-label={title} aria-live="polite" aria-pressed={value === 'dark' ? 'true' : 'false'} onClick={function () {
            onChange(value === 'dark' ? 'light' : 'dark');
        }}>
        <sun_svg_1.default className={(0, clsx_1.default)(styles_module_css_1.default.toggleIcon, styles_module_css_1.default.lightToggleIcon)}/>
        <moon_svg_1.default className={(0, clsx_1.default)(styles_module_css_1.default.toggleIcon, styles_module_css_1.default.darkToggleIcon)}/>
      </button>
    </div>);
}
exports.default = react_1.default.memo(ColorModeToggle);
