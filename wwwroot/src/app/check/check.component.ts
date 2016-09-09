import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { CheckService } from './check.service';
import { CheckModel } from './check.model';

@Component({
    selector: 'check',
    templateUrl: 'check.component.html',
    providers: [CheckService]
})

export class CheckComponent {
    private model: CheckModel;
    private bankNumber: string;
    private checkNumber: string;
    private selectedBankNumber: string;
    private bankNumbers: Array<string>;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private tabService: TabService,
        private checkService: CheckService) {
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = 'Check: ' + this.checkNumber;
            activeTab.routerLink = [
                '/search/check',
                this.selectedBankNumber,
                this.checkNumber
            ]

            this.tabService.bindToTab(activeTab, { bankNumber: this.selectedBankNumber, checkNumber: this.checkNumber });
        }
    }

    page(direction: number) {
        let activeTab = this.tabService.tabsData.filter((t) => t.active == true)[0];

        if (activeTab != null) {
            activeTab.tabName = 'Check:' + ' ' + this.checkNumber;

            activeTab.routerLink = [
                '/search/check',
                this.selectedBankNumber,
                this.checkNumber
            ]

            this.checkService.page(direction, this.selectedBankNumber, this.checkNumber)
                .then((d: any) => {
                    this.selectedBankNumber = d.bankNumber;
                    this.checkNumber = d.checkNumber;
                    this.onRetrieve();
                });
        }
    }

    getBankNumbers() {
        //values here should come from the json web api
        let obj: any = `["AB001","AB002","AB003", "EF001"]`;

        let d = JSON.parse(obj);

        let bankNumbers = d as Array<string>;

        return Promise.resolve(bankNumbers);
    }

    onBankNumberChange(bankNumber: string) {
        this.selectedBankNumber = bankNumber;
    }

    ngOnInit() {
        this.getBankNumbers().then(
            (d: Array<string>) => {
                this.bankNumbers = d;
                this.selectedBankNumber = '';
            }
        );

        this.sub = this.route
            .params
            .subscribe((params: any) => {
                let bankNumber = params['bankNumber'];
                let checkNumber = params['checkNumber'];

                this.checkService.getCheck(bankNumber, checkNumber)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            this.selectedBankNumber = d.bankNumber;
                            this.checkNumber = d.checkNumber;
                        }

                        if (this.tabService.tabsData.length == 0) {
                            this.tabService.addTab(
                                'Check:' + ' ' + checkNumber,
                                ['/search/check', bankNumber, checkNumber]
                            );
                        }
                    });
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

@Component({
    selector: 'check-home',
    template: '<router-outlet></router-outlet>'
})
export class CheckHomeComponent { }