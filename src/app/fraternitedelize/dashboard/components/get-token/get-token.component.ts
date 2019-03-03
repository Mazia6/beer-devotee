import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/fraternitedelize/services';
import { Observable } from 'rxjs';
import { Token } from 'src/app/fraternitedelize/shared';

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {
  token: Token;
  tokens: Observable<any>;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.token = new Token();
    this.getTokenReturn();
  }

  generateNewToken() {
    this.tokenService.generateToken(this.token);
    this.token = new Token();
  }

  getTokenReturn() {
    this.tokens = this.tokenService.getToken();
  }

}
