import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../srevices/data.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthadminGuard implements CanActivate {
  constructor(private _data:DataService ,private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if (!this._data.adminislogin) {
      console.log("guard admin")
      this._route.navigateByUrl("/")
      return false
      
    }
    return true;
  }
  
}
