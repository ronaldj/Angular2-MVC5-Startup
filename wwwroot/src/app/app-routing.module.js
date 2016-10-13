"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var document_inquiry_component_1 = require('./document-inquiry.component');
var document_component_1 = require('./document/document.component');
var contract_component_1 = require('./contract/contract.component');
var invoice_component_1 = require('./invoice/invoice.component');
var vendor_component_1 = require('./vendor/vendor.component');
var check_component_1 = require('./check/check.component');
var stop_payment_component_1 = require('./stop-payment/stop-payment.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/search',
                        pathMatch: 'full'
                    },
                    {
                        path: 'search',
                        component: document_inquiry_component_1.DocumentInquiryComponent,
                        children: [
                            {
                                path: '',
                                component: document_inquiry_component_1.DocumentInquiryHomeComponent
                            },
                            {
                                path: 'document',
                                component: document_component_1.DocumentHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: document_component_1.DocumentComponent
                                    },
                                    {
                                        path: ':documentNumber/:documentSuffix',
                                        component: document_component_1.DocumentComponent
                                    }
                                ]
                            },
                            {
                                path: 'contract',
                                component: contract_component_1.ContractHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: contract_component_1.ContractComponent
                                    },
                                    {
                                        path: ':fiscalYear/:contractNumber',
                                        component: contract_component_1.ContractComponent
                                    }
                                ]
                            },
                            {
                                path: 'invoice',
                                component: invoice_component_1.InvoiceHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: invoice_component_1.InvoiceComponent
                                    },
                                    {
                                        path: ':invoiceNumber',
                                        component: invoice_component_1.InvoiceComponent
                                    }
                                ]
                            },
                            {
                                path: 'vendor',
                                component: vendor_component_1.VendorHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: vendor_component_1.VendorComponent
                                    },
                                    {
                                        path: ':vendorNumber/:vendorSuffix',
                                        component: vendor_component_1.VendorComponent
                                    }
                                ]
                            },
                            {
                                path: 'check',
                                component: check_component_1.CheckHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: check_component_1.CheckComponent
                                    },
                                    {
                                        path: ':bankNumber/:checkNumber',
                                        component: check_component_1.CheckComponent
                                    }
                                ]
                            },
                            {
                                path: 'stop-payment',
                                component: stop_payment_component_1.StopPaymentHomeComponent,
                                children: [
                                    {
                                        path: '',
                                        component: stop_payment_component_1.StopPaymentComponent
                                    },
                                    {
                                        path: ':documentNumber/:checkNumber',
                                        component: stop_payment_component_1.StopPaymentComponent
                                    }
                                ]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map