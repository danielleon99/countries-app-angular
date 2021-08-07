import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Country } from "../interfaces";


@Injectable({
    providedIn: "root"
})
export class CountryService {

    private apiURL: string = 'https://restcountries.eu/rest/v2';

    constructor(
        private readonly httpClient: HttpClient
    ) { }

    searchCountry(term: string, route: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiURL}/${route}/${term}`)
    };
}