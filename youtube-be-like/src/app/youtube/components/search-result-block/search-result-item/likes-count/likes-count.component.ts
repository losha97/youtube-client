import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CardInter } from '../../../../../Cards';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss'],
})
export class LikesCountComponent {

  @Input()
  card!: CardInter;

  faHeart = faHeart;

}
