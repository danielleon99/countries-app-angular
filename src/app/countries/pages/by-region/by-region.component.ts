import { Component } from '@angular/core';
import { Country } from '../../interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(
    private readonly countryService: CountryService
  ) { }

  search(term: string) {
    this.term = term;
    this.countryService.searchCountry(this.term, 'region').subscribe(resp => {
      this.error = false;
      this.countries = resp;
    },
      err => {
        this.error = true;
        this.countries = [];
      })
  };

}
