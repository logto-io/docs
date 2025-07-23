"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var essentials_1 = require("@silverhand/essentials");
var index_module_scss_1 = require("./index.module.scss");
/**
 * Escape potential parentheses in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
var normalizeName = function (name) { return name.replaceAll('(', '\\(').replaceAll(')', '\\)'); };
var TitleWithHighlights = function (_a) {
    var metadata = _a.metadata;
    var frontMatter = metadata.frontMatter, title = metadata.title;
    var sdkName = (0, essentials_1.condString)('sdk' in frontMatter && frontMatter.sdk);
    var connectorName = (0, essentials_1.condString)('connector' in frontMatter && frontMatter.connector);
    var titleParts = title
        .split(new RegExp("(".concat(normalizeName(connectorName), "|").concat(normalizeName(sdkName), ")"), 'g'))
        .filter(Boolean);
    return titleParts.map(function (part) {
        if (part === sdkName) {
            return (<span key={"".concat(frontMatter.slug, "-").concat(sdkName)} className={index_module_scss_1.default.highlight}>
          {part}
        </span>);
        }
        if (part === connectorName) {
            return (<span key={"".concat(frontMatter.slug, "-").concat(connectorName)} className={index_module_scss_1.default.highlight}>
          {part}
        </span>);
        }
        return part;
    });
};
exports.default = TitleWithHighlights;
