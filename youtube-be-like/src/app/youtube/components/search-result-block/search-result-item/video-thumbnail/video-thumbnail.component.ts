import { Component, Input } from '@angular/core';
import { CardInter } from '../../../../../Cards';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {

  @Input()
  card!: CardInter;

}
