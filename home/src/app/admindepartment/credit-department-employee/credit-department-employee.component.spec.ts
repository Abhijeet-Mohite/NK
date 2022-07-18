import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDepartmentEmployeeComponent } from './credit-department-employee.component';

describe('CreditDepartmentEmployeeComponent', () => {
  let component: CreditDepartmentEmployeeComponent;
  let fixture: ComponentFixture<CreditDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
