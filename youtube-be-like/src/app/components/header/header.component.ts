import { Component } from '@angular/core';
import { FilteringCriteriaBlockDisplayService } from 'src/app/services/filtering-criteria-block-display.service';
import { SearchResultBlockDisplayService } from 'src/app/services/search-result-block-display.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  showFilteringCriteriaBlock!: boolean;

  showSearchResultBlock!: boolean;

  subscription: Subscription;

  srbsubscription: Subscription;

  constructor(private filteringCriteriaBlockDisplayService: FilteringCriteriaBlockDisplayService, private searchResultBlockDisplayService: SearchResultBlockDisplayService) {
    this.subscription = this.filteringCriteriaBlockDisplayService.onToggle().subscribe((value) => {this.showFilteringCriteriaBlock = value;});
    this.srbsubscription = this.searchResultBlockDisplayService.onToggle().subscribe((value) => {this.showSearchResultBlock = value;});
  }

  toggleShowFilteringCriteriaBlock() {
    this.filteringCriteriaBlockDisplayService.toggleShowCriteriaBlock();
  }

  clickSearchResultBlock() {
    this.searchResultBlockDisplayService.toggleShowSearchResultBlock();
  }
}
