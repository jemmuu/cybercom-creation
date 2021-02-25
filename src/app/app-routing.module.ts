import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuardGuard } from './core/services/CanDeactivate/deactivate-guard.guard';
//import { AuthGuard } from './core/services/AuthGuard/auth.guard';

import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [

  {path: '', component:ListUserComponent,canDeactivate:[DeactivateGuardGuard]},
  {path: 'login', component:LoginComponent,canDeactivate:[DeactivateGuardGuard]},
  {path: 'account',loadChildren:()=> import ('./module/account/account.module').then(m=>m.AccountModule)},
  {path: 'cms', loadChildren:()=> import ('./module/cms/cms.module').then(m=>m.CmsModule)},
  {path: 'products',loadChildren:()=> import ('./module/products/products.module').then(m=>m.ProductsModule)},
  {path: 'users',loadChildren:()=> import ('./module/users/users.module').then(m=>m.UsersModule)},
  {path: '**',canDeactivate:[DeactivateGuardGuard], component:NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
