"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var check_service_1 = require('./check.service');
var CheckComponent = (function () {
    function CheckComponent(route, tabService, checkService) {
        this.route = route;
        this.tabService = tabService;
        this.checkService = checkService;
    }
    CheckComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = 'Check: ' + this.checkNumber;
            activeTab.routerLink = [
                '/search/check',
                this.selectedBankNumber,
                this.checkNumber
            ];
            this.tabService.bindToTab(activeTab, { bankNumber: this.selectedBankNumber, checkNumber: this.checkNumber });
        }
    };
    CheckComponent.prototype.page = function (direction) {
        var _this = this;
        var activeTab = this.tabService.tabsData.filter(function (t) { return t.active == true; })[0];
        if (activeTab != null) {
            activeTab.tabName = 'Check:' + ' ' + this.checkNumber;
            activeTab.routerLink = [
                '/search/check',
                this.selectedBankNumber,
                this.checkNumber
            ];
            this.checkService.page(direction, this.selectedBankNumber, this.checkNumber)
                .then(function (d) {
                _this.selectedBankNumber = d.bankNumber;
                _this.checkNumber = d.checkNumber;
                _this.onRetrieve();
            });
        }
    };
    CheckComponent.prototype.getBankNumbers = function () {
        //values here should come from the json web api
        var obj = "[\"AB001\",\"AB002\",\"AB003\", \"EF001\"]";
        var d = JSON.parse(obj);
        var bankNumbers = d;
        return Promise.resolve(bankNumbers);
    };
    CheckComponent.prototype.onBankNumberChange = function (bankNumber) {
        this.selectedBankNumber = bankNumber;
    };
    CheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBankNumbers().then(function (d) {
            _this.bankNumbers = d;
            _this.selectedBankNumber = '';
        });
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var bankNumber = params['bankNumber'];
            var checkNumber = params['checkNumber'];
            _this.checkService.getCheck(bankNumber, checkNumber)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    _this.selectedBankNumber = d.bankNumber;
                    _this.checkNumber = d.checkNumber;
                }
                if (_this.tabService.tabsData.length == 0) {
                    _this.tabService.addTab('Check:' + ' ' + checkNumber, ['/search/check', bankNumber, checkNumber]);
                }
            });
        });
    };
    CheckComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CheckComponent = __decorate([
        core_1.Component({
            selector: 'check',
            templateUrl: 'check.component.html',
            providers: [check_service_1.CheckService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tab_service_1.TabService, check_service_1.CheckService])
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
var CheckHomeComponent = (function () {
    function CheckHomeComponent() {
    }
    CheckHomeComponent = __decorate([
        core_1.Component({
            selector: 'check-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], CheckHomeComponent);
    return CheckHomeComponent;
}());
exports.CheckHomeComponent = CheckHomeComponent;
//# sourceMappingURL=check.component.js.map