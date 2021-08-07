import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  ) { }

  search(term: string) {
    this.term = term;
    this.countryService.searchCountry(this.term).subscribe(resp => {
      this.error = false;
      this.countries = resp;
    },
      err => {
        this.error = true;
        this.countries = [];
      })
  }
}