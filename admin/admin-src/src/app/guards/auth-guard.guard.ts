import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { AdminauthService } from '../services/adminauth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
	constructor(private dataService: DataService, private authService: AdminauthService,private router: Router){}
  	canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated()) {      
      return true;
    }else{ 
    this.router.navigateByUrl('/');
    return false;
    }
  
  }
  
}
