import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopPaymentModel } from './stop-payment.model';

@Injectable()
export class StopPaymentService {

    getStopPayment(documentNumber: string, checkNumber: string) {
        //values here should come from the json web api
        if (!documentNumber)
            return Promise.resolve(null);

        let jsonString = `{"documentNumber": "` + documentNumber + `", 
                            "checkNumber": "` + checkNumber + `",
                            "vendor": { 
                                "vendorNumber": "XYZ00001",
                                "suffix": "01",
                                "name": "XYZ Corp",
                                "voucher": "WV0000001",
                                "voucherSuffix": "01",
                                "created": "05/31/2016",
                                "check": "500001",
                                "bank": "AB001",
                                "posted": "05/31/2016",
                                "cleared": "N/A",
                                "amount": 2600.00
                            }
                          }`;

        return Promise.resolve(new StopPaymentModel(jsonString));
    }

    submit(model: StopPaymentModel)
    {
        //console.log('Submitted stop payment w/ ' + model.stopPaymentOption);
    }
}