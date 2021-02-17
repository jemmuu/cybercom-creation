import { compileComponentFromMetadata } from '@angular/compiler';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testComponent } from './test-comp.component';
import { testService } from './services/test.service';
import { Test1Component } from './test1/test1.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { testpipe } from './common/custPipe.pipe';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { TestInputdirectiveDirective } from './test-inputdirective.directive';
import { FormTestComponent } from './form-test/form-test.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HttpTestComponent } from './http-test/http-test.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RegFormTaskComponent } from './reg-form-task/reg-form-task.component';
 import { globalErrorHandler } from './common/global-error-handler';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    testComponent,
    Test1Component,
    TemplateVariableComponent,
    TwowaybindingComponent,
    PipeTestComponent,
    testpipe,
    TestDirectivesComponent,
    TestInputdirectiveDirective,
    FormTestComponent,
    LoginTestComponent,
    HttpTestComponent,
    RegFormTaskComponent
   
    
    
    
	  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({

      positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    resetTimeoutOnDuplicate : true,
    countDuplicates : true
    }),
    
  ],
  providers: [
    testService,
    NgxImageCompressService,
    {provide : ErrorHandler , useClass : globalErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
