"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.howToBasePath = exports.isHowToTutorial = void 0;
var isHowToTutorial = function (slug) { return /^build-.+-with-.+$/.test(slug || ''); };
exports.isHowToTutorial = isHowToTutorial;
exports.howToBasePath = 'how-to';
