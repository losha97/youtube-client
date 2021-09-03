import { Component, Input } from '@angular/core';
import { CardInter } from 'src/app/Cards';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent {

  faArrowLeft = faArrowLeft;

  @Input()
  card!: CardInter;

}
