import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCardSortingComponent } from './header-card-sorting.component';

describe('HeaderCardSortingComponent', () => {
  let component: HeaderCardSortingComponent;
  let fixture: ComponentFixture<HeaderCardSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCardSortingComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCardSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
