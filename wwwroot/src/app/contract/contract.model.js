"use strict";
var vendor_model_1 = require('../vendor/vendor.model');
var accounting_model_1 = require('../accounting/accounting.model');
var ContractModel = (function () {
    function ContractModel(obj) {
        if (obj) {
            if (obj.constructor === String) {
                var d = JSON.parse(obj);
                if (d) {
                    //do web api json to model mapping here
                    this.fiscalYear = d.fiscalYear;
                    this.contractNumber = d.contractNumber;
                    this.description = d.description;
                    this.contractPeriodStart = d.contractPeriodStart;
                    this.contractPeriodEnd = d.contractPeriodEnd;
                    this.estimatedAmount = d.estimatedAmount;
                    this.vendor = new vendor_model_1.VendorModel();
                    this.vendor.vendorNumber = d.vendor.vendorNumber;
                    this.vendor.vendorSuffix = d.vendor.vendorSuffix;
                    this.vendor.name = d.vendor.name;
                    this.accounting = new Array();
                    for (var i = 0; i < d.accounting.length; i++) {
                        var entry = d.accounting[i];
                        var accountingModel = new accounting_model_1.AccountingModel();
                        accountingModel.documentNumber = entry.documentNumber;
                        accountingModel.documentSuffix = entry.documentSuffix;
                        accountingModel.originalAmount = entry.originalAmount;
                        accountingModel.adjustmentAmount = entry.adjustmentAmount;
                        accountingModel.paymentAmount = entry.paymentAmount;
                        accountingModel.balanceAmount = entry.balanceAmount;
                        this.accounting.push(accountingModel);
                    }
                    this.notepad = d.notepad;
                }
            }
        }
    }
    return ContractModel;
}());
exports.ContractModel = ContractModel;
//# sourceMappingURL=contract.model.js.map