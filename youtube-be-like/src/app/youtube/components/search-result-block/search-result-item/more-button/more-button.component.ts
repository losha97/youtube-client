import { Component, Input } from '@angular/core';
import { CardInter } from 'src/app/Cards';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent {

  @Input()
  card!: CardInter;

  detailedInfo() {

  }
}
