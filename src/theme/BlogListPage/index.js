"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogListPage;
var Translate_1 = require("@docusaurus/Translate");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var essentials_1 = require("@silverhand/essentials");
var BlogLayout_1 = require("@theme/BlogLayout");
var StructuredData_1 = require("@theme/BlogListPage/StructuredData");
var BlogPostItems_1 = require("@theme/BlogPostItems");
var SearchMetadata_1 = require("@theme/SearchMetadata");
var clsx_1 = require("clsx");
var react_1 = require("react");
var Pagination_1 = require("@site/src/components/Pagination");
var tutorial_1 = require("@site/src/utils/tutorial");
var TitleWithSelectionDropdown_1 = require("../BlogPostItem/Header/TitleWithSelectionDropdown");
var index_module_scss_1 = require("./index.module.scss");
var pageSize = 20;
function BlogListPageMetadata(props) {
    var metadata = props.metadata;
    var siteTitle = (0, useDocusaurusContext_1.default)().siteConfig.title;
    var blogDescription = metadata.blogDescription, blogTitle = metadata.blogTitle, permalink = metadata.permalink;
    var isBlogOnlyMode = permalink === '/';
    var title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (<>
      <theme_common_1.PageMetadata title={title} description={blogDescription}/>
      <SearchMetadata_1.default tag="blog_posts_list"/>
    </>);
}
function BlogListPageContent(props) {
    var items = props.items, sidebar = props.sidebar;
    var search = (0, router_1.useLocation)().search;
    var push = (0, router_1.useHistory)().push;
    var searchParams = (0, react_1.useMemo)(function () { return new URLSearchParams(search); }, [search]);
    var sdk = (0, essentials_1.conditional)(searchParams.get('sdk'));
    var connector = (0, essentials_1.conditional)(searchParams.get('connector'));
    var pageParsed = Number.parseInt((0, essentials_1.condString)(searchParams.get('page')), 10);
    var isPageValid = !Number.isNaN(pageParsed) && pageParsed > 0;
    var page = isPageValid ? pageParsed : 1;
    (0, react_1.useEffect)(function () {
        if (!isPageValid) {
            searchParams.set('page', '1');
            push({ search: searchParams.toString() });
        }
    }, [isPageValid, searchParams, push]);
    var filteredItems = (0, react_1.useMemo)(function () {
        if (!sdk && !connector) {
            return items;
        }
        if (!sdk && connector) {
            return items.filter(function (item) { var _a; return ((_a = item.content.metadata.tags[1]) === null || _a === void 0 ? void 0 : _a.label) === connector; });
        }
        if (sdk && !connector) {
            return items.filter(function (item) { var _a; return ((_a = item.content.metadata.tags[2]) === null || _a === void 0 ? void 0 : _a.label) === sdk; });
        }
        return items.filter(function (item) {
            var _a, _b;
            return ((_a = item.content.metadata.tags[1]) === null || _a === void 0 ? void 0 : _a.label) === connector &&
                ((_b = item.content.metadata.tags[2]) === null || _b === void 0 ? void 0 : _b.label) === sdk;
        });
    }, [items, sdk, connector]);
    return (<BlogLayout_1.default sidebar={sidebar}>
      <h1 className={index_module_scss_1.default.title}>
        <TitleWithSelectionDropdown_1.default defaultConnectorSlugPart={connector} defaultSdkSlugPart={sdk} onSelectConnector={function (selection) {
            if (selection) {
                searchParams.set('connector', (0, tutorial_1.getConnectorPath)(selection));
            }
            else {
                searchParams.delete('connector');
            }
            searchParams.set('page', '1');
            push({ search: searchParams.toString() });
        }} onSelectSdk={function (selection) {
            if (selection) {
                searchParams.set('sdk', (0, tutorial_1.getSdkPath)(selection));
            }
            else {
                searchParams.delete('sdk');
            }
            searchParams.set('page', '1');
            push({ search: searchParams.toString() });
        }}/>
      </h1>
      <h2 className={index_module_scss_1.default.subtitle}>
        <Translate_1.default id="theme.blog.tutorial.subtitle">
          Follow our step-by-step tutorial to set up an authentication system right away.
        </Translate_1.default>
      </h2>
      <BlogPostItems_1.default items={filteredItems.slice((page - 1) * pageSize, page * pageSize)}/>
      <Pagination_1.default page={page} totalCount={filteredItems.length} pageSize={pageSize} onChange={function (index) {
            searchParams.set('page', String(index));
            push({ search: searchParams.toString() });
        }}/>
    </BlogLayout_1.default>);
}
function BlogListPage(props) {
    return (<theme_common_1.HtmlClassNameProvider className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.wrapper.blogPages, theme_common_1.ThemeClassNames.page.blogListPage)}>
      <BlogListPageMetadata {...props}/>
      <StructuredData_1.default {...props}/>
      <BlogListPageContent {...props}/>
    </theme_common_1.HtmlClassNameProvider>);
}
