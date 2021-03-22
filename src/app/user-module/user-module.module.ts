import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountModuleModule } from '../account-module/account-module.module';


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    AccountModuleModule
  ]
})
export class UserModuleModule { }
