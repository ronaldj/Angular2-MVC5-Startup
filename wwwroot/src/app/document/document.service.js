"use strict";
var core_1 = require('@angular/core');
var document_model_1 = require('./document.model');
var DocumentService = (function () {
    function DocumentService() {
    }
    DocumentService.prototype.getDocument = function (number, suffix) {
        //values here should come from the json web api
        if (!number)
            return Promise.resolve(null);
        var jsonString = "{\n                    \"fiscalYear\": 2016,\n                    \"documentNumber\": \"" + number + "\",\n                    \"documentSuffix\": \"" + suffix + "\",\n\n                    \"description\": \"9571736\",\n                    \"startDate\": \"07/01/2014\",\n                    \"endDate\": \"06/30/2016\",\n                    \"transactionCode\": \"302\",\n                    \"UOA\": \"402\",\n\n                    \"locationCode\": \"M001\",\n                    \"quickCode\": \"01001234\",\n                    \"objectCode\": \"0000\",\n                    \"activityCode\": \"0000\",\n\n                    \"vendorNumber\": \"ABC123000\",\n                    \"vendorSuffix\": \"01\",\n                    \"vendorName\": \"XYZ Communications, Inc\",\n                    \"thirdPartyVendor\": \"N/A\",\n                    \"contractNumber\": \"9500000\",\n                    \"invoiceNumber\": \"58168462\",\n                    \"invoiceDate\": \"N/A\",\n\n                    \"checkNumber\": \"9571736\",\n                    \"bankNumber\": \"EF001\",\n                    \"singleCheckPayment\": \"N/A\",\n                    \"holdCheckIndicator\": \"N/A\",\n\n                    \"originalAmount\": 2200.00,\n                    \"adjustmentAmount\": -2.34,\n                    \"liquidationAmount\": -2197.66,\n                    \"balanceAmount\": 0.00,\n                    \"paymentAmount\": 2197.66,\n                    \"certifiedAmount\": 5397.00\n                }";
        return Promise.resolve(new document_model_1.DocumentModel(jsonString));
    };
    DocumentService.prototype.page = function (direction, number, suffix) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new document_model_1.DocumentModel(this._getPrevFrom(number, suffix)));
        }
        if (direction == 1) {
            //page right
            return Promise.resolve(new document_model_1.DocumentModel(this._getNextFrom(number, suffix)));
        }
    };
    DocumentService.prototype._getNextFrom = function (number, suffix) {
        var jsonString = "{\n                \"fiscalYear\": 2016,\n                \"documentNumber\": \"" + 'next' + "\",\n                \"documentSuffix\": \"" + 'next' + "\",\n                \"vendor\": { \"contractNumber\": 9500000, \n                            \"invoiceNumber\": 58168462 }\n                }";
        return jsonString;
    };
    DocumentService.prototype._getPrevFrom = function (number, suffix) {
        var jsonString = "{\n                \"fiscalYear\": 2016,\n                \"documentNumber\": \"" + 'prev' + "\",\n                \"documentSuffix\": \"" + 'prev' + "\",\n                \"vendor\": { \"contractNumber\": 9500000, \n                            \"invoiceNumber\": 58168462 }\n                }";
        return jsonString;
    };
    DocumentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DocumentService);
    return DocumentService;
}());
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map