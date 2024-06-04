import { GenericRequest } from '../genericRequest/generic.request';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';

@Injectable({
    providedIn : 'root'
})
export class TransactionProvider extends GenericRequest<any> {
    constructor(http: HttpClient) {
        super('transactions', http);
    }
}
