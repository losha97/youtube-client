import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterByTextService } from '../services/filter-by-text.service';
import { CardInter } from '../Cards';

@Pipe({
  name: 'filterByInput',
  pure: false,
})
export class FilterByInputPipe implements PipeTransform {

  text!: string;

  textSubscription: Subscription;

  constructor(private filterByTextService: FilterByTextService) {
    this.textSubscription = this.filterByTextService.onToggle().subscribe((value) => this.text = value);
  }

  transform(allCards: CardInter[]) {
    if (!this.text) {
      return allCards;
    }
    return allCards.filter((card) => {
      return card.title.slice(0, this.text.length) === this.text;
    });
  }
}
