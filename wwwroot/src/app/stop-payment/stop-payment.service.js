"use strict";
var core_1 = require('@angular/core');
var stop_payment_model_1 = require('./stop-payment.model');
var StopPaymentService = (function () {
    function StopPaymentService() {
    }
    StopPaymentService.prototype.getStopPayment = function (documentNumber, checkNumber) {
        //values here should come from the json web api
        if (!documentNumber)
            return Promise.resolve(null);
        var jsonString = "{\"documentNumber\": \"" + documentNumber + "\", \n                            \"checkNumber\": \"" + checkNumber + "\",\n                            \"vendor\": { \n                                \"vendorNumber\": \"XYZ00001\",\n                                \"suffix\": \"01\",\n                                \"name\": \"XYZ Corp\",\n                                \"voucher\": \"WV0000001\",\n                                \"voucherSuffix\": \"01\",\n                                \"created\": \"05/31/2016\",\n                                \"check\": \"500001\",\n                                \"bank\": \"AB001\",\n                                \"posted\": \"05/31/2016\",\n                                \"cleared\": \"N/A\",\n                                \"amount\": 2600.00\n                            }\n                          }";
        return Promise.resolve(new stop_payment_model_1.StopPaymentModel(jsonString));
    };
    StopPaymentService.prototype.submit = function (model) {
        //console.log('Submitted stop payment w/ ' + model.stopPaymentOption);
    };
    StopPaymentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StopPaymentService);
    return StopPaymentService;
}());
exports.StopPaymentService = StopPaymentService;
//# sourceMappingURL=stop-payment.service.js.map