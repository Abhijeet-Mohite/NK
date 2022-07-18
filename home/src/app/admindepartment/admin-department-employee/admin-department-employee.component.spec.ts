import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentEmployeeComponent } from './admin-department-employee.component';

describe('AdminDepartmentEmployeeComponent', () => {
  let component: AdminDepartmentEmployeeComponent;
  let fixture: ComponentFixture<AdminDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
