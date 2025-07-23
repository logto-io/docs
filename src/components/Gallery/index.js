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
var client_1 = require("@docusaurus/plugin-content-docs/client");
var ThemedImage_1 = require("@theme/ThemedImage");
var useCurrentLocalePrefix_1 = require("@site/src/hooks/useCurrentLocalePrefix");
var index_module_scss_1 = require("./index.module.scss");
var stringIfTruthy = function (value) { return (value ? String(value) : undefined); };
/**
 * A component that shows a gallery of guide items.
 *
 * Note: This component is only available in the "Quick starts" and "Integrations" tabs of the documentation.
 */
var Gallery = function (_a) {
    var path = _a.path;
    var prefix = (0, useCurrentLocalePrefix_1.useCurrentLocalePrefix)();
    var guideItemPath = prefix + "/".concat(path, "/");
    var sidebar = (0, client_1.useDocsSidebar)();
    if (!sidebar) {
        return null;
    }
    var sections = sidebar.items.reduce(function (data, item) {
        var _a, _b, _c, _d, _e, _f;
        if (item.type !== 'link') {
            return data;
        }
        if (item.unlisted || item.href === guideItemPath) {
            return data;
        }
        if (item.href === '#') {
            return __spreadArray(__spreadArray([], data, true), [
                {
                    label: item.label +
                        (((_a = item.customProps) === null || _a === void 0 ? void 0 : _a.additionalLabel)
                            ? " ".concat(String(item.customProps.additionalLabel))
                            : ''),
                    description: stringIfTruthy((_b = item.customProps) === null || _b === void 0 ? void 0 : _b.description),
                    items: [],
                },
            ], false);
        }
        if (!item.href.startsWith(guideItemPath)) {
            return data;
        }
        var lastCategory = data.at(-1);
        if (!lastCategory) {
            return data;
        }
        return __spreadArray(__spreadArray([], data.slice(0, -1), true), [
            __assign(__assign({}, lastCategory), { items: __spreadArray(__spreadArray([], lastCategory.items, true), [
                    {
                        label: item.label,
                        href: item.href,
                        logoFilename: (_d = stringIfTruthy((_c = item.customProps) === null || _c === void 0 ? void 0 : _c.logoFilename)) !== null && _d !== void 0 ? _d : "".concat(item.href.slice(guideItemPath.length), ".svg"),
                        darkLogoFilename: stringIfTruthy((_e = item.customProps) === null || _e === void 0 ? void 0 : _e.darkLogoFilename),
                        description: stringIfTruthy((_f = item.customProps) === null || _f === void 0 ? void 0 : _f.description),
                    },
                ], false) }),
        ], false);
    }, []);
    return (<section className={index_module_scss_1.default.gallery}>
      {sections.map(function (category) { return (<div key={category.label}>
          <h2 className={index_module_scss_1.default.categoryLabel}>{category.label}</h2>
          <section className={index_module_scss_1.default.list}>
            {category.items.map(function (item) {
                var _a;
                return (<a key={item.href} href={item.href} className={index_module_scss_1.default.link} title={item.description}>
                <ThemedImage_1.default className={index_module_scss_1.default.logo} alt="Logo" sources={{
                        light: "/img/logo/".concat(item.logoFilename),
                        dark: "/img/logo/".concat((_a = item.darkLogoFilename) !== null && _a !== void 0 ? _a : item.logoFilename),
                    }} onError={function (_a) {
                        var currentTarget = _a.currentTarget;
                        // eslint-disable-next-line @silverhand/fp/no-mutation
                        currentTarget.src = '/img/logo/broken-image.svg';
                    }}/>
                <span className={index_module_scss_1.default.title}>{item.label}</span>
                <span className={index_module_scss_1.default.subtitle}>{item.description}</span>
              </a>);
            })}
          </section>
        </div>); })}
    </section>);
};
exports.default = Gallery;
