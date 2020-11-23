import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy3Component } from './candy3.component';

describe('Candy3Component', () => {
  let component: Candy3Component;
  let fixture: ComponentFixture<Candy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
