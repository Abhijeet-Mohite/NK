import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountdepartmentloginComponent } from './accountdepartmentlogin.component';

describe('AccountdepartmentloginComponent', () => {
  let component: AccountdepartmentloginComponent;
  let fixture: ComponentFixture<AccountdepartmentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountdepartmentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountdepartmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
