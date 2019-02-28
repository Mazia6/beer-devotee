import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reward } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class RewardDataService {
  private rewardSource = new BehaviorSubject({ reward: null, key: '' });
  currentReward = this.rewardSource.asObservable();

  constructor() { }

  changeReward(reward: Reward, key: string) {
    this.rewardSource.next({ reward: reward, key: key })
  }
}
