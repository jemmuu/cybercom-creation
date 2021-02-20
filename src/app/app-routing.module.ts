import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCmsComponent } from './modules/cmsmodule/add-cms/add-cms.component';

import { CmsListComponent } from './modules/cmsmodule/cms-list/cms-list.component';
import { CMSComponent } from './modules/cmsmodule/cms/cms.component';
import { CompanyConfigurationComponent } from './modules/company-module/company-configuration/company-configuration.component';
import { CompanyComponent } from './modules/company-module/company/company.component';
import { AddEmployeeComponent } from './modules/employee-module/add-employee/add-employee.component';
import { EmployeeListComponent } from './modules/employee-module/employee-list/employee-list.component';
import { EmployeeComponent } from './modules/employee-module/employee/employee.component';
import { ReqResLoginComponent } from './req-res-login/req-res-login.component';
import { ResReqComponent } from './res-req/res-req.component';


const routes: Routes = [
                    {path: 'company' , 
                    component:CompanyComponent,
                    loadChildren: ()=> import ('./modules/company-module/company-module.module').then(m=>m.CompanyModuleModule)
                    
                    //children:[ {path: 'companyConfiguration' ,component:CompanyConfigurationComponent },]

                    },

                  {
                    path: 'employee' , component:EmployeeComponent,
                    loadChildren:()=> import ('./modules/employee-module/employee-module.module').then(m=>m.EmployeeModuleModule)
                    
                    // children:[

                    //   {path: 'addEmployee' , component:AddEmployeeComponent },
                    //   {path: 'employeeList' , component:EmployeeListComponent },


                    // ]
                   },

                  {path: 'cms' , 
                  component:CMSComponent,
                  loadChildren:()=> import ('./modules/cmsmodule/cmsmodule.module').then(m=>m.CMSModuleModule)
                  
                  // children:[

                  //   {path: 'addCms' , component:AddCmsComponent },
                  //   {path: 'cmsList' , component:CmsListComponent }

                  // ] 

                  
                },

                {path:'login', component:ReqResLoginComponent},
                {path: 'listUSer', component: ResReqComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
