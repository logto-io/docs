"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@docusaurus/plugin-content-docs/client");
var DocCard_1 = require("@site/src/theme/DocCard");
var index_module_scss_1 = require("./index.module.scss");
/**
 * Render a mini gallery of items from the current sidebar category.
 * This component should be only used on category index pages.
 */
var MiniGallery = function () {
    var category = (0, client_1.useCurrentSidebarCategory)();
    return (<section className={index_module_scss_1.default.miniGallery}>
      {category.items.map(function (item) {
            if (item.type !== 'link') {
                return null;
            }
            if (item.unlisted) {
                return null;
            }
            return <DocCard_1.CardLayout key={item.href} title={item.label} href={item.href}/>;
        })}
    </section>);
};
exports.default = MiniGallery;
