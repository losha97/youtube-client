import { TestBed } from '@angular/core/testing';

import { FilterByViewsService } from './filter-by-views.service';

describe('FilterByViewsService', () => {
  let service: FilterByViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
