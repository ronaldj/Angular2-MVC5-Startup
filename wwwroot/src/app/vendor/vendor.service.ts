import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VendorModel } from './vendor.model';

@Injectable()
export class VendorService {

    getVendor(vendorNumber: string, vendorSuffix: string) {
        //values here should come from the json web api
        if (!vendorNumber)
            return Promise.resolve(null);

        let jsonString = `{"vendorNumber": "` + vendorNumber + `", "vendorSuffix": "` + vendorSuffix + `"}`;

        return Promise.resolve(new VendorModel(jsonString));
    }
}