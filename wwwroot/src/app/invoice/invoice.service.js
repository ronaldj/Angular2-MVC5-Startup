"use strict";
var core_1 = require('@angular/core');
var invoice_model_1 = require('./invoice.model');
var InvoiceService = (function () {
    function InvoiceService() {
    }
    InvoiceService.prototype.getInvoice = function (invoiceNumber) {
        //values here should come from the json web api
        if (!invoiceNumber)
            return Promise.resolve(null);
        var jsonString = "{\"invoiceNumber\": " + invoiceNumber + ", \n                            \"vendor\": { \n                                \"vendorNumber\": \"XYZ00001\",\n                                \"suffix\": \"01\",\n                                \"name\": \"XYZ Corp\",\n                                \"voucher\": \"WV0000001\",\n                                \"voucherSuffix\": \"01\",\n                                \"created\": \"05/31/2016\",\n                                \"check\": \"500001\",\n                                \"bank\": \"AB001\",\n                                \"posted\": \"05/31/2016\",\n                                \"cleared\": \"N/A\",\n                                \"amount\": 2600.00\n                            }\n                          }";
        return Promise.resolve(new invoice_model_1.InvoiceModel(jsonString));
    };
    InvoiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InvoiceService);
    return InvoiceService;
}());
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map