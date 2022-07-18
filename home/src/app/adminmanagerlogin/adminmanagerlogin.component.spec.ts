import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagerloginComponent } from './adminmanagerlogin.component';

describe('AdminmanagerloginComponent', () => {
  let component: AdminmanagerloginComponent;
  let fixture: ComponentFixture<AdminmanagerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmanagerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmanagerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
