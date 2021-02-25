import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuardGuard } from 'src/app/core/services/CanDeactivate/deactivate-guard.guard';
import { ListUserComponent } from 'src/app/list-user/list-user.component';
import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [

  {path:'' , component:ListUserComponent},
  {path:'list', component:UsersListComponent, canDeactivate:[DeactivateGuardGuard]},
  {path: '**', component:NotFoundPageComponent, canDeactivate:[DeactivateGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
