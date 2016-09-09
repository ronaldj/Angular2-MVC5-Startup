import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceModel } from './invoice.model';

@Injectable()
export class InvoiceService {

    getInvoice(invoiceNumber: string) {
        //values here should come from the json web api
        if (!invoiceNumber)
            return Promise.resolve(null);

        let jsonString = `{"invoiceNumber": ` + invoiceNumber + `, 
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

        return Promise.resolve(new InvoiceModel(jsonString));
    }
}