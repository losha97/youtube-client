import { Component, OnInit } from '@angular/core';
import { Cards } from '../../json-cards';
import { CardInter } from '../../Cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cards: CardInter[] = Cards;

  // constructor() { }

  ngOnInit(): void {
    console.log('no empty method');
  }

}
