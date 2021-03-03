import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../core/services/testService/service-test.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private dataService : ServiceTestService) { }

  ngOnInit(): void {
    console.log(this.data);
  }
 // recive data from service
 data = this.dataService.passData();
 
}
