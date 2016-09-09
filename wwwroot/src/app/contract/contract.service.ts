import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContractModel } from './contract.model';

@Injectable()
export class ContractService {

    getContract(fiscalYear: number, contractNumber: string) {
        //values here should come from the json web api
        if (!contractNumber)
            return Promise.resolve(null);

        let jsonString = `{"fiscalYear": ` + fiscalYear + `, 
                            "contractNumber": "` + contractNumber + `",
                            "description": "Contract description goes here",
                            "contractPeriodStart": "07/01/2014",
                            "contractPeriodEnd": "06/30/2016",
                            "estimatedAmount": 100000.00,
                            "cityContractNumber": "0000001",
                            "district": "65",
                            "contractType": "Estimate / Professional Services",
                            "vendor": {
                                        "vendorNumber": "XYZ000001",
                                        "vendorSuffix": "01",
                                        "name": "XYZ Corp" 
                                      },
                            "accounting": [
                                {
                                  "documentNumber": "WR16000001",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                },
                                {
                                  "documentNumber": "WR16000002",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                }
                            ],
                            "notepad": "some text"
                        }`;

        return Promise.resolve(new ContractModel(jsonString));
    }

    page(direction: number, fiscalYear: number, contractNumber: string) {
        if (direction == -1) {
            //page left
            return Promise.resolve(new ContractModel(this._getPrevFrom(fiscalYear, contractNumber)));
        }

        if (direction == 1) {
            //page right
            return Promise.resolve(new ContractModel(this._getNextFrom(fiscalYear, contractNumber)));
        }
    }

    _getNextFrom(fiscalYear: number, contractNumber: string) {
        let jsonString = `{"fiscalYear": ` + fiscalYear + `, 
                            "contractNumber": "` + 'next' + `",
                            "description": "Contract description goes here",
                            "contractPeriodStart": "07/01/2014",
                            "contractPeriodEnd": "06/30/2016",
                            "estimatedAmount": 100000.00,
                            "cityContractNumber": "0000001",
                            "district": "65",
                            "contractType": "Estimate / Professional Services",
                            "vendor": {
                                        "vendorNumber": "XYZ000001",
                                        "vendorSuffix": "01",
                                        "name": "XYZ Corp" 
                                      },
                            "accounting": [
                                {
                                  "documentNumber": "WR16000001",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                },
                                {
                                  "documentNumber": "WR16000002",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                }
                            ],
                            "notepad": "some text"
                        }`;

        return jsonString;
    }

    _getPrevFrom(fiscalYear: number, contractNumber: string) {
        let jsonString = `{"fiscalYear": ` + fiscalYear + `, 
                            "contractNumber": "` + 'prev' + `",
                            "description": "Contract description goes here",
                            "contractPeriodStart": "07/01/2014",
                            "contractPeriodEnd": "06/30/2016",
                            "estimatedAmount": 100000.00,
                            "cityContractNumber": "0000001",
                            "district": "65",
                            "contractType": "Estimate / Professional Services",
                            "vendor": {
                                        "vendorNumber": "XYZ000001",
                                        "vendorSuffix": "01",
                                        "name": "XYZ Corp" 
                                      },
                            "accounting": [
                                {
                                  "documentNumber": "WR16000001",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                },
                                {
                                  "documentNumber": "WR16000002",
                                  "documentSuffix": "01",
                                  "originalAmount": 1270.00,
                                  "adjustmentAmount": 0.00,
                                  "paymentAmount": 1270.00,
                                  "balanceAmount": 0.00
                                }
                            ],
                            "notepad": "some text"
                        }`;

        return jsonString;
    }
}