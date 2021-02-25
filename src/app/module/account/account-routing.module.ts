import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuardGuard } from 'src/app/core/services/CanDeactivate/deactivate-guard.guard';
import { ListUserComponent } from 'src/app/list-user/list-user.component';
import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [

  {path:'' , pathMatch: 'full',
  redirectTo: '/'},
  {path:'my-account', component:MyAccountComponent,canDeactivate:[DeactivateGuardGuard]},
  {path: '**', component:NotFoundPageComponent,canDeactivate:[DeactivateGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
