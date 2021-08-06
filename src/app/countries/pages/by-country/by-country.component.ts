import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';

  constructor(
    private readonly countryService: CountryService
  ) { }

  search() {

    this.countryService.searchCountry(this.term).subscribe(resp => {
      if (resp.length == 0)
        swal('Error', 'error', 'error')
    });
  }

}
