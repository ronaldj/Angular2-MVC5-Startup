"use strict";
var VendorModel = (function () {
    function VendorModel(obj) {
        if (obj) {
            if (obj.constructor === String) {
                var d = JSON.parse(obj);
                if (d) {
                    //do web api json to model mapping here
                    this.vendorNumber = d.vendorNumber;
                    this.vendorSuffix = d.vendorSuffix;
                }
            }
            else {
                this.vendorNumber = obj.vendorNumber;
                this.vendorSuffix = obj.vendorSuffix;
            }
        }
    }
    return VendorModel;
}());
exports.VendorModel = VendorModel;
//# sourceMappingURL=vendor.model.js.map