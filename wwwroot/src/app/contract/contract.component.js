"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var accounting_service_1 = require('../accounting/accounting.service');
var contract_service_1 = require('./contract.service');
var ContractComponent = (function () {
    function ContractComponent(route, tabService, accountingService, contractService) {
        this.route = route;
        this.tabService = tabService;
        this.accountingService = accountingService;
        this.contractService = contractService;
    }
    ContractComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = 'Contract: ' + this.contractNumber;
            activeTab.routerLink = [
                '/search/contract',
                this.selectedFiscalYear,
                this.contractNumber
            ];
            this.tabService.bindToTab(activeTab, { number: this.contractNumber });
        }
    };
    ContractComponent.prototype.page = function (direction) {
        var _this = this;
        var activeTab = this.tabService.tabsData.filter(function (t) { return t.active == true; })[0];
        if (activeTab != null) {
            activeTab.tabName = 'Contract:' + ' ' + this.contractNumber;
            activeTab.routerLink = [
                '/search/contract',
                this.selectedFiscalYear,
                this.contractNumber
            ];
            this.contractService.page(direction, this.selectedFiscalYear, this.contractNumber)
                .then(function (d) {
                _this.selectedFiscalYear = d.fiscalYear;
                _this.contractNumber = d.contractNumber;
                _this.onRetrieve();
            });
        }
    };
    ContractComponent.prototype.onFiscalYearChange = function (fiscalYear) {
        this.selectedFiscalYear = fiscalYear;
    };
    ContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountingService.getFiscalYears().then(function (d) {
            _this.fiscalYears = d;
            _this.selectedFiscalYear = 0;
        });
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var fiscalYear = params['fiscalYear'];
            var contractNumber = params['contractNumber'];
            _this.contractService.getContract(fiscalYear, contractNumber)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    _this.bind(_this.model);
                    if (_this.tabService.tabsData.length == 0) {
                        _this.tabService.addTab('Contract:' + ' ' + contractNumber, ['/search/contract', fiscalYear, contractNumber]);
                    }
                }
            });
        });
    };
    ContractComponent.prototype.bind = function (model) {
        var _this = this;
        this.contractNumber = this.model.contractNumber;
        this.selectedFiscalYear = this.model.fiscalYear;
        this.originalAmountTotal = 0;
        this.adjustmentAmountTotal = 0;
        this.paymentAmountTotal = 0;
        this.balanceAmountTotal = 0;
        this.model.accounting.forEach(function (entry) {
            _this.originalAmountTotal += entry.originalAmount;
            _this.adjustmentAmountTotal += entry.adjustmentAmount;
            _this.paymentAmountTotal += entry.paymentAmount;
            _this.balanceAmountTotal += entry.balanceAmount;
        });
    };
    ContractComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ContractComponent = __decorate([
        core_1.Component({
            selector: 'contract',
            templateUrl: 'contract.component.html',
            providers: [accounting_service_1.AccountingService, contract_service_1.ContractService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tab_service_1.TabService, accounting_service_1.AccountingService, contract_service_1.ContractService])
    ], ContractComponent);
    return ContractComponent;
}());
exports.ContractComponent = ContractComponent;
var ContractHomeComponent = (function () {
    function ContractHomeComponent() {
    }
    ContractHomeComponent = __decorate([
        core_1.Component({
            selector: 'contract-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], ContractHomeComponent);
    return ContractHomeComponent;
}());
exports.ContractHomeComponent = ContractHomeComponent;
//# sourceMappingURL=contract.component.js.map