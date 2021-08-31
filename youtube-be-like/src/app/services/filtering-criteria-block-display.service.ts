import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteringCriteriaBlockDisplayService {
  private showCriteriaBlock: boolean = false;

  private subject = new Subject<any>();
  // constructor() { }

  toggleShowCriteriaBlock() {
    this.showCriteriaBlock = !this.showCriteriaBlock;
    this.subject.next(this.showCriteriaBlock);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
