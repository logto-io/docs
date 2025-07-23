"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DocItemLayout;
var client_1 = require("@docusaurus/plugin-content-docs/client");
var theme_common_1 = require("@docusaurus/theme-common");
var ContentVisibility_1 = require("@theme/ContentVisibility");
var DocBreadcrumbs_1 = require("@theme/DocBreadcrumbs");
var Content_1 = require("@theme/DocItem/Content");
var Footer_1 = require("@theme/DocItem/Footer");
var Paginator_1 = require("@theme/DocItem/Paginator");
var Desktop_1 = require("@theme/DocItem/TOC/Desktop");
var Mobile_1 = require("@theme/DocItem/TOC/Mobile");
var DocVersionBadge_1 = require("@theme/DocVersionBadge");
var DocVersionBanner_1 = require("@theme/DocVersionBanner");
var clsx_1 = require("clsx");
var index_module_scss_1 = require("./index.module.scss");
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
    var _a = (0, client_1.useDoc)(), frontMatter = _a.frontMatter, toc = _a.toc;
    var windowSize = (0, theme_common_1.useWindowSize)();
    var hidden = frontMatter.hide_table_of_contents;
    var canRender = !hidden && toc.length > 0;
    var mobile = canRender ? <Mobile_1.default /> : undefined;
    var desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (<Desktop_1.default />) : undefined;
    return {
        hidden: hidden,
        mobile: mobile,
        desktop: desktop,
    };
}
function DocItemLayout(_a) {
    var children = _a.children;
    var _b = useDocTOC(), hidden = _b.hidden, mobileToc = _b.mobile, desktopToc = _b.desktop;
    var metadata = (0, client_1.useDoc)().metadata;
    var hasDesktopToc = !hidden && !!desktopToc;
    return (<div className={index_module_scss_1.default.layout}>
      <div className={(0, clsx_1.default)(index_module_scss_1.default.main, hasDesktopToc && index_module_scss_1.default.hasDesktopToc)}>
        <ContentVisibility_1.default metadata={metadata}/>
        <DocVersionBanner_1.default />
        <div className={index_module_scss_1.default.docItemContainer}>
          <article>
            <DocBreadcrumbs_1.default />
            <DocVersionBadge_1.default />
            {mobileToc}
            <Content_1.default>{children}</Content_1.default>
            <Footer_1.default />
          </article>
          <Paginator_1.default />
        </div>
      </div>
      {hasDesktopToc && <div className={index_module_scss_1.default.desktopToc}>{desktopToc}</div>}
    </div>);
}
