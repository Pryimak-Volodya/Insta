import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy1Component } from './candy1.component';

describe('Candy1Component', () => {
  let component: Candy1Component;
  let fixture: ComponentFixture<Candy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
