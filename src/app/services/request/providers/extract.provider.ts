import { GenericRequest } from '../genericRequest/generic.request';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Extract } from '../../../models/extract.model';

@Injectable({
    providedIn : 'root'
})
export class UserProvider extends GenericRequest<any> {
    constructor(http: HttpClient) {
        super('extracts', http);
    }
}
