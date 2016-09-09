"use strict";
var StopPaymentModel = (function () {
    function StopPaymentModel(obj) {
        if (obj) {
            if (obj.constructor === String) {
                var d = JSON.parse(obj);
                if (d) {
                    //do web api json to model mapping here
                    this.documentNumber = d.documentNumber;
                    this.checkNumber = d.checkNumber;
                }
            }
            else {
                this.documentNumber = obj.documentNumber;
                this.checkNumber = obj.checkNumber;
            }
        }
    }
    return StopPaymentModel;
}());
exports.StopPaymentModel = StopPaymentModel;
(function (StopPaymentOption) {
    StopPaymentOption[StopPaymentOption["StopPaymentOnly"] = 0] = "StopPaymentOnly";
    StopPaymentOption[StopPaymentOption["StopAndReissuePaymentToOriginalAddress"] = 1] = "StopAndReissuePaymentToOriginalAddress";
    StopPaymentOption[StopPaymentOption["StopAndReissuePaymentToNewAddress"] = 2] = "StopAndReissuePaymentToNewAddress";
})(exports.StopPaymentOption || (exports.StopPaymentOption = {}));
var StopPaymentOption = exports.StopPaymentOption;
//# sourceMappingURL=stop-payment.model.js.map