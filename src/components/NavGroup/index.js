"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = require("@docusaurus/Link");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
var NavItem = function (_a) {
    var title = _a.title, icon = _a.icon, docId = _a.docId;
    var doc = (0, client_1.useLayoutDoc)(docId);
    var docTitle = (0, client_1.useDocById)(docId).title;
    return (<span className="col col--6 margin-bottom--md">
      <Link_1.default className={index_module_scss_1.default.navItem} href={doc === null || doc === void 0 ? void 0 : doc.path}>
        {icon}
        {title !== null && title !== void 0 ? title : docTitle}
      </Link_1.default>
    </span>);
};
var NavGroup = function (_a) {
    var label = _a.label, items = _a.items;
    return (<>
      <label className={index_module_scss_1.default.groupLabel}>{label}</label>
      <div className={(0, clsx_1.default)('row', index_module_scss_1.default.group)}>
        {items.map(function (item) { return (<NavItem key={item.docId} {...item}/>); })}
      </div>
    </>);
};
exports.default = NavGroup;
