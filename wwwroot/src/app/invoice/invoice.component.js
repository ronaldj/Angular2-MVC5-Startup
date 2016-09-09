"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var invoice_service_1 = require('./invoice.service');
var InvoiceComponent = (function () {
    function InvoiceComponent(route, tabService, invoiceService) {
        this.route = route;
        this.tabService = tabService;
        this.invoiceService = invoiceService;
    }
    InvoiceComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = 'Invoice: ' + this.invoiceNumber;
            //values here should come from the json web api
            var jsonString = "{\"invoiceNumber\": " + this.invoiceNumber + "}";
            activeTab.routerLink = [
                '/search/invoice',
                this.invoiceNumber
            ];
            this.tabService.bindToTab(activeTab, { number: this.invoiceNumber });
        }
    };
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var invoiceNumber = params['invoiceNumber'];
            _this.invoiceService.getInvoice(invoiceNumber)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    _this.invoiceNumber = d.invoiceNumber;
                }
                if (_this.tabService.tabsData.length == 0) {
                    _this.tabService.addTab('Invoice:' + ' ' + invoiceNumber, ['/search/invoice', invoiceNumber]);
                }
            });
        });
    };
    InvoiceComponent = __decorate([
        core_1.Component({
            selector: 'invoice',
            templateUrl: 'invoice.component.html',
            providers: [invoice_service_1.InvoiceService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tab_service_1.TabService, invoice_service_1.InvoiceService])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;
var InvoiceHomeComponent = (function () {
    function InvoiceHomeComponent() {
    }
    InvoiceHomeComponent = __decorate([
        core_1.Component({
            selector: 'invoice-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], InvoiceHomeComponent);
    return InvoiceHomeComponent;
}());
exports.InvoiceHomeComponent = InvoiceHomeComponent;
//# sourceMappingURL=invoice.component.js.map