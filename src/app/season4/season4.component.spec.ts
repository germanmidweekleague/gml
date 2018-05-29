import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Season4Component } from './season4.component';

describe('Season4Component', () => {
  let component: Season4Component;
  let fixture: ComponentFixture<Season4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Season4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
