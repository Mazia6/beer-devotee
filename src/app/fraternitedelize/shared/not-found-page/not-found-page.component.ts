import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {
  dash;
  init;

  constructor(private router: Router) { }

  ngOnInit() {
    if  (this.router.url.substring(0, 5) === '/dash') {
      this.dash = true;
    } else if (this.router.url.substring(0, 5) === '/frat') {
      this.dash = false;
    } else {
      this.dash = false;
    }
  }

}
