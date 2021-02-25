import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserListService } from './core/services/userList/user-list.service';
import { AccountModule } from './module/account/account.module';
import { CmsModule } from './module/cms/cms.module';
import { ProductsModule } from './module/products/products.module';
import { UsersModule } from './module/users/users.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeactivateGuardGuard } from './core/services/CanDeactivate/deactivate-guard.guard';

import { AuthGuard } from './core/services/AuthGuard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    NotFoundPageComponent,
    LoginComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    CmsModule,
    ProductsModule,
    UsersModule,
    ReactiveFormsModule,
    FormsModule
    
  ],

  providers: [UserListService,DeactivateGuardGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
