import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContactComponent } from './dialog-contact.component';

describe('DialogContactComponent', () => {
  let component: DialogContactComponent;
  let fixture: ComponentFixture<DialogContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
