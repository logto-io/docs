"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectorPath = exports.getSdkPath = exports.getConnectorDisplayName = exports.getSdkDisplayName = void 0;
var getSdkDisplayName = function (sdk) { var _a, _b; return String((_b = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.frontMatter.tutorial_name) !== null && _a !== void 0 ? _a : sdk === null || sdk === void 0 ? void 0 : sdk.frontMatter.sidebar_label) !== null && _b !== void 0 ? _b : ''); };
exports.getSdkDisplayName = getSdkDisplayName;
var getConnectorDisplayName = function (connector) { var _a, _b; return String((_b = (_a = connector === null || connector === void 0 ? void 0 : connector.frontMatter.tutorial_name) !== null && _a !== void 0 ? _a : connector === null || connector === void 0 ? void 0 : connector.frontMatter.sidebar_label) !== null && _b !== void 0 ? _b : ''); };
exports.getConnectorDisplayName = getConnectorDisplayName;
var getSdkPath = function (metadata) {
    var _a;
    var sdkName = String((_a = metadata.frontMatter.tutorial_name) !== null && _a !== void 0 ? _a : '');
    return sdkName
        ? sdkName.replaceAll(' ', '-').replaceAll(/[()]/g, '').replaceAll('.', 'dot').toLowerCase()
        : metadata.slug.split('/').slice(2).join('-');
};
exports.getSdkPath = getSdkPath;
var getConnectorPath = function (metadata) {
    var _a, _b;
    var connectorName = String((_b = (_a = metadata.frontMatter.tutorial_name) !== null && _a !== void 0 ? _a : metadata.frontMatter.sidebar_label) !== null && _b !== void 0 ? _b : '');
    return connectorName
        .toLowerCase()
        .split(/[^\da-z-]/gi) // Remove non-alphanumeric characters
        .filter(Boolean)
        .join('-');
};
exports.getConnectorPath = getConnectorPath;
