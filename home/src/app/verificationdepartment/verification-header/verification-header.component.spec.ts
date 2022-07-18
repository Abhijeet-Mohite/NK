import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationHeaderComponent } from './verification-header.component';

describe('VerificationHeaderComponent', () => {
  let component: VerificationHeaderComponent;
  let fixture: ComponentFixture<VerificationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
