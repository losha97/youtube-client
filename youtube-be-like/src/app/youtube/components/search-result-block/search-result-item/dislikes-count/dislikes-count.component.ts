import { Component, Input } from '@angular/core';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { CardInter } from '../../../../../Cards';

@Component({
  selector: 'app-dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.scss'],
})
export class DislikesCountComponent {

  @Input()
  card!: CardInter;

  faHeartBroken = faHeartBroken;

}
