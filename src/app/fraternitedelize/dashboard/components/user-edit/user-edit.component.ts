import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/fraternitedelize/services';
import { UserDataService } from 'src/app/fraternitedelize/services/user-data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/fraternitedelize/shared';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  users: Observable<any>;

  key: string = '';
  userKey = '';

  constructor(
    private toastr: ToastrService,
    private userService: UsersService,
    private userDataServce: UserDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    this.userDataServce.currentUser.subscribe(data => {
      if (data.user && data.key) {
        this.user.name = data.user.name;
        this.user.cpf = data.user.cpf;
        this.user.email = data.user.email;
        this.user.phone = data.user.phone;
        this.user.genre = data.user.genre;
        this.user.points = data.user.points;
        this.user.bornDate = data.user.bornDate;
        this.key = data.key;
      }
    })

    this.userKey = this.router.url.substring(11, 31);

    this.getUserInfo();
  }

  getUserInfo() {
    this.users = this.userService.getAllUsers();
  }

  onSubmit(user: User, key: string) {
    this.userService.updateUser(user, key);
    this.toastr.warning(
      'Informações atualizadas com sucesso!',
      'Usuário atualizado!'
    )
  }

}
