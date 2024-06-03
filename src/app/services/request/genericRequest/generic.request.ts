import { Observable } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Inject, Injectable } from "@angular/core";
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl


@Injectable()
export class GenericRequest<T> {
    constructor(
        @Inject(String) private path: string,
        private http: HttpClient,
    ) {}

    getUrl(): string{
        return `${API_URL}/${this.path}`;
    }

    getAllGeneric(): Observable<T> {
        const URL = this.getUrl();
        return this.http.get<T>(URL);
    }

    getByIdGeneric(id: number): Observable<T> {
        const URL = this.getUrl();
        return this.http.get<T>(URL + '/' + id);
    }

    postGeneric(body: any): Observable<T> {
        const URL = this.getUrl();
        return this.http.post<T>(URL,body);
    }

    putGeneric(body: any,id: number): Observable<T> {
        const URL = this.getUrl();
        return this.http.put<T>(URL,body);
    }
    DeleteGeneric(id: number): Observable<T> {
        const URL = this.getUrl();
        return this.http.delete<T>(URL + '/' + id);
    }

}
    
