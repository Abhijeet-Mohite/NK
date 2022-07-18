import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulladminComponent } from './fulladmin.component';

describe('FulladminComponent', () => {
  let component: FulladminComponent;
  let fixture: ComponentFixture<FulladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
