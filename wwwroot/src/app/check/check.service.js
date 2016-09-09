"use strict";
var core_1 = require('@angular/core');
var check_model_1 = require('./check.model');
var CheckService = (function () {
    function CheckService() {
    }
    CheckService.prototype.getCheck = function (bankNumber, checkNumber) {
        //values here should come from the json web api
        if (!checkNumber)
            return Promise.resolve(null);
        var jsonString = "{\"bankNumber\": \"" + bankNumber + "\", \n                            \"checkNumber\": \"" + checkNumber + "\", \n                            \"vendor\": { \n                                \"name\": \"XYZ Trans, LLC\"\n                            },\n                            \"issued\": \"10/26/2004\",\n                            \"status\": \"voided\",\n                            \"transactionCode\": \"264\",\n                            \"postDate\": \"2015\",\n                            \"documentNumber\": \"ZU150579673\",\n                            \"documentSuffix\": \"02\",\n                            \"fiscalPeriodMonth\": \"13\",\n                            \"fiscalPeriodYear\": \"2015\",\n                            \"description\": \"-\",\n                            \"amount\": -5397.00\n                          }";
        return Promise.resolve(new check_model_1.CheckModel(jsonString));
    };
    CheckService.prototype.page = function (direction, bankNumber, checkNumber) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new check_model_1.CheckModel(this._getPrevFrom(bankNumber, checkNumber)));
        }
        if (direction == 1) {
            //page right
            return Promise.resolve(new check_model_1.CheckModel(this._getNextFrom(bankNumber, checkNumber)));
        }
    };
    CheckService.prototype._getNextFrom = function (bankNumber, checkNumber) {
        var jsonString = "{\n                    \"bankNumber\": " + bankNumber + ",\n                    \"checkNumber\": \"" + 'next' + "\"}";
        return jsonString;
    };
    CheckService.prototype._getPrevFrom = function (bankNumber, checkNumber) {
        var jsonString = "{\n                    \"bankNumber\": " + bankNumber + ",\n                    \"checkNumber\": \"" + 'prev' + "\"}";
        return jsonString;
    };
    CheckService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CheckService);
    return CheckService;
}());
exports.CheckService = CheckService;
//# sourceMappingURL=check.service.js.map