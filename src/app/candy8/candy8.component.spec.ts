import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy8Component } from './candy8.component';

describe('Candy8Component', () => {
  let component: Candy8Component;
  let fixture: ComponentFixture<Candy8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
