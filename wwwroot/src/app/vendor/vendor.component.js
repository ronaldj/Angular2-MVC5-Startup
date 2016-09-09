"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var vendor_service_1 = require('./vendor.service');
var VendorComponent = (function () {
    function VendorComponent(route, tabService, vendorService) {
        this.route = route;
        this.tabService = tabService;
        this.vendorService = vendorService;
    }
    VendorComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = 'Vendor: ' + this.vendorNumber;
            //values here should come from the json web api
            var jsonString = "{\"vendorNumber\": " + this.vendorNumber + "}";
            activeTab.routerLink = [
                '/search/vendor',
                this.vendorNumber,
                this.vendorSuffix
            ];
            this.tabService.bindToTab(activeTab, { number: this.vendorNumber, suffix: this.vendorSuffix });
        }
    };
    VendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var vendorNumber = params['vendorNumber'];
            var vendorSuffix = params['vendorSuffix'];
            _this.vendorService.getVendor(vendorNumber, vendorSuffix)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    _this.vendorNumber = d.vendorNumber;
                    _this.vendorSuffix = d.vendorSuffix;
                }
            });
        });
    };
    VendorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    VendorComponent = __decorate([
        core_1.Component({
            selector: 'vendor',
            templateUrl: 'vendor.component.html',
            providers: [vendor_service_1.VendorService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tab_service_1.TabService, vendor_service_1.VendorService])
    ], VendorComponent);
    return VendorComponent;
}());
exports.VendorComponent = VendorComponent;
var VendorHomeComponent = (function () {
    function VendorHomeComponent() {
    }
    VendorHomeComponent = __decorate([
        core_1.Component({
            selector: 'vendor-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], VendorHomeComponent);
    return VendorHomeComponent;
}());
exports.VendorHomeComponent = VendorHomeComponent;
//# sourceMappingURL=vendor.component.js.map