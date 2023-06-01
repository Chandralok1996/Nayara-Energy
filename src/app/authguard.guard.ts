import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {LoginService} from './nayara/nayralogin/login.service';
//import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authService: ApiService,private loginService: LoginService,
    private router: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(["login"]);
        return false;
      }
  }
  
}
