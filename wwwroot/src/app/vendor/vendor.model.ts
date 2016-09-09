export class VendorModel {
    public vendorNumber: string;
    public vendorSuffix: string;
    public name: string;
    public voucher: string;
    public voucherSuffix: string;
    public created: string;
    public check: string;
    public bank: string;
    public posted: string;
    public cleared: string;
    public amount: number;

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
                    this.vendorNumber = d.vendorNumber;
                    this.vendorSuffix = d.vendorSuffix;
                }
            } else {
                this.vendorNumber = obj.vendorNumber;
                this.vendorSuffix = obj.vendorSuffix;
            }
        }
    }
}