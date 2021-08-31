import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  @Output() searchClick = new EventEmitter();

  onSubmit() {
    this.searchClick.emit();
  }

}
