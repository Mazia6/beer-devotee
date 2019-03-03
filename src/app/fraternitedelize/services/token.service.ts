import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Token } from '../shared';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  baseUrl = 'https://devoteesdelize-api.firebaseio.com/'

  constructor(private angularDb: AngularFireDatabase) { }

  getToken() {
    return this.angularDb.list('token')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(t => ({ key: t.payload.key, ...t.payload.val() }))
        })
      )
  }

  generateToken(token: Token) {
    this, this.angularDb.list('token').push(token)
      .then((result: any) => { })
  }

  deleteToken(key: string) {
    this.angularDb.list('token').remove(key)
  }
}
