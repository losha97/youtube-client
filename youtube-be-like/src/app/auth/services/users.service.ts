import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInter } from '../../User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  defaultUrl: string = 'http://localhost:5000';

  private apiUrl: string = `${this.defaultUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInter[]> {
    return this.http.get<UserInter[]>(this.apiUrl);
  }

  loginFilter(firstName: string, password: string): Observable<UserInter[]> {
    let loginQueryUrl: string = `?first_name=${firstName}&password=${password}`;
    let fullFilterUrl = this.apiUrl.concat(loginQueryUrl);
    return this.http.get<UserInter[]>(fullFilterUrl);
  }
}
