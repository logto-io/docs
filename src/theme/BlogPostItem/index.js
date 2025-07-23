"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItem;
var client_1 = require("@docusaurus/plugin-content-blog/client");
var essentials_1 = require("@silverhand/essentials");
var Container_1 = require("@theme/BlogPostItem/Container");
var Content_1 = require("@theme/BlogPostItem/Content");
var Footer_1 = require("@theme/BlogPostItem/Footer");
var Header_1 = require("@theme/BlogPostItem/Header");
var ThemedImage_1 = require("@theme/ThemedImage");
var clsx_1 = require("clsx");
var use_categorized_tutorial_metadata_1 = require("@site/src/hooks/use-categorized-tutorial-metadata");
var tutorial_1 = require("@site/src/utils/tutorial");
var index_module_scss_1 = require("./index.module.scss");
var utils_1 = require("./utils");
// Apply a bottom margin in list view - Charles commented out
// function useContainerClassName() {
//   const {isBlogPostPage} = useBlogPost();
//   return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
// }
var getLogoFilenames = function (data) {
    var _a, _b, _c, _d, _e;
    var lastSegmentInSlug = (_a = data === null || data === void 0 ? void 0 : data.slug.slice(data.slug.lastIndexOf('/') + 1)) !== null && _a !== void 0 ? _a : '';
    var logoFilename = (0, essentials_1.condString)((_c = (_b = data === null || data === void 0 ? void 0 : data.frontMatter.sidebar_custom_props) === null || _b === void 0 ? void 0 : _b.logoFilename) !== null && _c !== void 0 ? _c : lastSegmentInSlug + '.svg');
    var darkLogoFilename = (0, essentials_1.condString)((_e = (_d = data === null || data === void 0 ? void 0 : data.frontMatter.sidebar_custom_props) === null || _d === void 0 ? void 0 : _d.darkLogoFilename) !== null && _e !== void 0 ? _e : logoFilename);
    return {
        logoFilename: "/img/logo/".concat(logoFilename),
        darkLogoFilename: "/img/logo/".concat(darkLogoFilename),
        fallbackLogoFilename: "/img/logo/broken-image.svg",
    };
};
function BlogPostItem(_a) {
    var children = _a.children, className = _a.className;
    var _b = (0, client_1.useBlogPost)(), isBlogPostPage = _b.isBlogPostPage, frontMatter = _b.frontMatter;
    var _c = (0, use_categorized_tutorial_metadata_1.default)(), allConnectors = _c.allConnectors, allSdks = _c.allSdks;
    // The slug should match the "build-x-with-y" format
    var isGeneratedTutorial = (0, utils_1.isHowToTutorial)(frontMatter.slug);
    var isTutorialListView = isGeneratedTutorial && !isBlogPostPage;
    var blogSdkName = (0, essentials_1.condString)('sdk' in frontMatter && frontMatter.sdk);
    var blogConnectorName = (0, essentials_1.condString)('connector' in frontMatter && frontMatter.connector);
    var connectorMetadata = allConnectors.find(function (data) { return (0, tutorial_1.getConnectorDisplayName)(data) === blogConnectorName; });
    var sdkMetadata = allSdks.find(function (data) { return (0, tutorial_1.getSdkDisplayName)(data) === blogSdkName; });
    var sdkLogos = getLogoFilenames(sdkMetadata);
    var connectorLogos = getLogoFilenames(connectorMetadata);
    return (<Container_1.default className={(0, clsx_1.default)(!isBlogPostPage && index_module_scss_1.default.listViewItemContainer, className)}>
      {isTutorialListView && (<>
          <div className={index_module_scss_1.default.logo}>
            <ThemedImage_1.default alt="Connector logo" sources={{
                light: connectorLogos.logoFilename,
                dark: connectorLogos.darkLogoFilename,
            }} onError={function (_a) {
                var currentTarget = _a.currentTarget;
                // eslint-disable-next-line @silverhand/fp/no-mutation
                currentTarget.src = connectorLogos.fallbackLogoFilename;
            }}/>
          </div>
          <div className={index_module_scss_1.default.logo}>
            <ThemedImage_1.default alt="SDK logo" sources={{
                light: sdkLogos.logoFilename,
                dark: sdkLogos.darkLogoFilename,
            }} onError={function (_a) {
                var currentTarget = _a.currentTarget;
                // eslint-disable-next-line @silverhand/fp/no-mutation
                currentTarget.src = sdkLogos.fallbackLogoFilename;
            }}/>
          </div>
        </>)}
      <Header_1.default />
      <Content_1.default>{children}</Content_1.default>
      <Footer_1.default />
    </Container_1.default>);
}
