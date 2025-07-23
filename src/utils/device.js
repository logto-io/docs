"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAppleDevice = void 0;
var isAppleDevice = function () { return /Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent); };
exports.isAppleDevice = isAppleDevice;
