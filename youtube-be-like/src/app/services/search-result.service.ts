import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardInter } from '../Cards';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private apiUrl = 'http://localhost:5000/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardInter[]> {
    return this.http.get<CardInter[]>(this.apiUrl);
  }
}
