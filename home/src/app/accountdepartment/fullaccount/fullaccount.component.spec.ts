import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullaccountComponent } from './fullaccount.component';

describe('FullaccountComponent', () => {
  let component: FullaccountComponent;
  let fixture: ComponentFixture<FullaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
