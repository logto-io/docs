"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserOnly_1 = require("@docusaurus/BrowserOnly");
var Translate_1 = require("@docusaurus/Translate");
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
var arrow_left_svg_1 = require("@site/src/assets/arrow-left.svg");
var arrow_right_svg_1 = require("@site/src/assets/arrow-right.svg");
var FlipOnRtl_1 = require("../FlipOnRtl");
var index_module_scss_1 = require("./index.module.scss");
var Pagination = function (_a) {
    var page = _a.page, totalCount = _a.totalCount, pageSize = _a.pageSize, className = _a.className, _b = _a.mode, mode = _b === void 0 ? 'normal' : _b, onChange = _a.onChange;
    var ref = (0, react_1.useRef)(null);
    var pageCount = Math.ceil(totalCount / pageSize);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            var ul = ref.current.querySelector('ul[role="navigation"]');
            // This role is not properly set by react-paginate
            // See https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role
            ul === null || ul === void 0 ? void 0 : ul.removeAttribute('role');
        }
    }, []);
    if (pageCount <= 1) {
        return null;
    }
    var min = (page - 1) * pageSize + 1;
    var max = Math.min(page * pageSize, totalCount);
    var isPicoMode = mode === 'pico';
    return (<div ref={ref} className={(0, clsx_1.default)(index_module_scss_1.default.container, isPicoMode && index_module_scss_1.default.pico, className)}>
      <div className={index_module_scss_1.default.positionInfo}>
        <Translate_1.default id="theme.common.pagination.info" values={{ min: min, max: max, total: totalCount }}>
          {'{min}-{max} of {total}'}
        </Translate_1.default>
      </div>
      <BrowserOnly_1.default>
        {function () { return (<react_paginate_1.default className={index_module_scss_1.default.pagination} pageCount={pageCount} forcePage={page - 1} pageLabelBuilder={function (pageNumber) { return (<button className={(0, clsx_1.default)(index_module_scss_1.default.button, pageNumber === page && index_module_scss_1.default.active)} aria-label={"Page ".concat(pageNumber)}>
                {String(pageNumber)}
              </button>); }} previousLabel={<FlipOnRtl_1.default>
                <button className={index_module_scss_1.default.button} disabled={page === 1} aria-label="Previous page">
                  <arrow_left_svg_1.default />
                </button>
              </FlipOnRtl_1.default>} nextLabel={<FlipOnRtl_1.default>
                <button className={index_module_scss_1.default.button} disabled={page === pageCount} aria-label="Next page">
                  <arrow_right_svg_1.default />
                </button>
              </FlipOnRtl_1.default>} breakLabel={<button className={index_module_scss_1.default.button}>...</button>} disabledClassName={index_module_scss_1.default.disabled} pageRangeDisplayed={isPicoMode ? -1 : undefined} marginPagesDisplayed={isPicoMode ? 0 : undefined} onPageChange={function (_a) {
                var selected = _a.selected;
                onChange === null || onChange === void 0 ? void 0 : onChange(selected + 1);
            }}/>); }}
      </BrowserOnly_1.default>
    </div>);
};
exports.default = Pagination;
