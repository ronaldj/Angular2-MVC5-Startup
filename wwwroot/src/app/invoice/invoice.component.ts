import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { InvoiceService } from './invoice.service';
import { InvoiceModel } from './invoice.model';
import { VendorModel } from '../vendor/vendor.model';

@Component({
    selector: 'invoice',
    templateUrl: 'invoice.component.html',
    providers: [InvoiceService]
})

export class InvoiceComponent {
    private model: InvoiceModel;
    private invoiceNumber: string;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private tabService: TabService,
        private invoiceService: InvoiceService) {
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = 'Invoice: ' + this.invoiceNumber;

            //values here should come from the json web api
            let jsonString = `{"invoiceNumber": ` + this.invoiceNumber + `}`;

            activeTab.routerLink = [
                '/search/invoice',
                this.invoiceNumber
            ]

            this.tabService.bindToTab(activeTab, { number: this.invoiceNumber });
        }
    }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe((params: any) => {
                let invoiceNumber = params['invoiceNumber'];

                this.invoiceService.getInvoice(invoiceNumber)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            this.invoiceNumber = d.invoiceNumber;
                        }

                        if (this.tabService.tabsData.length == 0) {
                            this.tabService.addTab(
                                'Invoice:' + ' ' + invoiceNumber,
                                ['/search/invoice', invoiceNumber]
                            );
                        }
                    });
            });
    }
}

@Component({
    selector: 'invoice-home',
    template: '<router-outlet></router-outlet>'
})
export class InvoiceHomeComponent { }