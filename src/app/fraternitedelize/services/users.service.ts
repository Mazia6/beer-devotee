import { Injectable } from '@angular/core';
import { User } from '../shared';
import { map } from 'rxjs/operators'
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://lafraternitedelize-api.firebaseio.com/'

  constructor(private angularDb: AngularFireDatabase) { }

  getAllUsers() {
    return this.angularDb.list('users', u => u.orderByChild('name'))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(u => ({ key: u.payload.key, ...u.payload.val() }))
        })
      )
  }

  createUser(user: User) {
    this.angularDb.list('users').push(user)
      .then((result: any) => {
        return result
      })
  }

  updateUser(user: User, key: string) {
    this.angularDb.list('users').update(key, user)
      .catch((error: any) => {
        console.log(error);
      })
  }

  deleteUser(key: string) {
    this.angularDb.list(`users/${key}`).remove()
  }
}
