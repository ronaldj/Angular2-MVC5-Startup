"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
var tab_service_1 = require('./app/tab/tab.service');
require('./style/app.css');
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule, [tab_service_1.TabService])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map