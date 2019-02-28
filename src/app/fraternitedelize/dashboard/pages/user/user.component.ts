import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsersService } from 'src/app/fraternitedelize/services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: Observable<any>;
  userUrl = '';

  constructor(
    private userService: UsersService,
    private route: Router,
    private vcr: ViewContainerRef
  ) { 
  }

  ngOnInit() {
    this.userUrl = this.route.url.substring(11);
    this.getUserInfo();
  }

  getUserInfo() {
    return this.user = this.userService.getAllUsers();
  }

}
