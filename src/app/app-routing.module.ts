import { HttpTestComponent } from './http-test/http-test.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTestComponent } from './form-test/form-test.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { testComponent } from './test-comp.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { Test1Component } from './test1/test1.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { RegFormTaskComponent } from './reg-form-task/reg-form-task.component';

const routes: Routes = [
  {path:''  , component:Test1Component},
  {path:'templatevariable', component:TemplateVariableComponent},
  {path:"twowaybinding",component:TwowaybindingComponent},
  {path:"pipeTest",component:PipeTestComponent},
  {path:"testDirectives",component:TestDirectivesComponent},
  {path:"formtest",component:FormTestComponent},
 {path:"login", component:LoginTestComponent},
 {path: "http", component:HttpTestComponent},
 {path:'task' , component:RegFormTaskComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
