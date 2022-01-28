import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInputFormComponent } from './review-input-form.component';

describe('ReviewInputFormComponent', () => {
  let component: ReviewInputFormComponent;
  let fixture: ComponentFixture<ReviewInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
