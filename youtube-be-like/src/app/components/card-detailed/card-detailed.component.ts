import { Component, OnInit, Input } from '@angular/core';
import { faEye, faHeart, faHeartBroken, faClone } from '@fortawesome/free-solid-svg-icons';
import { CardInter } from '../../Cards';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent implements OnInit {
  @Input() card: CardInter;

  faEye = faEye;

  faHeart = faHeart;

  faHeartBroken = faHeartBroken;

  faClone = faClone;

  viewers: number = 1000;

  likes: number = 500;

  dislikes: number = 100;

  clones: number = 50;


  // constructor() { }

  ngOnInit(): void {
    console.log('no empty methods');
  }

}
