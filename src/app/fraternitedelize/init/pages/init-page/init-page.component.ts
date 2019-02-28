import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/fraternitedelize/services';



@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.css']
})
export class InitPageComponent implements OnInit {
  inputCpf = '';
  key: string;
  users: Observable<any>;
  getedCpf;
  pVar;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = this.userService.getAllUsers()
  }

}
