import { Component } from '@angular/core';
import { Country } from '../../interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  ) { }

  search(term: string) {
    this.term = term;
    this.countryService.searchCountry(this.term, 'capital').subscribe(resp => {
      this.error = false;
      this.countries = resp;
    },
      err => {
        this.error = true;
        this.countries = [];
      })
  };

}
