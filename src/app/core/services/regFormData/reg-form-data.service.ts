import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegFormDataService {

  data : Object = {};

   private _initialData: BehaviorSubject<string>=  new BehaviorSubject<any>('')
   _latestData$ = this._initialData.asObservable();
  constructor() { }

  changeData(latestData :any)
  {
    this._initialData.next(latestData)
    console.log(latestData+ ' in service success');
  }


}
