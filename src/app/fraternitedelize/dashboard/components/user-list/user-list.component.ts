import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/fraternitedelize/services';
import { Observable } from 'rxjs';
import { User } from 'src/app/fraternitedelize/shared';
import { UserDataService } from 'src/app/fraternitedelize/services/user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  editing = false;
  users: Observable<any>;
  user: User;

  key: string = '';;

  constructor(
    private toastr: ToastrService,
    private userService: UsersService,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.userDataService.currentUser.subscribe(data => {
      if (data.user && data.key) {
        this.user.name = data.user.name
        this.user.cpf = data.user.cpf
        this.user.email = data.user.email
        this.user.phone = data.user.phone
        this.user.points = data.user.points
        this.user.genre = data.user.genre
        this.user.bornDate = data.user.bornDate
        this.key = data.key;
      }
    })

    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getAllUsers();
  }

  editUser(user: User, key: string) {
    this.userService.updateUser(user, key);
    this.toastr.warning(
      'Informações atualizadas com sucesso!',
      'Usuário atualizado!'
    )
    this.editing = false;
  }

  deleteUser(key: string) {
    this.userService.deleteUser(key);
    this.toastr.warning(
      'Usuário deletado com sucesso!',
      'Usuário deletado!'
    )
  }

}
