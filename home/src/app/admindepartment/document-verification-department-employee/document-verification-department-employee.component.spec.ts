import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVerificationDepartmentEmployeeComponent } from './document-verification-department-employee.component';

describe('DocumentVerificationDepartmentEmployeeComponent', () => {
  let component: DocumentVerificationDepartmentEmployeeComponent;
  let fixture: ComponentFixture<DocumentVerificationDepartmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentVerificationDepartmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentVerificationDepartmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
