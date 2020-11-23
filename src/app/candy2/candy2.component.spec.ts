import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy2Component } from './candy2.component';

describe('Candy2Component', () => {
  let component: Candy2Component;
  let fixture: ComponentFixture<Candy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
