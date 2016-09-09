import { VendorModel } from '../vendor/vendor.model';

export class InvoiceModel {
    public invoiceNumber: string;
    public vendor: VendorModel;
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
                    this.invoiceNumber = d.invoiceNumber;

                    this.vendor = new VendorModel();
                    this.vendor.vendorNumber = d.vendor.vendorNumber;
                    this.vendor.vendorSuffix = d.vendor.suffix;
                    this.vendor.name = d.vendor.name;
                    this.vendor.voucher = d.vendor.voucher;
                    this.vendor.voucherSuffix = d.vendor.voucherSuffix;
                    this.vendor.created = d.vendor.created;
                    this.vendor.check = d.vendor.check;
                    this.vendor.bank = d.vendor.bank;
                    this.vendor.posted = d.vendor.posted;
                    this.vendor.cleared = d.vendor.cleared;
                    this.vendor.amount = d.vendor.amount;
                }
            } else {
                this.invoiceNumber = obj.number;
            }
        }
    }
}