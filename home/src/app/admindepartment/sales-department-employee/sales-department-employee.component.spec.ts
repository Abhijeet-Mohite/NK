import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDepartmentEmployeeComponent } from './sales-department-employee.component';

describe('SalesDepartmentEmployeeComponent', () => {
  let component: SalesDepartmentEmployeeComponent;
  let fixture: ComponentFixture<SalesDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
