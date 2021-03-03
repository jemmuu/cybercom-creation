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
import { FormTaskComponent } from './form-task/form-task.component';
import { RegFormDataService } from './core/services/regFormData/reg-form-data.service';
import { TestServiceService } from './core/services/testService/test-service.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ServiceTestService } from './core/services/testService/service-test.service';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    NotFoundPageComponent,
    LoginComponent,
    FormTaskComponent,
    Comp1Component,
    Comp2Component,
    
   
    
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
  
  providers: [RegFormDataService,ServiceTestService,TestServiceService,UserListService,DeactivateGuardGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
