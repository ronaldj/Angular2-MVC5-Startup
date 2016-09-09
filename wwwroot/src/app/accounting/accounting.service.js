"use strict";
var core_1 = require('@angular/core');
var AccountingService = (function () {
    function AccountingService() {
    }
    AccountingService.prototype.getFiscalYears = function () {
        //values here should come from the json web api
        var obj = "[2014,2015,2016]";
        var d = JSON.parse(obj);
        var fiscalYears = d;
        return Promise.resolve(fiscalYears);
    };
    AccountingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AccountingService);
    return AccountingService;
}());
exports.AccountingService = AccountingService;
//# sourceMappingURL=accounting.service.js.map