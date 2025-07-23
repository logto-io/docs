"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocCardList;
var client_1 = require("@docusaurus/plugin-content-docs/client");
var DocCard_1 = require("@theme/DocCard");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
function DocCardListForCurrentSidebarCategory(_a) {
    var className = _a.className;
    var category = (0, client_1.useCurrentSidebarCategory)();
    return <DocCardList items={category.items} className={className}/>;
}
function DocCardList(props) {
    var items = props.items, className = props.className;
    if (!items) {
        return <DocCardListForCurrentSidebarCategory {...props}/>;
    }
    var filteredItems = (0, client_1.filterDocCardListItems)(items);
    return (<section className={(0, clsx_1.default)(index_module_scss_1.default.section, className)}>
      {filteredItems.map(function (item, index) { return (
        // eslint-disable-next-line react/no-array-index-key
        <article key={index} className={index_module_scss_1.default.article}>
          <DocCard_1.default item={item}/>
        </article>); })}
    </section>);
}
