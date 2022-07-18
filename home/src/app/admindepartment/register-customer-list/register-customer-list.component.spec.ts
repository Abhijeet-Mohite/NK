import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerListComponent } from './register-customer-list.component';

describe('RegisterCustomerListComponent', () => {
  let component: RegisterCustomerListComponent;
  let fixture: ComponentFixture<RegisterCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
