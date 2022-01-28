import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContactSupportComponent } from './dialog-contact-support.component';

describe('DialogContactSupportComponent', () => {
  let component: DialogContactSupportComponent;
  let fixture: ComponentFixture<DialogContactSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContactSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContactSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
