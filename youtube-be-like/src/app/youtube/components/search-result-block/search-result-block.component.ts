import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../../core/services/search-result.service';
import { CardInter } from '../../../Cards';
import { Subscription } from 'rxjs';
import { SearchResultBlockDisplayService } from 'src/app/core/services/search-result-block-display.service';
import { FilterByViewsService } from 'src/app/core/services/filter-by-views.service';
import { FilterByDateService } from 'src/app/core/services/filter-by-date.service';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
})
export class SearchResultBlockComponent implements OnInit {

  cards: CardInter[] = [];

  showSearchResultBlock!: boolean;

  ascending!: boolean;

  dateAscending!: boolean;

  srbsubscription: Subscription;

  sortSubscription: Subscription;

  dateSubscription: Subscription;

  text!: string;

  constructor(private searchResultService: SearchResultService, private searchResultBlockDisplayService: SearchResultBlockDisplayService, private filterByViewsService: FilterByViewsService, private filterByDateService: FilterByDateService) {
    this.srbsubscription = this.searchResultBlockDisplayService.onToggle().subscribe((value) => {this.showSearchResultBlock = value;});
    this.sortSubscription = this.filterByViewsService.onToggle().subscribe((value) => {this.ascending = value; this.filterByViews();});
    this.dateSubscription = this.filterByDateService.onToggle().subscribe((value) => {this.dateAscending = value; this.filterByDate();});
  }

  calculateDiff(dateSent: any) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) / (1000 * 60 * 60 * 24));
  }

  ngOnInit(): void {
    this.searchResultService.getCards().subscribe((cards) => this.cards = cards);
  }

  filterByViews() {
    this.cards.sort((a, b) => this.ascending ? a.views - b.views : b.views - a.views);
  }

  filterByDate() {
    this.cards.sort((a, b) => this.dateAscending ? this.calculateDiff(a.date) - this.calculateDiff(b.date) : this.calculateDiff(b.date) - this.calculateDiff(a.date));
  }
}
