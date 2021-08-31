import { TestBed } from '@angular/core/testing';

import { SearchResultBlockDisplayService } from './search-result-block-display.service';

describe('SearchResultBlockDisplayService', () => {
  let service: SearchResultBlockDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultBlockDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
