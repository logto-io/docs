"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var authorization_svg_1 = require("@site/src/assets/authorization.svg");
var cloud_svg_1 = require("@site/src/assets/cloud.svg");
var concepts_svg_1 = require("@site/src/assets/concepts.svg");
var connectors_svg_1 = require("@site/src/assets/connectors.svg");
var customization_svg_1 = require("@site/src/assets/customization.svg");
var developer_svg_1 = require("@site/src/assets/developer.svg");
var integrate_svg_1 = require("@site/src/assets/integrate.svg");
var introduction_svg_1 = require("@site/src/assets/introduction.svg");
var open_source_svg_1 = require("@site/src/assets/open-source.svg");
var organization_svg_1 = require("@site/src/assets/organization.svg");
var security_svg_1 = require("@site/src/assets/security.svg");
var user_flows_svg_1 = require("@site/src/assets/user-flows.svg");
var user_management_svg_1 = require("@site/src/assets/user-management.svg");
/**
 * Category icons used in the sidebar.
 * The map key is the `customProps.id` of the category item.
 */
var icons = Object.freeze({
    introduction: introduction_svg_1.default,
    'integrate-logto': integrate_svg_1.default,
    'end-user-flows': user_flows_svg_1.default,
    connectors: connectors_svg_1.default,
    customization: customization_svg_1.default,
    authorization: authorization_svg_1.default,
    'user-management': user_management_svg_1.default,
    organizations: organization_svg_1.default,
    developers: developer_svg_1.default,
    'logto-cloud': cloud_svg_1.default,
    'logto-oss': open_source_svg_1.default,
    concepts: concepts_svg_1.default,
    security: security_svg_1.default,
});
exports.default = icons;
