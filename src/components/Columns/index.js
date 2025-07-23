"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_module_scss_1 = require("./index.module.scss");
var Columns = function (_a) {
    var columns = _a.columns, _b = _a.justifyContent, justifyContent = _b === void 0 ? 'flex-start' : _b;
    return (<div className={index_module_scss_1.default.container} style={{ justifyContent: justifyContent }}>
      {columns.map(function (_a) {
            var title = _a.title, items = _a.items;
            return (<div key={title}>
          <h4>{title}</h4>
          <ul>
            {items.map(function (_a) {
                    var _b;
                    var key = _a.key, node = _a.node, link = _a.link;
                    return (<li key={key}>
                {(_b = node !== null && node !== void 0 ? node : (link && (<a href={link} target="_blank" rel="noopener">
                      {key}
                    </a>))) !== null && _b !== void 0 ? _b : key}
              </li>);
                })}
          </ul>
        </div>);
        })}
    </div>);
};
exports.default = Columns;
