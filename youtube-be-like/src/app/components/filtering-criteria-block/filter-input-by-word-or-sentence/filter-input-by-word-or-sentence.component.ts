import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterByTextService } from 'src/app/services/filter-by-text.service';

@Component({
  selector: 'app-filter-input-by-word-or-sentence',
  templateUrl: './filter-input-by-word-or-sentence.component.html',
  styleUrls: ['./filter-input-by-word-or-sentence.component.scss'],
})
export class FilterInputByWordOrSentenceComponent {

  text!: any;

  textSubscription: Subscription;

  constructor(private filterByTextService: FilterByTextService) {
    this.textSubscription = this.filterByTextService.onToggle().subscribe((value) => {this.text = value;});
  }

  filterByText() {
    this.filterByTextService.add(this.text);
  }
}
