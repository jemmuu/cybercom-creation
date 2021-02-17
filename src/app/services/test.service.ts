import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CRUDService } from './crud.service';

@Injectable(
  {
    providedIn: 'root'
  }
)



export class testService extends CRUDService {



  constructor( http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http)


  }

  testFun() {
    return ["l1", "l2", "l3"];
  }


  

}