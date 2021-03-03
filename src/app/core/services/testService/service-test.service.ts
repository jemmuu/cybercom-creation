import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {


  
  data = [];
  constructor() { }

  // store data
  storeData(data : any) {
    this.data = data;
  }

  // pass data
  passData() {
    return this.data;
  }
}
