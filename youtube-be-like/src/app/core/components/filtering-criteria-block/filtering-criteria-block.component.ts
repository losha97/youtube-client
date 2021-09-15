import { Component } from '@angular/core';
import { FilteringCriteriaBlockDisplayService } from 'src/app/core/services/filtering-criteria-block-display.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {

  showFilteringCriteriaBlock!: boolean;

  subscription: Subscription;

  constructor(private filteringCriteriaBlockDisplayService: FilteringCriteriaBlockDisplayService) {
    this.subscription = this.filteringCriteriaBlockDisplayService.onToggle().subscribe((value) => {this.showFilteringCriteriaBlock = value;});
  }
}
