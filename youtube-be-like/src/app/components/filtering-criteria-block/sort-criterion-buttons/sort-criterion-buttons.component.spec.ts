import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCriterionButtonsComponent } from './sort-criterion-buttons.component';

describe('SortCriterionButtonsComponent', () => {
  let component: SortCriterionButtonsComponent;
  let fixture: ComponentFixture<SortCriterionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortCriterionButtonsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCriterionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
