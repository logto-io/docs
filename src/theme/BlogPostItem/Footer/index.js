"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItemFooter;
var client_1 = require("@docusaurus/plugin-content-blog/client");
var theme_common_1 = require("@docusaurus/theme-common");
var EditMetaRow_1 = require("@theme/EditMetaRow");
var TagsListInline_1 = require("@theme/TagsListInline");
var clsx_1 = require("clsx");
function BlogPostItemFooter() {
    var _a = (0, client_1.useBlogPost)(), metadata = _a.metadata, isBlogPostPage = _a.isBlogPostPage;
    var tags = metadata.tags, editUrl = metadata.editUrl, hasTruncateMarker = metadata.hasTruncateMarker, lastUpdatedBy = metadata.lastUpdatedBy, lastUpdatedAt = metadata.lastUpdatedAt;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    var truncatedPost = !isBlogPostPage && hasTruncateMarker;
    var tagsExists = tags.length > 0;
    var renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter || !isBlogPostPage) {
        return null;
    }
    // BlogPost footer - details view
    var canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    return (<footer className="docusaurus-mt-lg">
      {tagsExists && (<div className={(0, clsx_1.default)('row', 'margin-top--sm', theme_common_1.ThemeClassNames.blog.blogFooterEditMetaRow)}>
          <div className="col">
            <TagsListInline_1.default tags={tags}/>
          </div>
        </div>)}
      {canDisplayEditMetaRow && (<EditMetaRow_1.default className={(0, clsx_1.default)('margin-top--sm', theme_common_1.ThemeClassNames.blog.blogFooterEditMetaRow)} editUrl={editUrl} lastUpdatedAt={lastUpdatedAt} lastUpdatedBy={lastUpdatedBy}/>)}
    </footer>);
    // BlogPost footer - list view - Charles commented out - We don't need tags in list view
    // else {
    //   return (
    //     <footer className="row docusaurus-mt-lg">
    //       {tagsExists && (
    //         <div className={clsx('col', {'col--9': truncatedPost})}>
    //           <TagsListInline tags={tags} />
    //         </div>
    //       )}
    //       {truncatedPost && (
    //         <div
    //           className={clsx('col text--right', {
    //             'col--3': tagsExists,
    //           })}>
    //           <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
    //         </div>
    //       )}
    //     </footer>
    //   );
    // }
}
