import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditGetListComponent } from './credit-get-list.component';

describe('CreditGetListComponent', () => {
  let component: CreditGetListComponent;
  let fixture: ComponentFixture<CreditGetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditGetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditGetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
