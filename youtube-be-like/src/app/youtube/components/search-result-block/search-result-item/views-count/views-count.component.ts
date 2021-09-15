import { Component, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { CardInter } from '../../../../../Cards';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss'],
})
export class ViewsCountComponent {

  @Input()
  card!: CardInter;

  faEye = faEye;

}
