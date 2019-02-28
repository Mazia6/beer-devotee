import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Reward } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  baseUrl = 'https://lafraternitedelize-api.firebaseio.com/'

  constructor(private angularDb: AngularFireDatabase) { }

  getAllRewards() {
    return this.angularDb.list('/rewards', r => r.orderByChild('name'))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(r => ({ key: r.payload.key, ...r.payload.val() }))
        })
      )
  }

  createReward(reward: Reward) {
    this.angularDb.list('rewards').push(reward)
      .then((result: any) => {
        console.log(result.key)
      })
  }

  updateReward(reward: Reward, key: string) {
    this.angularDb.list('rewards').update(key, reward)
      .catch((error: any) => {
        console.log(error);
      })
  }

  deleteReward(key: string) {
    this.angularDb.list(`rewards/${key}`).remove()
  }
}
