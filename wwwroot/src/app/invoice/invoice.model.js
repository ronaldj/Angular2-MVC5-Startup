"use strict";
var vendor_model_1 = require('../vendor/vendor.model');
var InvoiceModel = (function () {
    function InvoiceModel(obj) {
        if (obj) {
            if (obj.constructor === String) {
                var d = JSON.parse(obj);
                if (d) {
                    //do web api json to model mapping here
                    this.invoiceNumber = d.invoiceNumber;
                    this.vendor = new vendor_model_1.VendorModel();
                    this.vendor.vendorNumber = d.vendor.vendorNumber;
                    this.vendor.vendorSuffix = d.vendor.suffix;
                    this.vendor.name = d.vendor.name;
                    this.vendor.voucher = d.vendor.voucher;
                    this.vendor.voucherSuffix = d.vendor.voucherSuffix;
                    this.vendor.created = d.vendor.created;
                    this.vendor.check = d.vendor.check;
                    this.vendor.bank = d.vendor.bank;
                    this.vendor.posted = d.vendor.posted;
                    this.vendor.cleared = d.vendor.cleared;
                    this.vendor.amount = d.vendor.amount;
                }
            }
            else {
                this.invoiceNumber = obj.number;
            }
        }
    }
    return InvoiceModel;
}());
exports.InvoiceModel = InvoiceModel;
//# sourceMappingURL=invoice.model.js.map