import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
    providedIn: "root"
})
export class CountryService {

    private apiURL: string = 'https://restcountries.eu/rest/v2';

    constructor(
        private readonly httpClient: HttpClient
    ) { }

    searchCountry(term: string): Observable<any> {
        return this.httpClient.get(`${this.apiURL}/name/${term}`).pipe(
            catchError(err => of([]))
        );
    }
}