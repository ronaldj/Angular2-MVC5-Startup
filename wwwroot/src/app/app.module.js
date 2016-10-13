"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var tab_service_1 = require('./tab/tab.service');
var app_routing_module_1 = require('./app-routing.module');
var document_inquiry_component_1 = require('./document-inquiry.component');
var document_component_1 = require('./document/document.component');
var contract_component_1 = require('./contract/contract.component');
var invoice_component_1 = require('./invoice/invoice.component');
var vendor_component_1 = require('./vendor/vendor.component');
var check_component_1 = require('./check/check.component');
var stop_payment_component_1 = require('./stop-payment/stop-payment.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                document_inquiry_component_1.DocumentInquiryComponent,
                document_inquiry_component_1.DocumentInquiryHomeComponent,
                document_component_1.DocumentHomeComponent,
                document_component_1.DocumentComponent,
                contract_component_1.ContractHomeComponent,
                contract_component_1.ContractComponent,
                invoice_component_1.InvoiceHomeComponent,
                invoice_component_1.InvoiceComponent,
                vendor_component_1.VendorHomeComponent,
                vendor_component_1.VendorComponent,
                check_component_1.CheckHomeComponent,
                check_component_1.CheckComponent,
                stop_payment_component_1.StopPaymentHomeComponent,
                stop_payment_component_1.StopPaymentComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                tab_service_1.TabService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map