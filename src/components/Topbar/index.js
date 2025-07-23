"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThemedImage_1 = require("@theme/ThemedImage");
var useCurrentLocalePrefix_1 = require("@site/src/hooks/useCurrentLocalePrefix");
var index_module_scss_1 = require("./index.module.scss");
var Topbar = function () {
    var prefix = (0, useCurrentLocalePrefix_1.useCurrentLocalePrefix)();
    return (<div className={index_module_scss_1.default.section}>
      <div className={index_module_scss_1.default.container}>
        <a href={new URL(prefix, 'https://logto.io').href}>
          <ThemedImage_1.default alt="Logto logo" sources={{
            light: '/img/logto.svg',
            dark: '/img/logto_dark.svg',
        }}/>
        </a>
      </div>
    </div>);
};
exports.default = Topbar;
