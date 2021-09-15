import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setting-button',
  templateUrl: './setting-button.component.html',
  styleUrls: ['./setting-button.component.scss'],
})
export class SettingButtonComponent {
  @Input() color: string | undefined;

  @Output() btnClick = new EventEmitter();

  faSlidersH = faSlidersH;

  onClick() {
    this.btnClick.emit();
  }
}
