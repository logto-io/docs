"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostItemContainer;
function BlogPostItemContainer(_a) {
    var children = _a.children, className = _a.className;
    return <article className={className}>{children}</article>;
}
