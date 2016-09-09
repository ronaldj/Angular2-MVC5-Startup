"use strict";
var CheckModel = (function () {
    function CheckModel(obj) {
        if (obj) {
            if (obj.constructor === String) {
                var d = JSON.parse(obj);
                if (d) {
                    //do web api json to model mapping here
                    this.checkNumber = d.checkNumber;
                    this.bankNumber = d.bankNumber;
                }
            }
            else {
                this.checkNumber = obj.checkNumber;
                this.bankNumber = obj.bankNumber;
            }
        }
    }
    return CheckModel;
}());
exports.CheckModel = CheckModel;
//# sourceMappingURL=check.model.js.map