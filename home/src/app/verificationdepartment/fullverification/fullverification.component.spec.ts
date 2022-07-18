import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullverificationComponent } from './fullverification.component';

describe('FullverificationComponent', () => {
  let component: FullverificationComponent;
  let fixture: ComponentFixture<FullverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
