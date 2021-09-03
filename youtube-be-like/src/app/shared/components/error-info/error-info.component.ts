import { Component } from '@angular/core';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss'],
})
export class ErrorInfoComponent {
  faFrown = faFrown;

}
