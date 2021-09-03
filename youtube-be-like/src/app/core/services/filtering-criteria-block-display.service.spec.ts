import { TestBed } from '@angular/core/testing';

import { FilteringCriteriaBlockDisplayService } from './filtering-criteria-block-display.service';

describe('FilteringCriteriaBlockDisplayService', () => {
  let service: FilteringCriteriaBlockDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteringCriteriaBlockDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
