import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudyProgramComponent } from './edit-study-program.component';

describe('EditStudyProgramComponent', () => {
  let component: EditStudyProgramComponent;
  let fixture: ComponentFixture<EditStudyProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudyProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
