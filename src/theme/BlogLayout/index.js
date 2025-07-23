"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogLayout;
var BlogSidebar_1 = require("@theme/BlogSidebar");
var Layout_1 = require("@theme/Layout");
var clsx_1 = require("clsx");
var react_modal_1 = require("react-modal");
var index_module_scss_1 = require("./index.module.scss");
react_modal_1.default.setAppElement('#__docusaurus');
function BlogLayout(props) {
    var sidebar = props.sidebar, toc = props.toc, children = props.children, layoutProps = __rest(props, ["sidebar", "toc", "children"]);
    var hasSidebar = sidebar && sidebar.items.length > 0;
    return (<Layout_1.default {...layoutProps}>
      <div className={(0, clsx_1.default)(index_module_scss_1.default.container, toc && index_module_scss_1.default.hasToc)}>
        <div className={index_module_scss_1.default.row}>
          {hasSidebar && <BlogSidebar_1.default sidebar={sidebar}/>}
          <main className={index_module_scss_1.default.main}>{children}</main>
          {toc && <div className={index_module_scss_1.default.toc}>{toc}</div>}
        </div>
      </div>
    </Layout_1.default>);
}
