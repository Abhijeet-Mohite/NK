import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSidebarComponent } from './verification-sidebar.component';

describe('VerificationSidebarComponent', () => {
  let component: VerificationSidebarComponent;
  let fixture: ComponentFixture<VerificationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
