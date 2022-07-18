import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEligibalCasesComponent } from './non-eligibal-cases.component';

describe('NonEligibalCasesComponent', () => {
  let component: NonEligibalCasesComponent;
  let fixture: ComponentFixture<NonEligibalCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEligibalCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonEligibalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
