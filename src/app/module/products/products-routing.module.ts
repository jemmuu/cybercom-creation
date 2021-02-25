import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuardGuard } from 'src/app/core/services/CanDeactivate/deactivate-guard.guard';
import { ListUserComponent } from 'src/app/list-user/list-user.component';
import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'' , pathMatch: 'full',
  redirectTo: '/'},
  {path:'list', component:ProductListComponent, canDeactivate:[DeactivateGuardGuard]},
  {path: '**', component:NotFoundPageComponent, canDeactivate:[DeactivateGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
