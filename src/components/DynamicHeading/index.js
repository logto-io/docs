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
/**
 * A component that renders a heading element (h1-h6) based on the level prop.
 * @param {number} level The heading level (1-6).
 * @param {React.HTMLAttributes<HTMLHeadingElement>} rest Any other props to be passed to the heading element.
 * @returns {JSX.Element} The rendered heading element.
 */
var DynamicHeading = function (_a) {
    var level = _a.level, children = _a.children, rest = __rest(_a, ["level", "children"]);
    if (level < 1 || level > 6) {
        throw new Error('Level must be between 1 and 6');
    }
    var HeadingTag = "h".concat(level);
    return <HeadingTag {...rest}>{children}</HeadingTag>;
};
exports.default = DynamicHeading;
