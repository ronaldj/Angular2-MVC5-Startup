import { Injectable, NgZone } from '@angular/core';
import { Tab, TabType, TabState } from './tab.model';
import { Subject, Observable, Subscription  } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class TabService {
    tabsData: Tab[] = [];

    private tabSource = new Subject<Tab>();

    tabSource$ = this.tabSource.asObservable();


    addContractTab(fiscalYear: string, contractNumber: string) {
        this.addTab('Contract: ' + contractNumber, ['/search/contract', fiscalYear, contractNumber]);
    }

    addInvoiceTab(invoiceNumber: string) {
        this.addTab('Invoice: ' + invoiceNumber, ['/search/invoice', invoiceNumber]);
    }

    addCheckTab(bankNumber: string, checkNumber: string) {
        this.addTab('Check: ' + checkNumber, ['/search/check', bankNumber, checkNumber]);
    }

    addVendorTab(vendorNumber: string, vendorSuffix: string) {
        this.addTab('Vendor: ' + vendorNumber, ['/search/vendor', vendorNumber, vendorSuffix]);
    }

    addDocumentTab(documentNumber: string, documentSuffix: string) {
        this.addTab(documentNumber + ' ' + documentSuffix, ['/search/document', documentNumber, documentSuffix]);
    }

    addStopPaymentTab(documentNumber: string, checkNumber: string)
    {
        this.addTab('Stop/Reissue ' + documentNumber, ['/search/stop-payment', documentNumber, checkNumber]);
    }

    addDocumentSearchTab()
    {
        this.addTab('Document Search', ['/search/document']);
    }

    addContractSearchTab() {
        this.addTab('Contract Search', ['/search/contract']);
    }

    addCheckSearchTab() {
        this.addTab('Check Search', ['/search/check']);
    }

    addInvoiceSearchTab() {
        this.addTab('Invoice Search', ['/search/invoice']);
    }

    /**
     * Adds a new tab to the tab array
     * @param tab
     */
    addTab(name: string, routerLink: any) {
        let tab = new Tab(name);

        this.tabsData.forEach((t) => t.active = false);

        tab.routerLink = routerLink;
        tab.active = true;
        tab.state = TabState.Added;

        this.tabsData.push(tab);

        tab.index = this.tabsData.indexOf(tab);
        this.tabSource.next(tab);
    }

    /**
     * Sets the given tab as active and displays the associated view model
     * @param tab
     */
    setActiveTab(tab: Tab) {
        if (this.tabsData.length > 0) {
            this.tabsData.forEach((t) => t.active = false);

            tab.state = TabState.Switching;
            tab.active = true;

            this.tabSource.next(tab);
        }
    }

    /**
     * Removes the given tab along with the view model associated to it
     * @param tab
     */
    removeTab(tab: Tab) {
        let index = this.tabsData.indexOf(tab);

        if (index > -1) {
            tab.index = index;
            tab.active = false;
            tab.state = TabState.Removed;

            this.tabsData.splice(index, 1);
            this.tabSource.next(tab);
        }
    }

    /**
     * Associates the viewModel to a tab
     * @param tab
     * @param viewModel
     */
    bindToTab<T>(tab: Tab, params: any) {
        this.tabsData.forEach((t) => t.active = false);

        tab.state = TabState.Normal;
        tab.active = true;
        tab.params = params;

        this.tabSource.next(tab);
    }

    /**
     * Selects the last tab from the array
     */
    displayLast() {
        let index = this.tabsData.length - 1;

        if (this.tabsData.length > 0)
            this.tabSource.next(this.tabsData[index]);
    }

    getActiveTab() {
        return this.tabsData.filter((t: Tab) => t.active == true)[0];
    }

    reset<T>(subject: Subject<T>) {
        subject.next(null);
    }
}