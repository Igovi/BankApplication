import { GenericRequest } from '../genericRequest/generic.request';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../../models/client.model';

@Injectable({
    providedIn : 'root'
})
export class UserProvider extends GenericRequest<Client> {
    constructor(http: HttpClient) {
        super('clients', http);
    }
}
