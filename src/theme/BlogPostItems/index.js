"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItems;
var Link_1 = require("@docusaurus/Link");
var client_1 = require("@docusaurus/plugin-content-blog/client");
var BlogPostItem_1 = require("@theme/BlogPostItem");
var index_module_scss_1 = require("./index.module.scss");
function BlogPostItems(_a) {
    var items = _a.items, _b = _a.component, BlogPostItemComponent = _b === void 0 ? BlogPostItem_1.default : _b;
    return (<>
      {items.map(function (_a) {
            var BlogPostContent = _a.content;
            return (<client_1.BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <Link_1.default className={index_module_scss_1.default.link} to={BlogPostContent.metadata.permalink}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </Link_1.default>
        </client_1.BlogPostProvider>);
        })}
    </>);
}
