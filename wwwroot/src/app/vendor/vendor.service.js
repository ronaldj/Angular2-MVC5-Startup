"use strict";
var core_1 = require('@angular/core');
var vendor_model_1 = require('./vendor.model');
var VendorService = (function () {
    function VendorService() {
    }
    VendorService.prototype.getVendor = function (vendorNumber, vendorSuffix) {
        //values here should come from the json web api
        if (!vendorNumber)
            return Promise.resolve(null);
        var jsonString = "{\"vendorNumber\": \"" + vendorNumber + "\", \"vendorSuffix\": \"" + vendorSuffix + "\"}";
        return Promise.resolve(new vendor_model_1.VendorModel(jsonString));
    };
    VendorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;
//# sourceMappingURL=vendor.service.js.map