"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('../tab/tab.service');
var tab_model_1 = require('../tab/tab.model');
var document_service_1 = require('./document.service');
var DocumentComponent = (function () {
    function DocumentComponent(router, route, tabService, documentService) {
        this.router = router;
        this.route = route;
        this.tabService = tabService;
        this.documentService = documentService;
        this.tabType = tab_model_1.TabType;
    }
    DocumentComponent.prototype.onRetrieve = function () {
        var activeTab = this.tabService.getActiveTab();
        if (activeTab != null) {
            activeTab.tabName = this.documentNumber + ' ' + this.documentSuffix;
            activeTab.routerLink = [
                '/search/document',
                this.documentNumber,
                this.documentSuffix
            ];
            this.tabService.bindToTab(activeTab, {
                documentNumber: this.documentNumber,
                documentSuffix: this.documentSuffix
            });
        }
    };
    DocumentComponent.prototype.page = function (direction) {
        var _this = this;
        var activeTab = this.tabService.tabsData.filter(function (t) { return t.active == true; })[0];
        if (activeTab != null) {
            activeTab.tabName = this.documentNumber + ' ' + this.documentSuffix;
            activeTab.routerLink = [
                '/search/document',
                this.documentNumber,
                this.documentSuffix
            ];
            this.documentService.page(direction, this.documentNumber, this.documentSuffix)
                .then(function (d) {
                _this.documentNumber = d.documentNumber;
                _this.documentSuffix = d.documentSuffix;
                _this.onRetrieve();
            });
        }
    };
    DocumentComponent.prototype.IsSipp = function () {
    };
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var documentNumber = params['documentNumber'];
            var documentSuffix = params['documentSuffix'];
            _this.documentService.getDocument(documentNumber, documentSuffix)
                .then(function (d) {
                _this.model = d;
                if (d) {
                    //add tab with data
                    _this.documentNumber = d.documentNumber;
                    _this.documentSuffix = d.documentSuffix;
                    if (_this.tabService.tabsData.length == 0) {
                        _this.tabService.addTab(_this.documentNumber + ' ' + _this.documentSuffix, ['/search/document', _this.documentNumber, _this.documentSuffix]);
                    }
                }
                else {
                    //add default tab
                    if (_this.tabService.tabsData.length == 0) {
                        _this.tabService.addTab('Document Search', ['/search/document']);
                    }
                }
            });
        });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); //prevent memory leak
    };
    DocumentComponent = __decorate([
        core_1.Component({
            selector: 'document',
            templateUrl: 'document.component.html',
            providers: [document_service_1.DocumentService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, tab_service_1.TabService, document_service_1.DocumentService])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
var DocumentHomeComponent = (function () {
    function DocumentHomeComponent() {
    }
    DocumentHomeComponent = __decorate([
        core_1.Component({
            selector: 'document-home',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentHomeComponent);
    return DocumentHomeComponent;
}());
exports.DocumentHomeComponent = DocumentHomeComponent;
//# sourceMappingURL=document.component.js.map