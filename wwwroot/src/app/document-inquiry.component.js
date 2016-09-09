"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tab_service_1 = require('./tab/tab.service');
var tab_model_1 = require('./tab/tab.model');
var DocumentInquiryHomeComponent = (function () {
    function DocumentInquiryHomeComponent() {
    }
    DocumentInquiryHomeComponent = __decorate([
        core_1.Component({
            selector: 'search-home',
            template: '<router-outlet></router-outlet>',
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentInquiryHomeComponent);
    return DocumentInquiryHomeComponent;
}());
exports.DocumentInquiryHomeComponent = DocumentInquiryHomeComponent;
var DocumentInquiryComponent = (function () {
    function DocumentInquiryComponent(tabService, router, route, elementRef) {
        var _this = this;
        this.tabService = tabService;
        this.router = router;
        this.route = route;
        this.title = 'Document Inquiry';
        this.tabs = [];
        this.elementRef = elementRef;
        tabService.tabSource$.subscribe(function (t) {
            var routerLink = t.routerLink;
            switch (t.state) {
                case tab_model_1.TabState.Removed:
                    _this.tabs.splice(t.index, 1); //remove tab
                    if (_this.tabs.length > 0)
                        tabService.setActiveTab(tabService.tabsData[_this.tabs.length - 1]); //route to first available tab
                    else {
                        routerLink = ['']; //reset
                    }
                    break;
                case tab_model_1.TabState.Added:
                    _this.tabs.push(t); //add tab
                    break;
                case tab_model_1.TabState.Switching:
                    t.state = tab_model_1.TabState.Normal;
                    _this.setSearchInput(t.params);
                    break;
            }
            router.navigate(routerLink);
        });
    }
    /**
     * NG2 does not have a solution as yet to clear forms. For now using jquery.
     */
    DocumentInquiryComponent.prototype.clearSearchInput = function () {
        $(this.elementRef.nativeElement).find("#search-container").find('input').val('');
    };
    DocumentInquiryComponent.prototype.setSearchInput = function (params) {
        var ref = $(this.elementRef.nativeElement);
        $.each(params, function (k, v) {
            ref.find('[name="' + k + '"]')
                .first()
                .val(v);
        });
    };
    DocumentInquiryComponent.prototype.onSelect = function (tab) {
        this.tabService.setActiveTab(tab);
    };
    DocumentInquiryComponent.prototype.onRemove = function (tab) {
        this.tabService.removeTab(tab);
        this.tabService.displayLast();
    };
    //onSelectSearch(viewType: string) {
    //    switch (viewType) {
    //        case "DocumentSearch":
    //            this.tabService.addTab('Document Search', ['/search/document']);
    //            console.log('router nav to document');
    //            break;
    //        case "ContractSearch":
    //            this.tabService.addTab('Contract Search', ['/search/contract']);
    //            console.log('router nav to contract');
    //            break;
    //    }
    //}
    DocumentInquiryComponent.prototype.ngOnInit = function () { };
    DocumentInquiryComponent.prototype.ngOnChanges = function () { };
    DocumentInquiryComponent.prototype.ngDoCheck = function () { };
    DocumentInquiryComponent.prototype.ngOnDestroy = function () { };
    DocumentInquiryComponent = __decorate([
        core_1.Component({
            selector: 'document-inquiry',
            templateUrl: 'document-inquiry.component.html',
        }),
        __param(3, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [tab_service_1.TabService, router_1.Router, router_1.ActivatedRoute, core_1.ElementRef])
    ], DocumentInquiryComponent);
    return DocumentInquiryComponent;
}());
exports.DocumentInquiryComponent = DocumentInquiryComponent;
//# sourceMappingURL=document-inquiry.component.js.map