import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibalCasesComponent } from './eligibal-cases.component';

describe('EligibalCasesComponent', () => {
  let component: EligibalCasesComponent;
  let fixture: ComponentFixture<EligibalCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibalCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
