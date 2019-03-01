import { Component, OnInit } from '@angular/core';
import { RewardsService, RewardDataService } from 'src/app/fraternitedelize/services';
import { Reward } from 'src/app/fraternitedelize/shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reward-setup',
  templateUrl: './reward-setup.component.html',
  styleUrls: ['./reward-setup.component.css']
})
export class RewardSetupComponent implements OnInit {
  reward: Reward;
  key: string = '';

  constructor(
    private toastr: ToastrService,
    private rewardService: RewardsService,
    private rewardDataService: RewardDataService,
  ) { }

  ngOnInit() {
    this.reward = new Reward();
    this.rewardDataService.currentReward.subscribe(data => {
      if (data.reward && data.key) {
        this.reward = new Reward();
        this.reward.name = data.reward.name;
        this.reward.points = data.reward.points;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if (this.key) {
      this.rewardService.updateReward(this.reward, this.key);
      this.rewardUpdated();
    } else {
      this.rewardService.createReward(this.reward);
      this.rewardCreated();
    }
    return this.reward = new Reward();
  }

  rewardCreated() {
    this.toastr.warning(
      'Premio criado com sucesso!',
      'Criado'
    )
  }

  rewardUpdated() {
    this.toastr.warning(
      'Premio atualizado com sucesso!',
      'Atualizado'
    )
  }

}
