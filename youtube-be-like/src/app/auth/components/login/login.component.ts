import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  login!: string;

  password!: string;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    console.log(window.location.origin);
  }

  onSubmit() {
    this.userService.loginFilter(this.login, this.password).subscribe();
  }

}
