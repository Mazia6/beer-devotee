import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/fraternitedelize/services';
import { ToastrService } from 'ngx-toastr';


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
    private toastr: ToastrService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = this.userService.getAllUsers()
  }

  welcome() {
    this.toastr.success(
      'Como é bom te ver aqui!',
      'Oieeee'
    )
  }

}
