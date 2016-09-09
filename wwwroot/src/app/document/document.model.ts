import { VendorModel } from '../vendor/vendor.model';

export class DocumentModel {
    public fiscalYear: string;
    public documentNumber: string;
    public documentSuffix: string;

    public description: string;
    public startDate: string;
    public endDate: string;
    public transactionCode: string;
    public uoa: string;

    public locationCode: string;
    public quickCode: string;
    public objectCode: string;
    public activityCode: string;

    public vendorNumber: string;
    public vendorSuffix: string;
    public vendorName: string;
    public thirdPartyVendor: string;
    public contractNumber: string;
    public invoiceNumber: string;
    public invoiceDate: string;

    public checkNumber: string;
    public bankNumber: string;
    public singleCheckPayment: string;
    public holdCheckIndicator: string;

    public originalAmount: number;
    public adjustmentAmount: number;
    public liquidationAmount: number;
    public balanceAmount: number;
    public paymentAmount: number;
    public certifiedAmount: number;

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
                    this.documentNumber = d.documentNumber;
                    this.documentSuffix = d.documentSuffix;

                    this.description = d.description;
                    this.startDate = d.startDate;
                    this.endDate = d.endDate;
                    this.transactionCode = d.transactionCode;
                    this.uoa = d.uoa;

                    this.locationCode = d.locationCode;
                    this.quickCode = d.quickCode;
                    this.objectCode = d.objectCode;
                    this.activityCode = d.activityCode;

                    this.vendorNumber = d.vendorNumber;
                    this.vendorSuffix = d.vendorSuffix;
                    this.vendorName = d.vendorName;
                    this.thirdPartyVendor = d.thirdPartyVendor;
                    this.contractNumber = d.contractNumber;
                    this.invoiceNumber = d.invoiceNumber;
                    this.invoiceDate = d.invoiceDate;

                    this.checkNumber = d.checkNumber;
                    this.bankNumber = d.bankNumber;
                    this.singleCheckPayment = d.singleCheckPayment;
                    this.holdCheckIndicator = d.holdCheckIndicator;

                    this.originalAmount = d.originalAmount;
                    this.adjustmentAmount = d.adjustmentAmount;
                    this.liquidationAmount = d.liquidationAmount;
                    this.balanceAmount = d.balanceAmount;
                    this.paymentAmount = d.paymentAmount;
                    this.certifiedAmount = d.certifiedAmount;
                }
            } else {
                this.fiscalYear = obj.fiscalYear;
                this.documentNumber = obj.documentNumber;
                this.documentSuffix = obj.documentSuffix;
            }
        }
    }
}