import { Component, OnInit, Input } from '@angular/core';
import { CardInter } from '../../Cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: CardInter;

  // constructor() { }

  ngOnInit(): void {
    console.log('no empty methods');
    console.log(this.card);
  }

}
