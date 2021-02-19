import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CMSModuleModule } from './modules/cmsmodule/cmsmodule.module';
import { CompanyModuleModule } from './modules/company-module/company-module.module';
import { EmployeeModuleModule } from './modules/employee-module/employee-module.module';

@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BsDropdownModule.forRoot(),
   TooltipModule.forRoot(),
   ModalModule.forRoot(),
   CMSModuleModule,
   CompanyModuleModule,
   EmployeeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
