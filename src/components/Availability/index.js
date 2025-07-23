"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_module_scss_1 = require("./index.module.scss");
var getDisplayText = function (status) {
    if (status === 'comingSoon') {
        return 'coming soon-blue';
    }
    if (typeof status === 'boolean') {
        return status ? '✓ available-4EA254' : 'not applicable-78767F';
    }
    return "since v".concat(status.major, ".").concat(status.minor, "-4EA254");
};
/**
 * A component that shows the availability of the feature in Logto Cloud and Logto OSS.
 * Open source availability can have a version number.
 */
var Availability = function (_a) {
    var cloud = _a.cloud, oss = _a.oss;
    return (<div className={index_module_scss_1.default.availability}>
      <img alt="Cloud availability" src={"https://img.shields.io/badge/Cloud-".concat(getDisplayText(cloud))}/>
      <img alt="OSS availability" src={"https://img.shields.io/badge/OSS-".concat(getDisplayText(oss))}/>
    </div>);
};
exports.default = Availability;
