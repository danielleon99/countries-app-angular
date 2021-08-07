import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styles: [
  ]
})
export class CountryFormComponent {

  term: string = '';

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  search() {
    this.onEnter.emit(this.term)
  }

}
