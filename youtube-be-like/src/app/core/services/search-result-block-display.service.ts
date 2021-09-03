import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchResultBlockDisplayService {

  private showSearchResultBlock: boolean = false;

  private subject = new Subject<any>();

  toggleShowSearchResultBlock() {
    this.showSearchResultBlock = true;
    this.subject.next(this.showSearchResultBlock);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
