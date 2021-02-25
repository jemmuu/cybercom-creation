import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsListComponent } from './cms-list/cms-list.component';


@NgModule({
  declarations: [CmsListComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
