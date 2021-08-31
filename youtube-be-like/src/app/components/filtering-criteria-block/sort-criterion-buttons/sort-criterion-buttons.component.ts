import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterByDateService } from 'src/app/services/filter-by-date.service';
import { FilterByViewsService } from 'src/app/services/filter-by-views.service';

@Component({
  selector: 'app-sort-criterion-buttons',
  templateUrl: './sort-criterion-buttons.component.html',
  styleUrls: ['./sort-criterion-buttons.component.scss'],
})
export class SortCriterionButtonsComponent {

  ascending!: boolean;

  dateAscending!: boolean;

  ascDesc!: string;

  dateAscDesc!: string;

  sortSubscription: Subscription;

  dateSubscription: Subscription;

  constructor(private filterByViewsService: FilterByViewsService, private filterByDateService: FilterByDateService) {
    this.sortSubscription = this.filterByViewsService.onToggle().subscribe((value) => {this.ascending = value;});
    this.dateSubscription = this.filterByDateService.onToggle().subscribe((value) => {this.dateAscending = value;});

  }

  filterByViews() {
    this.filterByViewsService.toggleShowSearchResultBlock();
    // this.ascending = !this.ascending;
    this.ascDesc = this.ascending ? 'ascending' : 'descending';
  }

  filterByDate() {
    this.filterByDateService.toggleShowSearchResultBlock();
    this.dateAscDesc = this.dateAscending ? 'ascending' : 'descending';
  }

}
