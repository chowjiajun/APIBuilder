import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAccordianComponent } from './api-accordian.component';

describe('ApiAccordianComponent', () => {
  let component: ApiAccordianComponent;
  let fixture: ComponentFixture<ApiAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
