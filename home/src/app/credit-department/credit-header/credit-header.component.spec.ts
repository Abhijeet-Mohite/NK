import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditHeaderComponent } from './credit-header.component';

describe('CreditHeaderComponent', () => {
  let component: CreditHeaderComponent;
  let fixture: ComponentFixture<CreditHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
