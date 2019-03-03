import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService, RewardsService, TokenService } from 'src/app/fraternitedelize/services';
import { Router } from '@angular/router';
import { User } from 'src/app/fraternitedelize/shared';
import * as moment from 'moment';
import { UserDataService } from 'src/app/fraternitedelize/services/user-data.service';
import { GetPointsService } from 'src/app/fraternitedelize/services/get-points.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.css']
})
export class GetPointsComponent implements OnInit {
  /* admin-passwd */
  password = '';
  tokens: Observable<any>;
  adminPswd = '141320141234'

  lat
  long

  moemaLat = -23.610792;
  moemaLong = -46.672676;
  inMoema;

  pinheirosLat = -23.561270;
  pinheirosLong = -46.675804;
  inPinheiros;

  inUnity;

  pointsPage = true;
  isNewDay: boolean;
  qrCode;

  key: string = '';

  userUrl = '';
  users: Observable<any>;

  pointsSum = 100;
  keepSum;

  pointsUpdate;
  tomorrow;

  user: User;

  constructor(
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router,
    private userService: UsersService,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.tokens = this.tokenService.getToken();
    this.user = new User();
    this.userDataService.currentUser.subscribe(data => {

      if (data.user && data.key) {
        this.key = data.key;
        this.user.bornDate = data.user.bornDate;
        this.user.cpf = data.user.cpf;
        this.user.email = data.user.email;
        this.user.genre = data.user.genre;
        this.user.name = data.user.name;
        this.user.phone = data.user.phone;
        this.user.points = data.user.points;
      }
    })

    this.userUrl = this.router.url.substring(11, 31);


    this.getUserLocation();
    this.getUserInfo();
    this.getTomorrow();
  }

  updatePoints(user: User, key: string) {
    this.userService.updateUser(user, key);
    this.toastr.success(
      'Você resgatou seus pontos diárioas',
      'Parabéns pelo resgate'
    )
  }

  getUserInfo() {
    this.users = this.userService.getAllUsers()
  }

  getTomorrow() {
    this.pointsUpdate = moment().format('DD MM YYYY');
    let getTomorrow = moment().add(1, 'days').set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).calendar();
    this.tomorrow = getTomorrow;
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      })
      if (this.moemaLat === this.lat && this.moemaLong === this.long) {
        this.inMoema = true;
        this.inPinheiros = false;
        this.inUnity = true
      } else if (this.pinheirosLat === this.lat && this.pinheirosLong === this.long) {
        this.inPinheiros = true;
        this.inMoema = false;
        this.inUnity = true
      } else {
        this.inMoema = false;
        this.inPinheiros = false;
        this.inUnity = false;
      }
    }
  }

  deleteToken(key: string) {
    this.tokenService.deleteToken(key);
  }
}
