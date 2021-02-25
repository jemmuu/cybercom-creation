import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeactivateGuard } from 'src/app/core/services/CanDeactivate/deactivate-guard.guard';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit,DeactivateGuard {

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
