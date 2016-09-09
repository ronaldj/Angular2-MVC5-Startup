"use strict";
var core_1 = require('@angular/core');
var contract_model_1 = require('./contract.model');
var ContractService = (function () {
    function ContractService() {
    }
    ContractService.prototype.getContract = function (fiscalYear, contractNumber) {
        //values here should come from the json web api
        if (!contractNumber)
            return Promise.resolve(null);
        var jsonString = "{\"fiscalYear\": " + fiscalYear + ", \n                            \"contractNumber\": \"" + contractNumber + "\",\n                            \"description\": \"Contract description goes here\",\n                            \"contractPeriodStart\": \"07/01/2014\",\n                            \"contractPeriodEnd\": \"06/30/2016\",\n                            \"estimatedAmount\": 100000.00,\n                            \"cityContractNumber\": \"0000001\",\n                            \"district\": \"65\",\n                            \"contractType\": \"Estimate / Professional Services\",\n                            \"vendor\": {\n                                        \"vendorNumber\": \"XYZ000001\",\n                                        \"vendorSuffix\": \"01\",\n                                        \"name\": \"XYZ Corp\" \n                                      },\n                            \"accounting\": [\n                                {\n                                  \"documentNumber\": \"WR16000001\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                },\n                                {\n                                  \"documentNumber\": \"WR16000002\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                }\n                            ],\n                            \"notepad\": \"some text\"\n                        }";
        return Promise.resolve(new contract_model_1.ContractModel(jsonString));
    };
    ContractService.prototype.page = function (direction, fiscalYear, contractNumber) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new contract_model_1.ContractModel(this._getPrevFrom(fiscalYear, contractNumber)));
        }
        if (direction == 1) {
            //page right
            return Promise.resolve(new contract_model_1.ContractModel(this._getNextFrom(fiscalYear, contractNumber)));
        }
    };
    ContractService.prototype._getNextFrom = function (fiscalYear, contractNumber) {
        var jsonString = "{\"fiscalYear\": " + fiscalYear + ", \n                            \"contractNumber\": \"" + 'next' + "\",\n                            \"description\": \"Contract description goes here\",\n                            \"contractPeriodStart\": \"07/01/2014\",\n                            \"contractPeriodEnd\": \"06/30/2016\",\n                            \"estimatedAmount\": 100000.00,\n                            \"cityContractNumber\": \"0000001\",\n                            \"district\": \"65\",\n                            \"contractType\": \"Estimate / Professional Services\",\n                            \"vendor\": {\n                                        \"vendorNumber\": \"XYZ000001\",\n                                        \"vendorSuffix\": \"01\",\n                                        \"name\": \"XYZ Corp\" \n                                      },\n                            \"accounting\": [\n                                {\n                                  \"documentNumber\": \"WR16000001\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                },\n                                {\n                                  \"documentNumber\": \"WR16000002\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                }\n                            ],\n                            \"notepad\": \"some text\"\n                        }";
        return jsonString;
    };
    ContractService.prototype._getPrevFrom = function (fiscalYear, contractNumber) {
        var jsonString = "{\"fiscalYear\": " + fiscalYear + ", \n                            \"contractNumber\": \"" + 'prev' + "\",\n                            \"description\": \"Contract description goes here\",\n                            \"contractPeriodStart\": \"07/01/2014\",\n                            \"contractPeriodEnd\": \"06/30/2016\",\n                            \"estimatedAmount\": 100000.00,\n                            \"cityContractNumber\": \"0000001\",\n                            \"district\": \"65\",\n                            \"contractType\": \"Estimate / Professional Services\",\n                            \"vendor\": {\n                                        \"vendorNumber\": \"XYZ000001\",\n                                        \"vendorSuffix\": \"01\",\n                                        \"name\": \"XYZ Corp\" \n                                      },\n                            \"accounting\": [\n                                {\n                                  \"documentNumber\": \"WR16000001\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                },\n                                {\n                                  \"documentNumber\": \"WR16000002\",\n                                  \"documentSuffix\": \"01\",\n                                  \"originalAmount\": 1270.00,\n                                  \"adjustmentAmount\": 0.00,\n                                  \"paymentAmount\": 1270.00,\n                                  \"balanceAmount\": 0.00\n                                }\n                            ],\n                            \"notepad\": \"some text\"\n                        }";
        return jsonString;
    };
    ContractService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContractService);
    return ContractService;
}());
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map