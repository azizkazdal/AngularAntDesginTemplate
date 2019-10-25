import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApiComponent } from './customer-api.component';

describe('CustomerApiComponent', () => {
  let component: CustomerApiComponent;
  let fixture: ComponentFixture<CustomerApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
