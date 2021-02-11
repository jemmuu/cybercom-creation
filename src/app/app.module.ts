import { compileComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testComponent } from './test-comp.component';
import { testService } from './test.service';
import { Test1Component } from './test1/test1.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { testpipe } from './custPipe.pipe';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { TestInputdirectiveDirective } from './test-inputdirective.directive';
import { FormTestComponent } from './form-test/form-test.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { NgxImageCompressService } from 'ngx-image-compress';


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
    
    
	  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({

      positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    resetTimeoutOnDuplicate : true,
    countDuplicates : true
    })
  ],
  providers: [testService,NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
