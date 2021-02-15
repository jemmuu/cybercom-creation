import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../services/service-test.service';
import { testService } from '../services/test.service';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  list;

  constructor(service: ServiceTestService) {

    this.list = service.testFun();
   }

  ngOnInit(): void {
  }
  
  // challenge of like counter start
  color : string = 'white';
  like : boolean = false;
  counter : number = 5000 ;
  col = 2;
  onclick()
  {
    // console.log('hello');


   
    this.counter += (this.like) ? -1: 1;
    this.like = !this.like;
    
    // (this.color == 'white')?this.color = 'aqua': this.color= 'white';
  }
  // challenge end


  // practice for event handaling and use of $event to get value of input

  onalert($event:any)
  {
      
    // console.log('here');
    alert($event.target.value);
  }
  
  navto()
  {

      alert("routing to other componenet");
  }

}
