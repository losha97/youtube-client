import { Component, Input } from '@angular/core';
import { CardInter } from '../../../../Cards';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {

  @Input()
  card!: CardInter;

}
