import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetPointsService {
  baseUrl = 'https://api.qrserver.com/v1/create-qr-code/?data='

  constructor(private http: HttpClient) { }

  generateCode() {
    return this.http.get(`${this.baseUrl}true;size=100x100`)
      .pipe(
        tap()
      )
  }
}
