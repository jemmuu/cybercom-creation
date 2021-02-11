import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent  {
  data;
  constructor( service : ServiceTestService) { 

    this.data= service.testFun();

  }

  log(x : any)
  {
      console.log(x);
  }

}
