"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLayout = CardLayout;
exports.default = DocCard;
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var isInternalUrl_1 = require("@docusaurus/isInternalUrl");
var client_1 = require("@docusaurus/plugin-content-docs/client");
var theme_common_1 = require("@docusaurus/theme-common");
var clsx_1 = require("clsx");
var styles_module_scss_1 = require("./styles.module.scss");
function useCategoryItemsPlural() {
    var selectMessage = (0, theme_common_1.usePluralForm)().selectMessage;
    return function (count) {
        return selectMessage(count, (0, Translate_1.translate)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes',
        }, { count: count }));
    };
}
function CardContainer(_a) {
    var href = _a.href, children = _a.children;
    return (<Link_1.default href={href} className={(0, clsx_1.default)('card padding--lg', styles_module_scss_1.default.cardContainer)}>
      {children}
    </Link_1.default>);
}
function CardLayout(_a) {
    var href = _a.href, icon = _a.icon, title = _a.title, description = _a.description;
    return (<CardContainer href={href}>
      {icon}
      <label className={styles_module_scss_1.default.cardTitle} title={title}>
        {title}
      </label>
      {description && (<p className={styles_module_scss_1.default.cardDescription} title={description}>
          {description}
        </p>)}
    </CardContainer>);
}
function CardCategory(_a) {
    var _b;
    var item = _a.item;
    var href = (0, client_1.findFirstSidebarItemLink)(item);
    var categoryItemsPlural = useCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return (<CardLayout href={href} icon="🗃️" title={item.label} description={(_b = item.description) !== null && _b !== void 0 ? _b : categoryItemsPlural(item.items.length)}/>);
}
function CardLink(_a) {
    var _b, _c, _d, _e;
    var item = _a.item;
    var icon = (0, isInternalUrl_1.default)(item.href) ? '📄️' : '🔗';
    var doc = (0, client_1.useDocById)((_b = item.docId) !== null && _b !== void 0 ? _b : undefined);
    return (<CardLayout href={item.href} icon={(_d = (_c = item.customProps) === null || _c === void 0 ? void 0 : _c.icon) !== null && _d !== void 0 ? _d : icon} title={item.label} description={(_e = item.description) !== null && _e !== void 0 ? _e : doc === null || doc === void 0 ? void 0 : doc.description}/>);
}
function DocCard(_a) {
    var item = _a.item;
    switch (item.type) {
        case 'link': {
            return <CardLink item={item}/>;
        }
        case 'category': {
            return <CardCategory item={item}/>;
        }
        default: {
            throw new Error("unknown item type ".concat(JSON.stringify(item)));
        }
    }
}
