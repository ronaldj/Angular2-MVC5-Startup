import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { AccountingService } from '../accounting/accounting.service';
import { ContractService } from './contract.service';
import { ContractModel } from './contract.model';

@Component({
    selector: 'contract',
    templateUrl: 'contract.component.html',
    providers: [AccountingService, ContractService]
})

export class ContractComponent {
    private model: ContractModel;
    private contractNumber: string;
    private selectedFiscalYear: number;
    private fiscalYears: Array<number>;
    private originalAmountTotal: number;
    private adjustmentAmountTotal: number;
    private paymentAmountTotal: number;
    private balanceAmountTotal: number;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private tabService: TabService,
        private accountingService: AccountingService,
        private contractService: ContractService) {
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = 'Contract: ' + this.contractNumber;
            activeTab.routerLink = [
                '/search/contract',
                this.selectedFiscalYear,
                this.contractNumber
            ]

            this.tabService.bindToTab(activeTab, { number: this.contractNumber });
        }
    }

    page(direction: number) {
        let activeTab = this.tabService.tabsData.filter((t) => t.active == true)[0];

        if (activeTab != null) {
            activeTab.tabName = 'Contract:' + ' ' + this.contractNumber;

            activeTab.routerLink = [
                '/search/contract',
                this.selectedFiscalYear,
                this.contractNumber
            ]

            this.contractService.page(direction, this.selectedFiscalYear, this.contractNumber)
                .then((d: any) => {
                    this.selectedFiscalYear = d.fiscalYear;
                    this.contractNumber = d.contractNumber;
                    this.onRetrieve();
                });
        }
    }

    onFiscalYearChange(fiscalYear: number) {
        this.selectedFiscalYear = fiscalYear;
    }

    ngOnInit() {
        this.accountingService.getFiscalYears().then(
            (d: Array<number>) => {
                this.fiscalYears = d;
                this.selectedFiscalYear = 0;
            }
        );

        this.sub = this.route
            .params
            .subscribe((params: any) => {
                let fiscalYear: number = <number>params['fiscalYear'];
                let contractNumber: string = <string>params['contractNumber'];

                this.contractService.getContract(fiscalYear, contractNumber)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            this.bind(this.model);

                            if (this.tabService.tabsData.length == 0) {
                                this.tabService.addTab(
                                    'Contract:' + ' ' + contractNumber,
                                    ['/search/contract', fiscalYear, contractNumber]
                                );
                            }
                        }
                    });
            });
    }

    bind(model: ContractModel)    {
        this.contractNumber = this.model.contractNumber;
        this.selectedFiscalYear = this.model.fiscalYear;
        this.originalAmountTotal = 0;
        this.adjustmentAmountTotal = 0;
        this.paymentAmountTotal = 0;
        this.balanceAmountTotal = 0;

        this.model.accounting.forEach((entry) => {
            this.originalAmountTotal += entry.originalAmount;
            this.adjustmentAmountTotal += entry.adjustmentAmount;
            this.paymentAmountTotal += entry.paymentAmount;
            this.balanceAmountTotal += entry.balanceAmount;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

@Component({
    selector: 'contract-home',
    template: '<router-outlet></router-outlet>'
})
export class ContractHomeComponent { }