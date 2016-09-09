import { Injectable } from '@angular/core';

@Injectable()
export class AccountingService {

    getFiscalYears() {
        //values here should come from the json web api
        let obj: any = `[2014,2015,2016]`;

        let d = JSON.parse(obj);

        let fiscalYears = d as Array<number>;

        return Promise.resolve(fiscalYears);
    }
}