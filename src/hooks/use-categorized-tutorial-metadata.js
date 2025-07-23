"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocAppType = void 0;
var react_1 = require("react");
var metadata_json_1 = require("@site/tutorial/build-with-logto/metadata.json");
/**
 * Matches the `app_type` frontmatter value of an SDK doc in quick-starts.
 */
var DocAppType;
(function (DocAppType) {
    DocAppType["Native"] = "Native app";
    DocAppType["Traditional"] = "Traditional web";
    DocAppType["SPA"] = "Single page app";
})(DocAppType || (exports.DocAppType = DocAppType = {}));
var useCategorizedTutorialMetadata = function () {
    var _a = metadata_json_1.default, sdks = _a.sdks, socialConnectors = _a.socialConnectors, emailConnectors = _a.emailConnectors, smsConnectors = _a.smsConnectors, ssoConnectors = _a.ssoConnectors;
    var _b = sdks.reduce(function (acc, sdk) {
        var appType = sdk.frontMatter.app_type;
        switch (appType) {
            case DocAppType.Native: {
                return __assign(__assign({}, acc), { nativeSdks: __spreadArray(__spreadArray([], acc.nativeSdks, true), [sdk], false) });
            }
            case DocAppType.Traditional: {
                return __assign(__assign({}, acc), { traditionalSdks: __spreadArray(__spreadArray([], acc.traditionalSdks, true), [sdk], false) });
            }
            case DocAppType.SPA: {
                return __assign(__assign({}, acc), { spaSdks: __spreadArray(__spreadArray([], acc.spaSdks, true), [sdk], false) });
            }
            default: {
                return acc;
            }
        }
    }, { nativeSdks: [], traditionalSdks: [], spaSdks: [] }), nativeSdks = _b.nativeSdks, traditionalSdks = _b.traditionalSdks, spaSdks = _b.spaSdks;
    return (0, react_1.useMemo)(function () { return ({
        allSdks: sdks,
        allConnectors: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], socialConnectors, true), emailConnectors, true), smsConnectors, true), ssoConnectors, true),
        nativeSdks: nativeSdks,
        traditionalSdks: traditionalSdks,
        spaSdks: spaSdks,
        socialConnectors: socialConnectors,
        emailConnectors: emailConnectors,
        smsConnectors: smsConnectors,
        ssoConnectors: ssoConnectors,
    }); }, [
        sdks,
        socialConnectors,
        emailConnectors,
        smsConnectors,
        ssoConnectors,
        nativeSdks,
        traditionalSdks,
        spaSdks,
    ]);
};
exports.default = useCategorizedTutorialMetadata;
