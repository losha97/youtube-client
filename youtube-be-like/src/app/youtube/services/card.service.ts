import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardInter } from 'src/app/Cards';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  getCard(id: number, cards: CardInter[]): Observable<CardInter> {
    const card = cards.find((c) =>  c.id === id)!;
    return of(card);
  }
}
