import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyProgramDisplayComponent } from './study-program-display.component';

describe('StudyProgramComponent', () => {
  let component: StudyProgramDisplayComponent;
  let fixture: ComponentFixture<StudyProgramDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyProgramDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyProgramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
