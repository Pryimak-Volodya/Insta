import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy4Component } from './candy4.component';

describe('Candy4Component', () => {
  let component: Candy4Component;
  let fixture: ComponentFixture<Candy4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
