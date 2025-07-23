"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserOnly_1 = require("@docusaurus/BrowserOnly");
var client_1 = require("@docusaurus/plugin-content-blog/client");
var Admonition_1 = require("@theme/Admonition");
var clsx_1 = require("clsx");
var react_1 = require("react");
var TitleWithHighlights_1 = require("../TitleWithHighlights");
var TitleWithSelectionDropdown_1 = require("../TitleWithSelectionDropdown");
var styles_module_css_1 = require("./styles.module.css");
var Content = function (_a) {
    var className = _a.className;
    var _b = (0, client_1.useBlogPost)(), metadata = _b.metadata, isBlogPostPage = _b.isBlogPostPage;
    var title = metadata.title;
    var TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    var shouldReplace = window.location.pathname.startsWith('/blog');
    var getNewBlogUrl = (0, react_1.useCallback)(function () {
        var url = new URL(isBlogPostPage ? window.location.pathname.replace(/^\/blog/, '') : '/', 'https://blog.logto.io');
        var parameters = new URLSearchParams(window.location.search);
        for (var _i = 0, _a = parameters.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            url.searchParams.append(key, value);
        }
        if (!url.pathname.endsWith('/')) {
            // eslint-disable-next-line @silverhand/fp/no-mutation
            url.pathname += '/';
        }
        return url;
    }, [isBlogPostPage]);
    // Redirect to the new blog. The whole component will be removed later.
    (0, react_1.useEffect)(function () {
        var _a;
        if (!shouldReplace) {
            return;
        }
        // https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics#properly-inject-canonical-links
        // Remove all canonical tags before inserting
        for (var _i = 0, _b = document.head.querySelectorAll('link'); _i < _b.length; _i++) {
            var element = _b[_i];
            if (['canonical', 'alternate'].includes((_a = element.getAttribute('rel')) !== null && _a !== void 0 ? _a : '')) {
                element.remove();
            }
        }
        // Insert the canonical tag to the new blog
        var linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        // eslint-disable-next-line @silverhand/fp/no-mutation
        linkTag.href = getNewBlogUrl().href;
        document.head.append(linkTag);
    }, [getNewBlogUrl, shouldReplace]);
    return (<>
      {shouldReplace && (<>
          <Admonition_1.default type="tip">
            Logto Blog has been moved to the new place!{' '}
            <a href={getNewBlogUrl().href}>Click here</a> to see this article in the new blog.
          </Admonition_1.default>
          <hr></hr>
        </>)}
      <TitleHeading className={(0, clsx_1.clsx)(styles_module_css_1.default.title, !isBlogPostPage && styles_module_css_1.default.listTitle, className)} itemProp="headline">
        {isBlogPostPage ? (<TitleWithSelectionDropdown_1.default metadata={metadata}/>) : (<TitleWithHighlights_1.default metadata={metadata}/>)}
      </TitleHeading>
    </>);
};
var Title = function () {
    return <BrowserOnly_1.default>{function () { return <Content />; }}</BrowserOnly_1.default>;
};
exports.default = Title;
