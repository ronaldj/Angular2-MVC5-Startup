import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TabService } from './tab/tab.service';
import { AppRoutingModule } from './app-routing.module';

import { DocumentInquiryHomeComponent, DocumentInquiryComponent } from './document-inquiry.component';
import { DocumentHomeComponent, DocumentComponent } from './document/document.component';
import { ContractHomeComponent, ContractComponent } from './contract/contract.component';
import { InvoiceHomeComponent, InvoiceComponent } from './invoice/invoice.component';
import { VendorHomeComponent, VendorComponent } from './vendor/vendor.component';
import { CheckHomeComponent, CheckComponent } from './check/check.component';
import { StopPaymentHomeComponent, StopPaymentComponent } from './stop-payment/stop-payment.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DocumentInquiryComponent,
        DocumentInquiryHomeComponent,
        DocumentHomeComponent,
        DocumentComponent,
        ContractHomeComponent,
        ContractComponent,
        InvoiceHomeComponent,
        InvoiceComponent,
        VendorHomeComponent,
        VendorComponent,
        CheckHomeComponent,
        CheckComponent,
        StopPaymentHomeComponent,
        StopPaymentComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        TabService
    ]
})

export class AppModule { }