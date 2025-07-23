"use strict";
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
var config_conventional_1 = require("@commitlint/config-conventional");
var configs = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', __spreadArray(__spreadArray([], config_conventional_1.default.rules['type-enum'][2], true), ['blog'], false)],
    },
};
exports.default = configs;
