import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterByTextService {
  private filteringText: string = '';

  private subject = new Subject<string>();

  add(text: string) {
    this.filteringText = text;
    this.subject.next(this.filteringText);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  clear() {
    this.filteringText = '';
  }
}
