"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var essentials_1 = require("@silverhand/essentials");
var Url_1 = require("../Url");
var logtoCloudConsoleUrl = 'https://cloud.logto.io';
var logtoCloudTenantIdWildcard = 'to';
var isAbsoluteUrl = function (url) {
    return url.startsWith('http://') || url.startsWith('https://');
};
var getCloudConsoleUrl = function (path) {
    if (isAbsoluteUrl(path)) {
        return path;
    }
    var baseUrl = new URL(logtoCloudConsoleUrl);
    var pathname = path.startsWith("/".concat(logtoCloudTenantIdWildcard, "/")) ||
        path.startsWith("".concat(logtoCloudTenantIdWildcard, "/"))
        ? path
        : (0, essentials_1.joinPath)(logtoCloudTenantIdWildcard, path);
    return new URL(pathname, baseUrl).toString();
};
/**
 * Remove the possible leading slashes and capitalize the first letter
 */
var toTitleCaseLabel = function (path) {
    var pathWithoutLeadingSlashes = path.replace(/^\/+/, '');
    // Capitalize the first letter
    return pathWithoutLeadingSlashes.charAt(0).toUpperCase() + pathWithoutLeadingSlashes.slice(1);
};
var CloudLink = function (_a) {
    var to = _a.to, children = _a.children;
    var link = getCloudConsoleUrl(to);
    return (<Url_1.default hasIcon={false} href={link}>
      {children || toTitleCaseLabel(to)}
    </Url_1.default>);
};
exports.default = CloudLink;
