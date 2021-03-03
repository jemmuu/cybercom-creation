import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AuthGuard } from './core/services/AuthGuard/auth.guard';
import { DeactivateGuardGuard } from './core/services/CanDeactivate/deactivate-guard.guard';
import { FormTaskComponent } from './form-task/form-task.component';
//import { AuthGuard } from './core/services/AuthGuard/auth.guard';

import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [

  {path: '', component:ListUserComponent,canDeactivate:[DeactivateGuardGuard],canActivate:[AuthGuard]},
  {path:'comp1',component:Comp1Component},
  {path:'comp2',component:Comp2Component},
  {path: 'login', component:LoginComponent,canDeactivate:[DeactivateGuardGuard]},
  {path:'formTask',component:FormTaskComponent},
  {path: 'account',canActivate:[AuthGuard],loadChildren:()=> import ('./module/account/account.module').then(m=>m.AccountModule)},
  {path: 'cms',canActivate:[AuthGuard], loadChildren:()=> import ('./module/cms/cms.module').then(m=>m.CmsModule)},
  {path: 'products',canActivate:[AuthGuard],loadChildren:()=> import ('./module/products/products.module').then(m=>m.ProductsModule)},
  {path: 'users',canActivate:[AuthGuard],loadChildren:()=> import ('./module/users/users.module').then(m=>m.UsersModule)},
  {path: '**',canDeactivate:[DeactivateGuardGuard],canActivate:[AuthGuard], component:NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
