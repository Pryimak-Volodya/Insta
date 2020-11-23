import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy5Component } from './candy5.component';

describe('Candy5Component', () => {
  let component: Candy5Component;
  let fixture: ComponentFixture<Candy5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
