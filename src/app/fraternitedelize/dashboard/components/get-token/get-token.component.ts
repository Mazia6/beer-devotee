import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/fraternitedelize/services';
import { Observable } from 'rxjs';
import { Token } from 'src/app/fraternitedelize/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {
  token: Token;
  tokens: Observable<any>;
  checked = true

  constructor(
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.checked = true
    this.token = new Token();
    this.getTokenReturn();
  }

  generateNewToken() {
    this.tokenService.generateToken(this.token);
    this.token = new Token();
    this.toastr.warning(
      'Seu token foi gerado com sucesso!',
      'Token criado!'
    )
    this.toastr.warning(
      'Após o uso o Token será deletado',
      'Atenção!'
    )
  }

  getTokenReturn() {
    this.tokens = this.tokenService.getToken();
  }

  hasToken() {
    return this.checked = false
  }

}
