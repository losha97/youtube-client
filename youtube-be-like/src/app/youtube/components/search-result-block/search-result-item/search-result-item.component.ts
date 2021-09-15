import { Component, Input, OnInit } from '@angular/core';
import { CardInter } from '../../../../Cards';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {

  @Input() card!: CardInter;

  dateColor!: string;

  daysDiff!: number;

  calculateDiff(dateSent: any) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) / (1000 * 60 * 60 * 24));
  }

  ngOnInit(): void {
    this.daysDiff = this.calculateDiff(this.card.date);

    if (this.daysDiff < 7) {
      this.dateColor = 'blue';
    } else if (this.daysDiff >= 7 && this.daysDiff < 30) {
      this.dateColor = 'green';
    } else {
      this.dateColor = 'red';
    }
  }

}
