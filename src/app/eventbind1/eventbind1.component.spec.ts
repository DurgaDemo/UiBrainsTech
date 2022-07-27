import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbind1Component } from './eventbind1.component';

describe('Eventbind1Component', () => {
  let component: Eventbind1Component;
  let fixture: ComponentFixture<Eventbind1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventbind1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventbind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
