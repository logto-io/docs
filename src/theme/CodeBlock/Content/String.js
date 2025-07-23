"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CodeBlockString;
/**
 * Charles note: Nothing is changed in this file. The component is swizzled
 * as I need to override the `codeBlockTitle` class in the CSS.
 */
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var Container_1 = require("@theme/CodeBlock/Container");
var CopyButton_1 = require("@theme/CodeBlock/CopyButton");
var Line_1 = require("@theme/CodeBlock/Line");
var WordWrapButton_1 = require("@theme/CodeBlock/WordWrapButton");
var clsx_1 = require("clsx");
var prism_react_renderer_1 = require("prism-react-renderer");
var styles_module_css_1 = require("./styles.module.css");
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language === null || language === void 0 ? void 0 : language.toLowerCase();
}
function CodeBlockString(_a) {
    var _b;
    var children = _a.children, _c = _a.className, blockClassName = _c === void 0 ? '' : _c, metastring = _a.metastring, titleProp = _a.title, showLineNumbersProp = _a.showLineNumbers, languageProp = _a.language;
    var _d = (0, theme_common_1.useThemeConfig)().prism, defaultLanguage = _d.defaultLanguage, magicComments = _d.magicComments;
    var language = normalizeLanguage((_b = languageProp !== null && languageProp !== void 0 ? languageProp : (0, internal_1.parseLanguage)(blockClassName)) !== null && _b !== void 0 ? _b : defaultLanguage);
    var prismTheme = (0, theme_common_1.usePrismTheme)();
    var wordWrap = (0, internal_1.useCodeWordWrap)();
    // We still parse the metastring in case we want to support more syntax in the
    // future. Note that MDX doesn't strip quotes when parsing metastring:
    // "title=\"xyz\"" => title: "\"xyz\""
    var title = (0, internal_1.parseCodeBlockTitle)(metastring) || titleProp;
    var _e = (0, internal_1.parseLines)(children, {
        metastring: metastring,
        language: language,
        magicComments: magicComments,
    }), lineClassNames = _e.lineClassNames, code = _e.code;
    var showLineNumbers = showLineNumbersProp !== null && showLineNumbersProp !== void 0 ? showLineNumbersProp : (0, internal_1.containsLineNumbers)(metastring);
    return (<Container_1.default as="div" className={(0, clsx_1.default)(blockClassName, language && !blockClassName.includes("language-".concat(language)) && "language-".concat(language))}>
      {title && <div className={styles_module_css_1.default.codeBlockTitle}>{title}</div>}
      <div className={styles_module_css_1.default.codeBlockContent}>
        <prism_react_renderer_1.Highlight theme={prismTheme} code={code} language={language !== null && language !== void 0 ? language : 'text'}>
          {function (_a) {
            var className = _a.className, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (<pre ref={wordWrap.codeBlockRef} 
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0} className={(0, clsx_1.default)(className, styles_module_css_1.default.codeBlock, 'thin-scrollbar')}>
              <code className={(0, clsx_1.default)(styles_module_css_1.default.codeBlockLines, showLineNumbers && styles_module_css_1.default.codeBlockLinesWithNumbering)}>
                {tokens.map(function (line, i) { return (<Line_1.default 
                // eslint-disable-next-line react/no-array-index-key
                key={i} line={line} getLineProps={getLineProps} getTokenProps={getTokenProps} classNames={lineClassNames[i]} showLineNumbers={showLineNumbers}/>); })}
              </code>
            </pre>);
        }}
        </prism_react_renderer_1.Highlight>
        <div className={styles_module_css_1.default.buttonGroup}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (<WordWrapButton_1.default className={styles_module_css_1.default.codeButton} isEnabled={wordWrap.isEnabled} onClick={function () {
                wordWrap.toggle();
            }}/>)}
          <CopyButton_1.default className={styles_module_css_1.default.codeButton} code={code}/>
        </div>
      </div>
    </Container_1.default>);
}
