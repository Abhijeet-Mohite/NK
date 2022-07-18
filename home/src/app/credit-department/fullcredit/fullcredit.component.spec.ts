import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcreditComponent } from './fullcredit.component';

describe('FullcreditComponent', () => {
  let component: FullcreditComponent;
  let fixture: ComponentFixture<FullcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
