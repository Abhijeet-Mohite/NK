import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsalesComponent } from './fullsales.component';

describe('FullsalesComponent', () => {
  let component: FullsalesComponent;
  let fixture: ComponentFixture<FullsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
