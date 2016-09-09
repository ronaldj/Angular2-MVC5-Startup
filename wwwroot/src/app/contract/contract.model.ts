import { VendorModel } from '../vendor/vendor.model';
import { AccountingModel} from '../accounting/accounting.model';

export class ContractModel {
    public fiscalYear: number;
    public contractNumber: string;
    public description: string;
    public contractPeriodStart: string;
    public contractPeriodEnd: string;
    public estimatedAmount: number;
    public cityContractNumber: string;
    public district: string;
    public contractType: string;
    public vendor: VendorModel;
    public accounting: Array<AccountingModel>;
    public notepad: string;

    constructor();

    /**
     * Initialize with a json string
     * @param jsonString
     */
    constructor(jsonString: string)
    constructor(obj?: any) {
        if (obj) {
            if (obj.constructor === String) {
                let d = JSON.parse(obj);

                if (d) {
                    //do web api json to model mapping here
                    this.fiscalYear = d.fiscalYear;
                    this.contractNumber = d.contractNumber;
                    this.description = d.description;
                    this.contractPeriodStart = d.contractPeriodStart;
                    this.contractPeriodEnd = d.contractPeriodEnd;
                    this.estimatedAmount = d.estimatedAmount;
                    this.vendor = new VendorModel();

                    this.vendor.vendorNumber = d.vendor.vendorNumber;
                    this.vendor.vendorSuffix = d.vendor.vendorSuffix;
                    this.vendor.name = d.vendor.name;

                    this.accounting = new Array();

                    for (var i = 0; i < d.accounting.length; i++) {
                        let entry = d.accounting[i];
                        let accountingModel = new AccountingModel();

                        accountingModel.documentNumber = entry.documentNumber;
                        accountingModel.documentSuffix = entry.documentSuffix;
                        accountingModel.originalAmount = entry.originalAmount;
                        accountingModel.adjustmentAmount = entry.adjustmentAmount;
                        accountingModel.paymentAmount = entry.paymentAmount;
                        accountingModel.balanceAmount = entry.balanceAmount;

                        this.accounting.push(accountingModel);
                    }

                    this.notepad = d.notepad;
                }
            }
        }
    }
}