import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candy2',
  templateUrl: './candy2.component.html',
  styleUrls: ['./candy2.component.css']
})
export class Candy2Component implements OnInit {
  public content = 'content';
  public logo = 'logo';
  public candy = 'candy';
  public for = 'for';
  public snack = 'snack';
  public chupRed = 'chup red';
  public chupOrange = 'chup orange';
  public img = 'candyPhoto';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
