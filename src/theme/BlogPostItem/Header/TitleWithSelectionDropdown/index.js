"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Translate_1 = require("@docusaurus/Translate");
var router_1 = require("@docusaurus/router");
var essentials_1 = require("@silverhand/essentials");
var clsx_1 = require("clsx");
var react_1 = require("react");
var use_categorized_tutorial_metadata_1 = require("@site/src/hooks/use-categorized-tutorial-metadata");
var useCurrentLocalePrefix_1 = require("@site/src/hooks/useCurrentLocalePrefix");
var a11y_1 = require("@site/src/utils/a11y");
var tutorial_1 = require("@site/src/utils/tutorial");
var utils_1 = require("../../utils");
var SelectionDropdown_1 = require("../SelectionDropdown");
var index_module_scss_1 = require("./index.module.scss");
var slugFirstPart = 'build-';
var slugMiddlePart = '-sign-in-with';
var slugLastPart = '-and-logto';
/* eslint-disable no-template-curly-in-string */
var sdkTemplateSlot = '${sdk}';
var connectorTemplateSlot = '${connector}';
/* eslint-enable no-template-curly-in-string */
/**
 * Escape potential parentheses and dollar signs in the SDK / connector name.
 * The result will be used for the regex that splits the title into parts.
 */
var normalizeName = function (name) {
    return name.replaceAll('(', '\\(').replaceAll(')', '\\)').replaceAll('$', '\\$');
};
var TitleWithSelectionDropdown = function (props) {
    var _a, _b;
    var _c, _d, _e;
    var isBlogPost = 'metadata' in props;
    var onSelectSdk = props.onSelectSdk, onSelectConnector = props.onSelectConnector;
    var listViewProps = (0, essentials_1.conditional)(!isBlogPost && props);
    var blogPostProps = (0, essentials_1.conditional)(isBlogPost && props);
    var push = (0, router_1.useHistory)().push;
    var locale = (0, useCurrentLocalePrefix_1.useCurrentLocalePrefix)();
    var sdkNameRef = (0, react_1.useRef)(null);
    var connectorNameRef = (0, react_1.useRef)(null);
    var allTutorialsMetadata = (0, use_categorized_tutorial_metadata_1.default)();
    var _f = (0, react_1.useState)(), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    var defaultSdk = (0, react_1.useMemo)(function () {
        if (isBlogPost || !(listViewProps === null || listViewProps === void 0 ? void 0 : listViewProps.defaultSdkSlugPart)) {
            return;
        }
        return allTutorialsMetadata.allSdks.find(function (data) { return (0, tutorial_1.getSdkPath)(data) === listViewProps.defaultSdkSlugPart; });
    }, [isBlogPost, listViewProps === null || listViewProps === void 0 ? void 0 : listViewProps.defaultSdkSlugPart, allTutorialsMetadata.allSdks]);
    var defaultConnector = (0, react_1.useMemo)(function () {
        if (isBlogPost || !(listViewProps === null || listViewProps === void 0 ? void 0 : listViewProps.defaultConnectorSlugPart)) {
            return;
        }
        return allTutorialsMetadata.allConnectors.find(function (data) { return (0, tutorial_1.getConnectorPath)(data) === listViewProps.defaultConnectorSlugPart; });
    }, [isBlogPost, listViewProps === null || listViewProps === void 0 ? void 0 : listViewProps.defaultConnectorSlugPart, allTutorialsMetadata.allConnectors]);
    var sdkName = isBlogPost
        ? String((_c = blogPostProps === null || blogPostProps === void 0 ? void 0 : blogPostProps.metadata.frontMatter.sdk) !== null && _c !== void 0 ? _c : '')
        : (0, tutorial_1.getSdkDisplayName)(defaultSdk);
    var connectorName = isBlogPost
        ? String((_d = blogPostProps === null || blogPostProps === void 0 ? void 0 : blogPostProps.metadata.frontMatter.connector) !== null && _d !== void 0 ? _d : '')
        : (0, tutorial_1.getConnectorDisplayName)(defaultConnector);
    if (blogPostProps && (!sdkName || !connectorName)) {
        return blogPostProps.metadata.title;
    }
    var listViewTitle = (0, Translate_1.translate)({
        id: 'theme.blog.tutorial.title',
        message: "Build ".concat(connectorTemplateSlot, " sign-in with ").concat(sdkTemplateSlot),
    })
        .replace(sdkTemplateSlot, sdkName || sdkTemplateSlot)
        .replace(connectorTemplateSlot, connectorName || connectorTemplateSlot);
    var normalizedTitle = (_e = blogPostProps === null || blogPostProps === void 0 ? void 0 : blogPostProps.metadata.title) !== null && _e !== void 0 ? _e : listViewTitle;
    var titleParts = normalizedTitle
        .split(new RegExp("(".concat(normalizeName(connectorName || connectorTemplateSlot), "|").concat(normalizeName(sdkName || sdkTemplateSlot), ")"), 'g'))
        .filter(Boolean);
    var showDropdown = function (type) {
        setIsDropdownOpen(type);
    };
    var onSelectDropdown = function (option) {
        var _a;
        var type = option.type, displayName = option.displayName, metadata = option.metadata;
        var onSelectFn = type === 'sdk' ? onSelectSdk : onSelectConnector;
        var getPathFn = type === 'sdk' ? tutorial_1.getSdkPath : tutorial_1.getConnectorPath;
        var elementRef = type === 'sdk' ? sdkNameRef : connectorNameRef;
        onSelectFn === null || onSelectFn === void 0 ? void 0 : onSelectFn(metadata);
        setIsDropdownOpen(undefined);
        if (elementRef.current) {
            // eslint-disable-next-line @silverhand/fp/no-mutation
            elementRef.current.textContent = displayName;
        }
        if (isBlogPost) {
            var slug = (_a = blogPostProps === null || blogPostProps === void 0 ? void 0 : blogPostProps.metadata.frontMatter.slug) !== null && _a !== void 0 ? _a : '';
            var selectedSlugPart = getPathFn(metadata);
            var targetSlug = type === 'sdk'
                ? slug.slice(0, Math.max(0, slug.indexOf(slugMiddlePart) + slugMiddlePart.length + 1)) +
                    selectedSlugPart +
                    slugLastPart
                : slugFirstPart + selectedSlugPart + slug.slice(slug.indexOf(slugMiddlePart));
            push("".concat(locale, "/").concat(utils_1.howToBasePath, "/").concat(targetSlug));
        }
    };
    return (<>
      {titleParts.map(function (part) {
            if (part === sdkName || part === sdkTemplateSlot) {
                return (<span ref={sdkNameRef} key={sdkName || sdkTemplateSlot} tabIndex={0} role="button" className={(0, clsx_1.clsx)(index_module_scss_1.default.dropdownAnchor, isDropdownOpen === 'sdk' && index_module_scss_1.default.active)} onClick={function () {
                        showDropdown('sdk');
                    }} onKeyDown={(0, a11y_1.onKeyDownHandler)(function () {
                        showDropdown('sdk');
                    })}>
              {part === sdkTemplateSlot ? (<span className={index_module_scss_1.default.placeholder}>
                  <Translate_1.default id="theme.common.sdk.placeholder">your SDK</Translate_1.default>
                </span>) : (part)}
            </span>);
            }
            if (part === connectorName || part === connectorTemplateSlot) {
                return (<span ref={connectorNameRef} key={connectorName || connectorTemplateSlot} tabIndex={0} role="button" className={(0, clsx_1.clsx)(index_module_scss_1.default.dropdownAnchor, isDropdownOpen === 'connector' && index_module_scss_1.default.active)} onClick={function () {
                        showDropdown('connector');
                    }} onKeyDown={(0, a11y_1.onKeyDownHandler)(function () {
                        showDropdown('connector');
                    })}>
              {part === connectorTemplateSlot ? (<span className={index_module_scss_1.default.placeholder}>
                  <Translate_1.default id="theme.common.connector.placeholder">your provider</Translate_1.default>
                </span>) : (part)}
            </span>);
            }
            return part;
        })}
      <SelectionDropdown_1.default anchorRef={sdkNameRef} isOpen={isDropdownOpen === 'sdk'} options={_a = {},
            _a[(0, Translate_1.translate)({ id: 'theme.common.sdk.native', message: 'Native' })] = allTutorialsMetadata.nativeSdks,
            _a[(0, Translate_1.translate)({ id: 'theme.common.sdk.spa', message: 'Single page' })] = allTutorialsMetadata.spaSdks,
            _a[(0, Translate_1.translate)({ id: 'theme.common.sdk.traditional', message: 'Traditional Web' })] = allTutorialsMetadata.traditionalSdks,
            _a} onSelect={function (_a) {
            var displayName = _a.displayName, sdkMetadata = _a.metadata;
            onSelectDropdown({ type: 'sdk', displayName: displayName, metadata: sdkMetadata });
        }} onClose={function () {
            setIsDropdownOpen(undefined);
        }} onReset={(0, essentials_1.cond)(!isBlogPost &&
            (function () {
                onSelectSdk === null || onSelectSdk === void 0 ? void 0 : onSelectSdk(undefined);
                setIsDropdownOpen(undefined);
            }))}/>
      <SelectionDropdown_1.default anchorRef={connectorNameRef} isOpen={isDropdownOpen === 'connector'} options={_b = {},
            _b[(0, Translate_1.translate)({ id: 'theme.common.connector.sso', message: 'Enterprise SSO providers' })] = allTutorialsMetadata.ssoConnectors,
            _b[(0, Translate_1.translate)({ id: 'theme.common.connector.social', message: 'Social providers' })] = allTutorialsMetadata.socialConnectors,
            _b[(0, Translate_1.translate)({ id: 'theme.common.connector.email', message: 'Email providers' })] = allTutorialsMetadata.emailConnectors,
            _b[(0, Translate_1.translate)({ id: 'theme.common.connector.sms', message: 'SMS providers' })] = allTutorialsMetadata.smsConnectors,
            _b} onSelect={function (_a) {
            var displayName = _a.displayName, connectorMetadata = _a.metadata;
            onSelectDropdown({ type: 'connector', displayName: displayName, metadata: connectorMetadata });
        }} onClose={function () {
            setIsDropdownOpen(undefined);
        }} onReset={(0, essentials_1.cond)(!isBlogPost &&
            (function () {
                onSelectConnector === null || onSelectConnector === void 0 ? void 0 : onSelectConnector(undefined);
                setIsDropdownOpen(undefined);
            }))}/>
    </>);
};
exports.default = TitleWithSelectionDropdown;
