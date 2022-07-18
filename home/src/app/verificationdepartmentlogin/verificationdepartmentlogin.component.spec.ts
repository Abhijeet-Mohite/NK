import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationdepartmentloginComponent } from './verificationdepartmentlogin.component';

describe('VerificationdepartmentloginComponent', () => {
  let component: VerificationdepartmentloginComponent;
  let fixture: ComponentFixture<VerificationdepartmentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationdepartmentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationdepartmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
