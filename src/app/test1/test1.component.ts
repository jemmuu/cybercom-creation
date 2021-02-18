import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from '../services/service-test.service';
import { testService } from '../services/test.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  
})
export class Test1Component implements OnInit {

  list;

  constructor(service: ServiceTestService, private router : Router) {

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

  navigate()
  {
      this.router.navigate(['/http', 2], {
        queryParams : {test: 'wer', page: 8}

      })
  }

}
