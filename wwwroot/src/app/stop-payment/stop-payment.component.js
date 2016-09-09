"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var stop_payment_service_1 = require('./stop-payment.service');
var stop_payment_model_1 = require('./stop-payment.model');
var StopPaymentComponent = (function () {
    function StopPaymentComponent(route, tabService, stopPaymentService) {
        this.route = route;
        this.tabService = tabService;
        this.stopPaymentService = stopPaymentService;
        this.model = new stop_payment_model_1.StopPaymentModel();
    }
    StopPaymentComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = 'Stop/Reissue Payment';
            activeTab.routerLink = [
                '/search/stop-payment',
                this.documentNumber,
                this.checkNumber
            ];
            this.tabService.bindToTab(activeTab, { documentNumber: this.documentNumber, checkNumber: this.checkNumber });
        }
    };
    StopPaymentComponent.prototype.onSubmit = function () {
        this.stopPaymentService.submit(this.model);
    };
    StopPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var documentNumber = params['documentNumber'];
            var checkNumber = params['checkNumber'];
            _this.stopPaymentService.getStopPayment(documentNumber, checkNumber)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    _this.documentNumber = d.documentNumber;
                    _this.checkNumber = d.checkNumber;
                    _this.selectedNewAddressState = "";
                }
            });
        });
    };
    StopPaymentComponent = __decorate([
        core_1.Component({
            selector: 'stop-payment',
            templateUrl: 'stop-payment.component.html',
            providers: [stop_payment_service_1.StopPaymentService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tab_service_1.TabService, stop_payment_service_1.StopPaymentService])
    ], StopPaymentComponent);
    return StopPaymentComponent;
}());
exports.StopPaymentComponent = StopPaymentComponent;
var StopPaymentHomeComponent = (function () {
    function StopPaymentHomeComponent() {
    }
    StopPaymentHomeComponent = __decorate([
        core_1.Component({
            selector: 'stop-payment-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], StopPaymentHomeComponent);
    return StopPaymentHomeComponent;
}());
exports.StopPaymentHomeComponent = StopPaymentHomeComponent;
//# sourceMappingURL=stop-payment.component.js.map