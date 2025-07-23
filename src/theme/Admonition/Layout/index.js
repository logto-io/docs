"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdmonitionLayout;
var theme_common_1 = require("@docusaurus/theme-common");
var clsx_1 = require("clsx");
var styles_module_css_1 = require("./styles.module.css");
function AdmonitionContainer(_a) {
    var type = _a.type, className = _a.className, children = _a.children;
    return (<div className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.common.admonition, theme_common_1.ThemeClassNames.common.admonitionType(type), styles_module_css_1.default.admonition, className)}>
      {children}
    </div>);
}
function AdmonitionContent(_a) {
    var children = _a.children;
    return children ? <div className={styles_module_css_1.default.admonitionContent}>{children}</div> : null;
}
function AdmonitionLayout(props) {
    var type = props.type, title = props.title, children = props.children, className = props.className;
    return (<AdmonitionContainer type={type} className={className}>
      <AdmonitionContent>
        <div className={styles_module_css_1.default.content}>
          <span className={styles_module_css_1.default.title} data-type="title">
            {title}:
          </span>
          {children}
        </div>
      </AdmonitionContent>
    </AdmonitionContainer>);
}
