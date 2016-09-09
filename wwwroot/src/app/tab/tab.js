"use strict";
var Tab = (function () {
    function Tab(tabName) {
        this.tabName = tabName;
    }
    return Tab;
}());
exports.Tab = Tab;
(function (TabState) {
    TabState[TabState["Normal"] = 0] = "Normal";
    TabState[TabState["Added"] = 1] = "Added";
    TabState[TabState["Removed"] = 2] = "Removed";
    TabState[TabState["Switching"] = 3] = "Switching";
})(exports.TabState || (exports.TabState = {}));
var TabState = exports.TabState;
(function (TabType) {
    TabType[TabType["Document"] = 0] = "Document";
    TabType[TabType["Contract"] = 1] = "Contract";
    TabType[TabType["Invoice"] = 2] = "Invoice";
})(exports.TabType || (exports.TabType = {}));
var TabType = exports.TabType;
//# sourceMappingURL=tab.js.map