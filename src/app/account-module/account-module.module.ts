import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModuleRoutingModule } from './account-module-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AccountDetailsComponent]
})
export class AccountModuleModule { }
