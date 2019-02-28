import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/fraternitedelize/services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/fraternitedelize/services/user-data.service';
import { User } from 'src/app/fraternitedelize/shared';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.css']
})
export class DashNavbarComponent implements OnInit {
  isColapsed = true;
  userInfo: Observable<any>;
  key: string = '';
  userUrl = '';


  constructor(
    private userService: UsersService,
    private userDataService: UserDataService,
    private route: Router
  ) { }

  ngOnInit() {
    this.userUrl = this.route.url.substring(11, 31);
    this.getUserInfo();
  }

  getUserInfo() {
    return this.userInfo = this.userService.getAllUsers()
  }

}
