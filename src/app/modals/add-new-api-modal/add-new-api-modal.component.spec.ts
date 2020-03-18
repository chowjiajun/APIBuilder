import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewApiModalComponent } from './add-new-api-modal.component';

describe('AddNewApiModalComponent', () => {
  let component: AddNewApiModalComponent;
  let fixture: ComponentFixture<AddNewApiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewApiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewApiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
