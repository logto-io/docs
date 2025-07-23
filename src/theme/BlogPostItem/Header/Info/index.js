"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItemHeaderInfo;
var Translate_1 = require("@docusaurus/Translate");
var client_1 = require("@docusaurus/plugin-content-blog/client");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var clsx_1 = require("clsx");
var utils_1 = require("../../utils");
var styles_module_css_1 = require("./styles.module.css");
// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    var selectMessage = (0, theme_common_1.usePluralForm)().selectMessage;
    return function (readingTimeFloat) {
        var readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0, Translate_1.translate)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read',
        }, { readingTime: readingTime }));
    };
}
function ReadingTime(_a) {
    var readingTime = _a.readingTime;
    var readingTimePlural = useReadingTimePlural();
    return <>{readingTimePlural(readingTime)}</>;
}
function DateTime(_a) {
    var date = _a.date, formattedDate = _a.formattedDate;
    return <time dateTime={date}>{formattedDate}</time>;
}
function Spacer() {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{' · '}</>;
}
function BlogPostItemHeaderInfo(_a) {
    var className = _a.className;
    var metadata = (0, client_1.useBlogPost)().metadata;
    var date = metadata.date, readingTime = metadata.readingTime;
    var dateTimeFormat = (0, internal_1.useDateTimeFormat)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });
    // Charles edited this to remove the time from generated "Build X with Y tutorials"
    var isTutorial = (0, utils_1.isHowToTutorial)(metadata.frontMatter.slug);
    if (isTutorial) {
        return null;
    }
    var formatDate = function (blogDate) { return dateTimeFormat.format(new Date(blogDate)); };
    return (<div className={(0, clsx_1.default)(styles_module_css_1.default.container, 'margin-vert--md', className)}>
      <DateTime date={date} formattedDate={formatDate(date)}/>
      {readingTime !== undefined && (<>
          <Spacer />
          <ReadingTime readingTime={readingTime}/>
        </>)}
    </div>);
}
