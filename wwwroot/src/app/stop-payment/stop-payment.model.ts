import { VendorModel } from '../vendor/vendor.model';

export class StopPaymentModel {
    public documentNumber: string;
    public checkNumber: string;
    public contactName: string;
    public email: string;
    public phoneNumber: string;
    public comment: string;
    public stopPaymentOption: StopPaymentOption;
    //Array<string> = [
    //    "StopPaymentOnly",
    //    "StopAndReissuePaymentToOriginalAddress",
    //    "StopAndReissuePaymentToNewAddress"
    //];
    public address: string;
    public city: string;
    public state: string;
    public zip: string;

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
                    this.documentNumber = d.documentNumber;
                    this.checkNumber = d.checkNumber;
                }
            } else {
                this.documentNumber = obj.documentNumber;
                this.checkNumber = obj.checkNumber;
            }
        }
    }
}

export enum StopPaymentOption {
    StopPaymentOnly,
    StopAndReissuePaymentToOriginalAddress,
    StopAndReissuePaymentToNewAddress
}