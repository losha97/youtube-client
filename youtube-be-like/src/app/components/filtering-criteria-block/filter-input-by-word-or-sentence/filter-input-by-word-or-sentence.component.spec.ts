import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInputByWordOrSentenceComponent } from './filter-input-by-word-or-sentence.component';

describe('FilterInputByWordOrSentenceComponent', () => {
  let component: FilterInputByWordOrSentenceComponent;
  let fixture: ComponentFixture<FilterInputByWordOrSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterInputByWordOrSentenceComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterInputByWordOrSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
