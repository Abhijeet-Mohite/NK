import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcustomerComponent } from './fullcustomer.component';

describe('FullcustomerComponent', () => {
  let component: FullcustomerComponent;
  let fixture: ComponentFixture<FullcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
