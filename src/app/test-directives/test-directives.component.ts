import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../service-test.service';
import { testService } from '../test.service';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent implements OnInit {
  data;
  constructor(service: ServiceTestService) {


    this.data = service.testFun();


  }

  ngOnInit(): void {
  }


  ifTest: boolean = true;

  option = 'op1';
  datan: string[] = [];
  onload() {
    let service = new ServiceTestService;
    if (this.datan.length == 0) {
      this.datan = service.testFun();
    }
    else {

      this.datan = this.datan;
    }
  }

  addrecord() {
    this.datan.push("l4");
  }

  removerecord(i: number) {
    this.datan.splice(i, 1);

  }

  updaterecord(i: number) {

    
    var promptValue= prompt('Enter any value in below', '');
    if (promptValue != null) {
       let val = promptValue;
       this.datan[i] = val;
    } else {
      alert('change abort');
    }
      
        
        
      }

track(index: any, datak : any)
{
  return datak ? datak : undefined;
}
  
    }
