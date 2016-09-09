import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { StopPaymentService } from './stop-payment.service';
import { StopPaymentModel, StopPaymentOption } from './stop-payment.model';
import { VendorModel } from '../vendor/vendor.model';

@Component({
    selector: 'stop-payment',
    templateUrl: 'stop-payment.component.html',
    providers: [StopPaymentService]
})

export class StopPaymentComponent {
    private model: StopPaymentModel;
    private documentNumber: string;
    private checkNumber: string;
    private vendorModel: VendorModel;
    private selectedNewAddressState: string;
    private sub: any;
    private stopPaymentOption: StopPaymentOption;

    constructor(
        private route: ActivatedRoute,
        private tabService: TabService,
        private stopPaymentService: StopPaymentService) {

        this.model = new StopPaymentModel();
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = 'Stop/Reissue Payment';
            activeTab.routerLink = [
                '/search/stop-payment',
                this.documentNumber,
                this.checkNumber
            ]

            this.tabService.bindToTab(activeTab, { documentNumber: this.documentNumber, checkNumber: this.checkNumber });
        }
    }

    onSubmit() {
        this.stopPaymentService.submit(this.model);
    }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe((params: any) => {
                let documentNumber = params['documentNumber'];
                let checkNumber = params['checkNumber'];

                this.stopPaymentService.getStopPayment(documentNumber, checkNumber)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            this.documentNumber = d.documentNumber;
                            this.checkNumber = d.checkNumber;

                            this.selectedNewAddressState = "";
                        }
                    });
            });
    }
}

@Component({
    selector: 'stop-payment-home',
    template: '<router-outlet></router-outlet>'
})
export class StopPaymentHomeComponent { }