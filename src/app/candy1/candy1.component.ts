import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candy1',
  templateUrl: './candy1.component.html',
  styleUrls: ['./candy1.component.css']
})
export class Candy1Component implements OnInit {
  public content = 'content';
  public logo = 'logo';
  public candy = 'candy';
  public for = 'for';
  public snack = 'snack';
  constructor() { }

  ngOnInit(): void {
  }

}
