import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  public chupRed = 'chup red';
  public chupOrange = 'chup orange';
  public img = 'candyPhoto';
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
