import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterByDateService {

  private sortAscending: boolean = false;

  private subject = new Subject<any>();

  toggleShowSearchResultBlock() {
    this.sortAscending = !this.sortAscending;
    this.subject.next(this.sortAscending);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
