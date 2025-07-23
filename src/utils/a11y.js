"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onKeyDownHandler = void 0;
var onKeyDownHandler = function (callback) {
    return function (event) {
        var _a;
        var key = event.key;
        if (typeof callback === 'function' && [' ', 'Enter'].includes(key)) {
            callback(event);
            event.preventDefault();
        }
        if (typeof callback === 'object') {
            (_a = callback[key]) === null || _a === void 0 ? void 0 : _a.call(callback, event);
            event.preventDefault();
        }
    };
};
exports.onKeyDownHandler = onKeyDownHandler;
