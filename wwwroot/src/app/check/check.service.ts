import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CheckModel } from './check.model';

@Injectable()
export class CheckService {

    getCheck(bankNumber: string, checkNumber: string) {
        //values here should come from the json web api
        if (!checkNumber)
            return Promise.resolve(null);

        let jsonString = `{"bankNumber": "` + bankNumber + `", 
                            "checkNumber": "` + checkNumber + `", 
                            "vendor": { 
                                "name": "XYZ Trans, LLC"
                            },
                            "issued": "10/26/2004",
                            "status": "voided",
                            "transactionCode": "264",
                            "postDate": "2015",
                            "documentNumber": "ZU150579673",
                            "documentSuffix": "02",
                            "fiscalPeriodMonth": "13",
                            "fiscalPeriodYear": "2015",
                            "description": "-",
                            "amount": -5397.00
                          }`;

        return Promise.resolve(new CheckModel(jsonString));
    }

    page(direction: number, bankNumber: string, checkNumber: string) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new CheckModel(this._getPrevFrom(bankNumber, checkNumber)));
        }

        if (direction == 1) {
            //page right
            return Promise.resolve(new CheckModel(this._getNextFrom(bankNumber, checkNumber)));
        }
    }

    _getNextFrom(bankNumber: string, checkNumber: string) {
        let jsonString = `{
                    "bankNumber": ` + bankNumber + `,
                    "checkNumber": "` + 'next' + `"}`;

        return jsonString;
    }

    _getPrevFrom(bankNumber: string, checkNumber: string) {
        let jsonString = `{
                    "bankNumber": ` + bankNumber + `,
                    "checkNumber": "` + 'prev' + `"}`;

        return jsonString;
    }
}