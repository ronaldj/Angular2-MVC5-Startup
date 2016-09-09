import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { VendorService } from './vendor.service';
import { VendorModel } from './vendor.model';

@Component({
    selector: 'vendor',
    templateUrl: 'vendor.component.html',
    providers: [VendorService]
})

export class VendorComponent {
    private model: VendorModel;
    private vendorNumber: string;
    private vendorSuffix: string;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private tabService: TabService,
        private vendorService: VendorService) {
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = 'Vendor: ' + this.vendorNumber;

            //values here should come from the json web api
            let jsonString = `{"vendorNumber": ` + this.vendorNumber + `}`;

            activeTab.routerLink = [
                '/search/vendor',
                this.vendorNumber,
                this.vendorSuffix
            ]

            this.tabService.bindToTab(activeTab, { number: this.vendorNumber, suffix: this.vendorSuffix });
        }
    }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe((params: any) => {
                let vendorNumber = params['vendorNumber'];
                let vendorSuffix = params['vendorSuffix'];

                this.vendorService.getVendor(vendorNumber, vendorSuffix)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            this.vendorNumber = d.vendorNumber;
                            this.vendorSuffix = d.vendorSuffix;
                        }
                    });
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

@Component({
    selector: 'vendor-home',
    template: '<router-outlet></router-outlet>'
})
export class VendorHomeComponent { }