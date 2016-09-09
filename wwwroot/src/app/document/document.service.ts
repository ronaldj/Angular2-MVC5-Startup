import { Injectable } from '@angular/core';
import { DocumentModel } from './document.model';

@Injectable()
export class DocumentService {
    getDocument(number: string, suffix: string) {
        //values here should come from the json web api
        if (!number)
            return Promise.resolve(null);

        let jsonString = `{
                    "fiscalYear": 2016,
                    "documentNumber": "` + number + `",
                    "documentSuffix": "` + suffix + `",

                    "description": "9571736",
                    "startDate": "07/01/2014",
                    "endDate": "06/30/2016",
                    "transactionCode": "302",
                    "UOA": "402",

                    "locationCode": "M001",
                    "quickCode": "01001234",
                    "objectCode": "0000",
                    "activityCode": "0000",

                    "vendorNumber": "ABC123000",
                    "vendorSuffix": "01",
                    "vendorName": "XYZ Communications, Inc",
                    "thirdPartyVendor": "N/A",
                    "contractNumber": "9500000",
                    "invoiceNumber": "58168462",
                    "invoiceDate": "N/A",

                    "checkNumber": "9571736",
                    "bankNumber": "EF001",
                    "singleCheckPayment": "N/A",
                    "holdCheckIndicator": "N/A",

                    "originalAmount": 2200.00,
                    "adjustmentAmount": -2.34,
                    "liquidationAmount": -2197.66,
                    "balanceAmount": 0.00,
                    "paymentAmount": 2197.66,
                    "certifiedAmount": 5397.00
                }`;

        return Promise.resolve(new DocumentModel(jsonString));
    }

    page(direction: number, number: string, suffix: string) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new DocumentModel(this._getPrevFrom(number, suffix)));
        }

        if (direction == 1) {
            //page right
            return Promise.resolve(new DocumentModel(this._getNextFrom(number, suffix)));
        }
    }

    _getNextFrom(number: string, suffix: string) {
        let jsonString = `{
                "fiscalYear": 2016,
                "documentNumber": "` + 'next' + `",
                "documentSuffix": "` + 'next' + `",
                "vendor": { "contractNumber": 9500000, 
                            "invoiceNumber": 58168462 }
                }`;

        return jsonString;
    }

    _getPrevFrom(number: string, suffix: string) {
        let jsonString = `{
                "fiscalYear": 2016,
                "documentNumber": "` + 'prev' + `",
                "documentSuffix": "` + 'prev' + `",
                "vendor": { "contractNumber": 9500000, 
                            "invoiceNumber": 58168462 }
                }`;

        return jsonString;
    }
}