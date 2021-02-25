import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ListUserComponent } from 'src/app/list-user/list-user.component';

export interface DeactivateGuard{

  Deactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DeactivateGuardGuard implements CanDeactivate<DeactivateGuard> {
  canDeactivate(
    component: DeactivateGuard,
    ) {
      console.log('canDeactivate called');
    return component.Deactivate();
  }
  

}
