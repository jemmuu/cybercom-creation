import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { ListUserComponent } from 'src/app/list-user/list-user.component';


@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
    
  ]
})
export class AccountModule { }
