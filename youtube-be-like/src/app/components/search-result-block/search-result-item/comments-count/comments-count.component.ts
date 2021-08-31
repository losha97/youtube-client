import { Component, Input } from '@angular/core';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { CardInter } from '../../../../Cards';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.scss'],
})
export class CommentsCountComponent {

  @Input()
  card!: CardInter;

  faClone = faClone;

}
