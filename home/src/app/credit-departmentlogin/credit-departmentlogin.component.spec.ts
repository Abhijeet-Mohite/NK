import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDepartmentloginComponent } from './credit-departmentlogin.component';

describe('CreditDepartmentloginComponent', () => {
  let component: CreditDepartmentloginComponent;
  let fixture: ComponentFixture<CreditDepartmentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDepartmentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditDepartmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
