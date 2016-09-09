"use strict";
var core_1 = require('@angular/core');
var tab_model_1 = require('./tab.model');
var Rx_1 = require('rxjs/Rx');
var TabService = (function () {
    function TabService() {
        this.tabsData = [];
        this.tabSource = new Rx_1.Subject();
        this.tabSource$ = this.tabSource.asObservable();
    }
    TabService.prototype.addContractTab = function (fiscalYear, contractNumber) {
        this.addTab('Contract: ' + contractNumber, ['/search/contract', fiscalYear, contractNumber]);
    };
    TabService.prototype.addInvoiceTab = function (invoiceNumber) {
        this.addTab('Invoice: ' + invoiceNumber, ['/search/invoice', invoiceNumber]);
    };
    TabService.prototype.addCheckTab = function (bankNumber, checkNumber) {
        this.addTab('Check: ' + checkNumber, ['/search/check', bankNumber, checkNumber]);
    };
    TabService.prototype.addVendorTab = function (vendorNumber, vendorSuffix) {
        this.addTab('Vendor: ' + vendorNumber, ['/search/vendor', vendorNumber, vendorSuffix]);
    };
    TabService.prototype.addDocumentTab = function (documentNumber, documentSuffix) {
        this.addTab(documentNumber + ' ' + documentSuffix, ['/search/document', documentNumber, documentSuffix]);
    };
    TabService.prototype.addStopPaymentTab = function (documentNumber, checkNumber) {
        this.addTab('Stop/Reissue ' + documentNumber, ['/search/stop-payment', documentNumber, checkNumber]);
    };
    TabService.prototype.addDocumentSearchTab = function () {
        this.addTab('Document Search', ['/search/document']);
    };
    TabService.prototype.addContractSearchTab = function () {
        this.addTab('Contract Search', ['/search/contract']);
    };
    TabService.prototype.addCheckSearchTab = function () {
        this.addTab('Check Search', ['/search/check']);
    };
    TabService.prototype.addInvoiceSearchTab = function () {
        this.addTab('Invoice Search', ['/search/invoice']);
    };
    /**
     * Adds a new tab to the tab array
     * @param tab
     */
    TabService.prototype.addTab = function (name, routerLink) {
        var tab = new tab_model_1.Tab(name);
        this.tabsData.forEach(function (t) { return t.active = false; });
        tab.routerLink = routerLink;
        tab.active = true;
        tab.state = tab_model_1.TabState.Added;
        this.tabsData.push(tab);
        tab.index = this.tabsData.indexOf(tab);
        this.tabSource.next(tab);
    };
    /**
     * Sets the given tab as active and displays the associated view model
     * @param tab
     */
    TabService.prototype.setActiveTab = function (tab) {
        if (this.tabsData.length > 0) {
            this.tabsData.forEach(function (t) { return t.active = false; });
            tab.state = tab_model_1.TabState.Switching;
            tab.active = true;
            this.tabSource.next(tab);
        }
    };
    /**
     * Removes the given tab along with the view model associated to it
     * @param tab
     */
    TabService.prototype.removeTab = function (tab) {
        var index = this.tabsData.indexOf(tab);
        if (index > -1) {
            tab.index = index;
            tab.active = false;
            tab.state = tab_model_1.TabState.Removed;
            this.tabsData.splice(index, 1);
            this.tabSource.next(tab);
        }
    };
    /**
     * Associates the viewModel to a tab
     * @param tab
     * @param viewModel
     */
    TabService.prototype.bindToTab = function (tab, params) {
        this.tabsData.forEach(function (t) { return t.active = false; });
        tab.state = tab_model_1.TabState.Normal;
        tab.active = true;
        tab.params = params;
        this.tabSource.next(tab);
    };
    /**
     * Selects the last tab from the array
     */
    TabService.prototype.displayLast = function () {
        var index = this.tabsData.length - 1;
        if (this.tabsData.length > 0)
            this.tabSource.next(this.tabsData[index]);
    };
    TabService.prototype.getActiveTab = function () {
        return this.tabsData.filter(function (t) { return t.active == true; })[0];
    };
    TabService.prototype.reset = function (subject) {
        subject.next(null);
    };
    TabService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=tab.service.js.map