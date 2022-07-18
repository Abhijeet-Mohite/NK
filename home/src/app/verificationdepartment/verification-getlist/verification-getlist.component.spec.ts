import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationGetlistComponent } from './verification-getlist.component';

describe('VerificationGetlistComponent', () => {
  let component: VerificationGetlistComponent;
  let fixture: ComponentFixture<VerificationGetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationGetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationGetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
