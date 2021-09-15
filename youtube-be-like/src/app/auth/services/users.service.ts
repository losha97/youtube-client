import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInter } from '../models/User';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private currentUserSubject!: BehaviorSubject<UserInter>;

  public currentUser!: Observable<UserInter>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserInter>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserInter {
    return this.currentUserSubject ? this.currentUserSubject.value : this.currentUserSubject;
  }

  getUsers(): Observable<UserInter[]> {
    return this.http.get<UserInter[]>(`${environment.apiUrl}/users`);
  }

  login(email: string, password: string): Observable<UserInter> {
    return this.http.get<UserInter[]>(`${environment.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(map(users => {
        if (users.length) {
          localStorage.setItem('currentUser', JSON.stringify(users));
          this.currentUserSubject.next(users[0]);
        }
        return users[0];
      }));
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
}
