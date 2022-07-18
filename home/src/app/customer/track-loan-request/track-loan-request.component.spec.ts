import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLoanRequestComponent } from './track-loan-request.component';

describe('TrackLoanRequestComponent', () => {
  let component: TrackLoanRequestComponent;
  let fixture: ComponentFixture<TrackLoanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackLoanRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackLoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
