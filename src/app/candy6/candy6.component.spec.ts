import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candy6Component } from './candy6.component';

describe('Candy6Component', () => {
  let component: Candy6Component;
  let fixture: ComponentFixture<Candy6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candy6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Candy6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
