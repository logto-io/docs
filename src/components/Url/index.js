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
var Link_1 = require("@docusaurus/Link");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var ExternalLink_1 = require("@theme/Icon/ExternalLink");
var clsx_1 = require("clsx");
var react_1 = require("react");
var api_svg_1 = require("@site/src/assets/api.svg");
var document_svg_1 = require("@site/src/assets/document.svg");
var github_svg_1 = require("@site/src/assets/github.svg");
var link_svg_1 = require("@site/src/assets/link.svg");
var video_svg_1 = require("@site/src/assets/video.svg");
var index_module_scss_1 = require("./index.module.scss");
var isApiDocLink = function (href) {
    return (href === null || href === void 0 ? void 0 : href.startsWith('https://bump.sh/logto/')) || (href === null || href === void 0 ? void 0 : href.startsWith('https://openapi.logto.io/'));
};
var isVideoLink = function (href) {
    return (href === null || href === void 0 ? void 0 : href.startsWith('https://www.youtube.com/')) || (href === null || href === void 0 ? void 0 : href.startsWith('https://youtu.be/'));
};
var isGitHubLink = function (href) { return href === null || href === void 0 ? void 0 : href.startsWith('https://github.com/'); };
var isDocLink = function (href) {
    return (href === null || href === void 0 ? void 0 : href.startsWith('https://blog.logto.io/')) ||
        (href === null || href === void 0 ? void 0 : href.startsWith('https://auth.wiki/')) ||
        (0, isInternalUrl_1.default)(href);
};
var Url = function (props) {
    var _a;
    var className = props.className, wrapperClassName = props.wrapperClassName, children = props.children, _b = props.hasIcon, hasIcon = _b === void 0 ? true : _b, _c = props.type, type = _c === void 0 ? 'block' : _c, rest = __rest(props, ["className", "wrapperClassName", "children", "hasIcon", "type"]);
    var isInternal = (0, isInternalUrl_1.default)(props.href);
    var IconComponent = (0, react_1.useMemo)(function () {
        if (!hasIcon) {
            return null;
        }
        if (isApiDocLink(props.href)) {
            return api_svg_1.default;
        }
        if (isGitHubLink(props.href)) {
            return github_svg_1.default;
        }
        if (isVideoLink(props.href)) {
            return video_svg_1.default;
        }
        if (isDocLink(props.href)) {
            return document_svg_1.default;
        }
        return link_svg_1.default;
    }, [hasIcon, props.href]);
    return (<span className={(0, clsx_1.default)(wrapperClassName, index_module_scss_1.default.linkWrapper, index_module_scss_1.default[type])}>
      <Link_1.default className={(0, clsx_1.default)(className, index_module_scss_1.default.link)} {...rest}>
        {IconComponent && <IconComponent />}
        {(_a = (typeof children === 'string' ? children.trim() : children)) !== null && _a !== void 0 ? _a : props.href}
        {!isInternal && <ExternalLink_1.default className={index_module_scss_1.default.externalLink}/>}
      </Link_1.default>
    </span>);
};
exports.default = Url;
