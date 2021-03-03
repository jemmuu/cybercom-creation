import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';
import { RegFormDataService } from '../core/services/regFormData/reg-form-data.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit,DeactivateGuard {
  _formData: any;
  dataF :Object = {};
  constructor(private _router : Router,private data : RegFormDataService) { 
  }
  Deactivate()
  {
    if(confirm('are u sure?'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }


    nav(link : HTMLInputElement)
  {
    this._router.navigate([`${link.value}`]);
  }

  ngOnInit(): void {
    this.data._latestData$.subscribe(latestData =>{console.log(latestData + 'in subcrib'), this._formData = latestData});

    console.log(this._formData);
  }

  

}
