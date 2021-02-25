import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeactivateGuard } from '../core/services/CanDeactivate/deactivate-guard.guard';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit,DeactivateGuard {

  constructor(private _router : Router) { }
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
  }

}
