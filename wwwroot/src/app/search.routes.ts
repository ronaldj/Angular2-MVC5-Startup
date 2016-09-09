import { Routes } from '@angular/router';
import { DocumentInquiryHomeComponent, DocumentInquiryComponent } from './document-inquiry.component';
import { DocumentHomeComponent, DocumentComponent } from './document/document.component';
import { ContractHomeComponent, ContractComponent } from './contract/contract.component';
import { InvoiceHomeComponent, InvoiceComponent } from './invoice/invoice.component';
import { VendorHomeComponent, VendorComponent } from './vendor/vendor.component';
import { CheckHomeComponent, CheckComponent } from './check/check.component';
import { StopPaymentHomeComponent, StopPaymentComponent } from './stop-payment/stop-payment.component';

export const SearchRoutes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: DocumentInquiryComponent,
        children: [
            {
                path: '',
                component: DocumentInquiryHomeComponent
            },
            {
                path: 'document',
                component: DocumentHomeComponent,
                children: [
                    {
                        path: '',
                        component: DocumentComponent
                    },
                    {
                        path: ':documentNumber/:documentSuffix',
                        component: DocumentComponent
                    }
                ]
            },
            {
                path: 'contract',
                component: ContractHomeComponent,
                children: [
                    {
                        path: '',
                        component: ContractComponent
                    },
                    {
                        path: ':fiscalYear/:contractNumber',
                        component: ContractComponent
                    }
                ]
            },
            {
                path: 'invoice',
                component: InvoiceHomeComponent,
                children: [
                    {
                        path: '',
                        component: InvoiceComponent
                    },
                    {
                        path: ':invoiceNumber',
                        component: InvoiceComponent
                    }
                ]
            },
            {
                path: 'vendor',
                component: VendorHomeComponent,
                children: [
                    {
                        path: '',
                        component:VendorComponent
                    },
                    {
                        path: ':vendorNumber/:vendorSuffix',
                        component: VendorComponent
                    }
                ]
            },
            {
                path: 'check',
                component: CheckHomeComponent,
                children: [
                    {
                        path: '',
                        component: CheckComponent
                    },
                    {
                        path: ':bankNumber/:checkNumber',
                        component: CheckComponent
                    }
                ]
            },
            {
                path: 'stop-payment',
                component: StopPaymentHomeComponent,
                children: [
                    {
                        path: '',
                        component: StopPaymentComponent
                    },
                    {
                        path: ':documentNumber/:checkNumber',
                        component: StopPaymentComponent
                    }
                ]
            }
        ]
    }
];