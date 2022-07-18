import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDepartmentEmployeeComponent } from './account-department-employee.component';

describe('AccountDepartmentEmployeeComponent', () => {
  let component: AccountDepartmentEmployeeComponent;
  let fixture: ComponentFixture<AccountDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
