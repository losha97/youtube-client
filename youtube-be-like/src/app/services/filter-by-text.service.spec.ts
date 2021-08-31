import { TestBed } from '@angular/core/testing';

import { FilterByTextService } from './filter-by-text.service';

describe('FilterByTextService', () => {
  let service: FilterByTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
