import { VendorModel } from '../vendor/vendor.model';

export class CheckModel {
    public checkNumber: string;
    public bankNumber: string;
    public vendor: VendorModel;
    public issued: string;
    public status: string;
    public transactionCode: string;
    public postDate: string;
    public document: string;
    public documentSuffix: string;
    public documentReference: string;
    public fiscalPeriod: string;
    public description: string;
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
                    this.checkNumber = d.checkNumber;
                    this.bankNumber = d.bankNumber;
                }
            } else {
                this.checkNumber = obj.checkNumber;
                this.bankNumber = obj.bankNumber;
            }
        }
    }
}