import { Component, OnInit } from '@angular/core';
import { RewardsService, RewardDataService, UsersService } from 'src/app/fraternitedelize/services';
import { Observable } from 'rxjs';
import { Reward, User } from 'src/app/fraternitedelize/shared';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/fraternitedelize/services/user-data.service';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.css']
})
export class RewardListComponent implements OnInit {
  modal = false;
  needConfirm = false;
  confirmed = false;
  password: string = '';

  listColapsed = true;
  key: string = '';
  admin = '';

  rewards: Observable<any>;
  reward: Reward
  users: Observable<any>;
  user: User;

  constructor(
    private userService: UsersService,
    private userDataService: UserDataService,
    private rewardService: RewardsService,
    private rewardData: RewardDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reward = new Reward();
    this.rewardData.currentReward.subscribe(data => {
      if (data.reward && data.key) {
        this.reward.name = data.reward.name;
        this.reward.points = data.reward.points;
        this.key = data.key;
      }
    })

    this.user = new User();
    this.userDataService.currentUser.subscribe(data => {
      if (data.user && data.key) {
        this.key = data.key;
        this.user.bornDate = data.user.bornDate;
        this.user.cpf = data.user.cpf;
        this.user.email = data.user.email;
        this.user.genre = data.user.genre;
        this.user.name = data.user.name;
        this.user.phone = data.user.phone;
        this.user.points = data.user.points;
      }
    })

    this.admin = this.router.url.substring(11, 31)

    this.getRewards();
    this.getUsers();
  }

  getRewards() {
    this.rewards = this.rewardService.getAllRewards()
    return this.rewards.subscribe(data => {
      data.name
    })
  }

  deleteReward(key: string) {
    this.rewardService.deleteReward(key);
  }

  editReward(reward: Reward, key: string) {
    this.rewardService.updateReward(reward, key);
  }
  
  userPointsUpdate(user: User, key: string) {
    this.userService.updateUser(user, key);
  }

  getUsers() {
    this.users = this.userService.getAllUsers();
  }

  editing(rwd: Reward, key: string) {
    this.rewardData.changeReward(rwd, key);
  }
}
