import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor() { }

  testFun(){
    return ["cli service","l2","l3"];
    }
}
