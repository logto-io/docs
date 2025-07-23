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
exports.default = DocSidebarItemCategory;
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var theme_common_1 = require("@docusaurus/theme-common");
var internal_1 = require("@docusaurus/theme-common/internal");
var useIsBrowser_1 = require("@docusaurus/useIsBrowser");
var essentials_1 = require("@silverhand/essentials");
var DocSidebarItems_1 = require("@theme/DocSidebarItems");
var clsx_1 = require("clsx");
var react_1 = require("react");
var icons_1 = require("./icons");
var index_module_scss_1 = require("./index.module.scss");
// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(_a) {
    var isActive = _a.isActive, collapsed = _a.collapsed, updateCollapsed = _a.updateCollapsed;
    var wasActive = (0, theme_common_1.usePrevious)(isActive);
    (0, react_1.useEffect)(function () {
        var justBecameActive = isActive && !wasActive;
        if (justBecameActive && collapsed) {
            updateCollapsed(false);
        }
    }, [isActive, wasActive, collapsed, updateCollapsed]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item) {
    var isBrowser = (0, useIsBrowser_1.default)();
    return (0, react_1.useMemo)(function () {
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return;
        }
        return (0, client_1.findFirstSidebarItemLink)(item);
    }, [item, isBrowser]);
}
function CollapseButton(_a) {
    var collapsed = _a.collapsed, categoryLabel = _a.categoryLabel, onClick = _a.onClick;
    return (<button aria-label={collapsed
            ? (0, Translate_1.translate)({
                id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
                message: "Expand sidebar category '{label}'",
                description: 'The ARIA label to expand the sidebar category',
            }, { label: categoryLabel })
            : (0, Translate_1.translate)({
                id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
                message: "Collapse sidebar category '{label}'",
                description: 'The ARIA label to collapse the sidebar category',
            }, { label: categoryLabel })} aria-expanded={!collapsed} type="button" className="clean-btn menu__caret" onClick={onClick}/>);
}
function DocSidebarItemCategory(_a) {
    var item = _a.item, onItemClick = _a.onItemClick, activePath = _a.activePath, level = _a.level, index = _a.index, props = __rest(_a, ["item", "onItemClick", "activePath", "level", "index"]);
    var items = item.items, label = item.label, collapsible = item.collapsible, className = item.className, href = item.href, customProps = item.customProps;
    var Icon = (0, essentials_1.cond)(typeof (customProps === null || customProps === void 0 ? void 0 : customProps.id) === 'string' && icons_1.default[customProps.id]);
    var sublistLabel = (0, essentials_1.condString)(customProps === null || customProps === void 0 ? void 0 : customProps.sublist_label);
    var autoCollapseCategories = (0, theme_common_1.useThemeConfig)().docs.sidebar.autoCollapseCategories;
    var hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    var isActive = (0, client_1.isActiveSidebarItem)(item, activePath);
    var isCurrentPage = (0, internal_1.isSamePath)(href, activePath);
    var _b = (0, theme_common_1.useCollapsible)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: function () {
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        },
    }), collapsed = _b.collapsed, setCollapsed = _b.setCollapsed;
    var _c = (0, client_1.useDocSidebarItemsExpandedState)(), expandedItem = _c.expandedItem, setExpandedItem = _c.setExpandedItem;
    // Use this instead of `setCollapsed`, because it is also reactive
    var updateCollapsed = function (toCollapsed) {
        if (toCollapsed === void 0) { toCollapsed = !collapsed; }
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({ isActive: isActive, collapsed: collapsed, updateCollapsed: updateCollapsed });
    (0, react_1.useEffect)(function () {
        if (collapsible && expandedItem !== null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
    return (<>
      {sublistLabel && (<li className={(0, clsx_1.default)('menu__list-item', index_module_scss_1.default.sublistLabel)}>
          <span>{sublistLabel}</span>
          <div className={index_module_scss_1.default.divider}/>
        </li>)}
      <li className={(0, clsx_1.default)(theme_common_1.ThemeClassNames.docs.docSidebarItemCategory, theme_common_1.ThemeClassNames.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed,
        }, className)}>
        <div className={(0, clsx_1.default)('menu__list-item-collapsible', {
            'menu__list-item-collapsible--active': isCurrentPage,
        })}>
          <Link_1.default className={(0, clsx_1.default)('menu__link', {
            'menu__link--sublist': collapsible,
            // @charles modified this:
            // 'menu__link--sublist-caret': !href && collapsible,
            'menu__link--active': isActive,
        })} aria-current={isCurrentPage ? 'page' : undefined} role={collapsible && !href ? 'button' : undefined} aria-expanded={collapsible && !href ? !collapsed : undefined} href={collapsible ? (hrefWithSSRFallback !== null && hrefWithSSRFallback !== void 0 ? hrefWithSSRFallback : '#') : hrefWithSSRFallback} onClick={collapsible
            ? function (event) {
                onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                if (href) {
                    updateCollapsed(false);
                }
                else {
                    event.preventDefault();
                    updateCollapsed();
                }
            }
            : function () {
                onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
            }} {...props}>
            {/** @charles added category icon support */}
            {Icon && <Icon className={index_module_scss_1.default.icon}/>}
            {label}
          </Link_1.default>
          {/* @charles modified this: */}
          {/* {href && collapsible && ( */}
          {collapsible && (<CollapseButton collapsed={collapsed} categoryLabel={label} onClick={function (event) {
                event.preventDefault();
                updateCollapsed();
            }}/>)}
        </div>

        <theme_common_1.Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
          <DocSidebarItems_1.default items={items.filter(function (item) { return 'href' in item && item.href !== href; })} tabIndex={collapsed ? -1 : 0} activePath={activePath} level={level + 1} onItemClick={onItemClick}/>
        </theme_common_1.Collapsible>
      </li>
    </>);
}
