import { Client } from './../../../models/client.model';
import { GenericRequest } from '../genericRequest/generic.request';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class ClientProvider extends GenericRequest<any> {
    constructor(http: HttpClient) {
        super('clients', http);
    }
}
