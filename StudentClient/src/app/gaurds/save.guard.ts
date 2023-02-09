import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CanLeaveComp} from '../contracts/interfaces'

@Injectable({
  providedIn: 'root'
})
export class SaveGuard implements  CanDeactivate<CanLeaveComp> {

  canDeactivate(comp:CanLeaveComp): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return comp.canDeactivate();
  }
  
}
