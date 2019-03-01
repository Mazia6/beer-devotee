import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';


import { FraternitedelizeComponent } from './fraternitedelize.component';
import { NotFoundPageComponent } from './shared';
import { InitPageComponent, RegisterPageComponent } from './init/pages';
import { DashPageComponent, AdminComponent, UserConfigPageComponent, RewardSetupComponent, SetupsComponent } from './dashboard/pages';
import { GetPointsComponent } from './dashboard/pages/get-points/get-points.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { DashNavbarComponent, RewardListComponent, UserListComponent, UserEditComponent } from './dashboard/components';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'fraternitedelize',
    component: FraternitedelizeComponent,
    children: [
      {
        path: 'init',
        component: InitPageComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      },
      {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  },
  {
    path: 'dash',
    component: DashPageComponent,
    children: [
      {
        path: 'admn/:id',
        component: AdminComponent,
        children: [
          {
            path: 'rewards-setup',
            component: RewardSetupComponent
          },
          {
            path: 'users-setup',
            component: SetupsComponent
          },
          {
            path: '',
            redirectTo: 'rewards-setup',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: NotFoundPageComponent
          }
        ]
      },
      {
        path: 'user/:id',
        component: UserComponent,
        children: [
          {
            path: 'config',
            component: UserConfigPageComponent
          },
          {
            path: 'get-points',
            component: GetPointsComponent
          },
          {
            path: '',
            redirectTo: 'get-points',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: NotFoundPageComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'fraternitedelize',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot(environment.gromaps)
  ],
  declarations: [
    FraternitedelizeComponent,
    FraternitedelizeComponent,
    InitPageComponent,
    RegisterPageComponent,
    DashPageComponent,
    GetPointsComponent,
    UserComponent,
    NotFoundPageComponent,
    DashNavbarComponent,
    AdminComponent,
    UserConfigPageComponent,
    RewardListComponent,
    RewardSetupComponent,
    SetupsComponent,
    UserListComponent,
    UserEditComponent
  ],
  exports: [
    FraternitedelizeComponent
  ]
})
export class FraternitedelizeModule { }
