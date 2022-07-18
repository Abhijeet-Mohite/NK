import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdepartmentloginComponent } from './salesdepartmentlogin.component';

describe('SalesdepartmentloginComponent', () => {
  let component: SalesdepartmentloginComponent;
  let fixture: ComponentFixture<SalesdepartmentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdepartmentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesdepartmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
