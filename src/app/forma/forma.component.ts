import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {
  public iphone = 'iphone';
  public desktop = 'content';
  public headbox = 'head';
  public user = 'user';
  public pointe = 'pointe';
  public pointbox = 'box_point';
  public footerbox = 'footer';
  public like = 'like';
  public comment = 'comment';
  public plane = 'plane';
  public navigatorbox = 'navi';
  public navipointe = 'navipointe';
  public flat = 'flat';
  public totallikes = 'tlike';
  public info = 'info';
  public infolike = 'infolike';
  public next = 'butNext';
  public prev = 'butPrev';
  public pagesId;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goPrevious() {
    let previousId = this.pagesId - 1;
    this.router.navigate(['/candy4', previousId]);
  }
  goNext() {
    let nextId = this.pagesId + 1;
    this.router.navigate(['/candy2', nextId]);
  }
}
