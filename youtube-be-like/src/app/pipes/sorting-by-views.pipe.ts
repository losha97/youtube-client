import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingByViews',
})
export class SortingByViewsPipe implements PipeTransform {
  // constructor(private someservice: Someservice) {

  // }

  transform(value: any): unknown {
    return value;
  }

}
