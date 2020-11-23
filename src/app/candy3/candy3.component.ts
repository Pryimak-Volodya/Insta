import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candy3',
  templateUrl: './candy3.component.html',
  styleUrls: ['./candy3.component.css']
})
export class Candy3Component implements OnInit {
  public content = 'content';
  public logo = 'logo';
  public candy = 'candy';
  public for = 'for';
  public snack = 'snack';
  public img = 'candyPhoto';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
