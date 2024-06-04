import { GenericRequest } from '../genericRequest/generic.request';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class ExtractProvider extends GenericRequest<any> {
    constructor(http: HttpClient) {
        super('extract', http);
    }

    getByClientId(id:number): Observable<any>{
        const URL = this.getUrl();
        return this.http.get<any>(URL  + '/client/ '+ id);
    }
}
