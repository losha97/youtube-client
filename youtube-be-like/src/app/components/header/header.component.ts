import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSlidersH, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faYoutube = faYoutube;

  faSlidersH = faSlidersH;

  faUserCircle = faUserCircle;

  userName: string = 'your name';

  // constructor() { }

  ngOnInit(): void {
    console.log('no empty methods');
  }

}
