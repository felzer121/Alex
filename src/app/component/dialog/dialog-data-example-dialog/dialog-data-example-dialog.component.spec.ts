import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataExampleDialogComponent } from './dialog-data-example-dialog.component';

describe('DialogDataExampleDialogComponent', () => {
  let component: DialogDataExampleDialogComponent;
  let fixture: ComponentFixture<DialogDataExampleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataExampleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
