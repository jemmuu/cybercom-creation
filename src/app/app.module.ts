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
import { CryptoJsComponent } from './crypto-js/crypto-js.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FireStoreCrudComponent } from './fire-store-crud/fire-store-crud.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MesseagingService } from './core/services/messeaging/messeaging.service';
import { UserModuleModule } from './user-module/user-module.module';
import { AccountModuleModule } from './account-module/account-module.module';







@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    NotFoundPageComponent,
    LoginComponent,
    FormTaskComponent,
    CryptoJsComponent,
     FireStoreCrudComponent
  
    
    
    
    
   
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AccountModule,
    CmsModule,
    ProductsModule,
    UsersModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    UserModuleModule,
    AccountModuleModule
    
    
    
    
  ],
  
  providers: [RegFormDataService,UserListService,DeactivateGuardGuard,AuthGuard,MesseagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
