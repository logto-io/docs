"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var a11y_1 = require("@site/src/utils/a11y");
var Dropdown_1 = require("../Dropdown");
var Spacer_1 = require("../Spacer");
var ArrowDown_1 = require("./components/ArrowDown");
var ArrowUp_1 = require("./components/ArrowUp");
var index_module_scss_1 = require("./index.module.scss");
var Select = function (_a) {
    var _b;
    var className = _a.className, dropdownClassName = _a.dropdownClassName, optionContainerStyles = _a.optionContainerStyles, optionStyles = _a.optionStyles, value = _a.value, options = _a.options, onChange = _a.onChange, icon = _a.icon, isReadOnly = _a.isReadOnly, errorMessage = _a.errorMessage, _c = _a.hasError, hasError = _c === void 0 ? Boolean(errorMessage) : _c, placeholder = _a.placeholder, _d = _a.size, size = _d === void 0 ? 'large' : _d;
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setIsOpen = _e[1];
    var anchorRef = (0, react_1.useRef)(null);
    var current = options.find(function (option) { return value && option.value === value; });
    var handleSelect = function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        setIsOpen(false);
    };
    return (<>
      <div ref={anchorRef} className={(0, clsx_1.default)(index_module_scss_1.default.select, index_module_scss_1.default[size], isOpen && index_module_scss_1.default.open, isReadOnly && index_module_scss_1.default.readOnly, hasError && index_module_scss_1.default.error, className)} role="button" tabIndex={0} onKeyDown={(0, a11y_1.onKeyDownHandler)(function () {
            if (!isReadOnly) {
                setIsOpen(true);
            }
        })} onClick={function () {
            if (!isReadOnly) {
                setIsOpen(true);
            }
        }}>
        {icon}
        {current ? (<span className={index_module_scss_1.default.title}>{(_b = current.title) !== null && _b !== void 0 ? _b : current.value}</span>) : (<span className={index_module_scss_1.default.placeholder}>{placeholder}</span>)}
        <Spacer_1.default />
        <div className={(0, clsx_1.default)(index_module_scss_1.default.icon, index_module_scss_1.default.arrow)}>
          {isOpen ? <ArrowUp_1.default /> : <ArrowDown_1.default />}
        </div>
      </div>
      {hasError && errorMessage && <div className={index_module_scss_1.default.errorMessage}>{errorMessage}</div>}
      <Dropdown_1.default anchorRef={anchorRef} isOpen={isOpen} className={(0, clsx_1.default)(index_module_scss_1.default.dropdownContainer, dropdownClassName)} style={optionContainerStyles} onClose={function () {
            setIsOpen(false);
        }}>
        {options.map(function (_a) {
            var value = _a.value, title = _a.title, className = _a.className, to = _a.to;
            return (<Dropdown_1.DropdownItem key={value} style={optionStyles} className={className} to={to} onClick={function () {
                    handleSelect(value);
                }}>
            {title !== null && title !== void 0 ? title : value}
          </Dropdown_1.DropdownItem>);
        })}
      </Dropdown_1.default>
    </>);
};
exports.default = Select;
