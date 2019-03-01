import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/fraternitedelize/services';
import { User } from 'src/app/fraternitedelize/shared';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;

  cpf: Observable<any>;
  user: User;
  key: string = '';

  form: any;
  datePoints;

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      genre: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      brnDate: ['', Validators.required]
    })

    this.registerForm.valueChanges.subscribe();

    this.user = new User();
  }


  onSubmit() {
    this.userService.createUser(this.user);
    this.router.navigateByUrl(`/fraternitedelize`)
    this.registred();
    this.points();
    return this.user = new User();
  }

  get inputName() {
    return this.registerForm.get('name');
  }

  get inputEmail() {
    return this.registerForm.get('email');
  }

  get inputGenre() {
    return this.registerForm.get('genre');
  }

  get inputCpf() {
    return this.registerForm.get('cpf')
  }

  get inputPhone() {
    return this.registerForm.get('phone')
  }

  get inputBornDate() {
    return this.registerForm.get('brnDate');
  }

  registred() {
    this.toastr.success(
      'Seu usuário foi cadastrado com sucesso!',
      'Cadastrado'
    )
  }

  points() {
    this.toastr.warning(
      'Nós já resgatamos seus pontos de hoje!',
      'Pontos diários!'
    )
  }

}
