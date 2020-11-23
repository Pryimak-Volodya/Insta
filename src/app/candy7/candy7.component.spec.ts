import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy7Component } from './candy7.component';

describe('Candy7Component', () => {
  let component: Candy7Component;
  let fixture: ComponentFixture<Candy7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
