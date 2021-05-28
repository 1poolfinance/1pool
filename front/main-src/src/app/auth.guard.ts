import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router , UrlTree} from '@angular/router';
import { ConnectionService } from './connection.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  resp = 0;
	constructor(private conn: ConnectionService, private route: Router) {

	}
 canActivate(actRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		var type:string = actRoute.data['type'];
		if(this.resp==0){
			return this.conn.checkMaintain().pipe(map(res => {
				this.resp = res.success;
			    if (res.success == 2) {
			    	localStorage.clear();
			        this.route.navigate(['ip_block']);
			        return false;
			    } else if (res.success == 3) {
			        localStorage.clear();
			        this.route.navigate(['under_maintance']);
			        return false;
			    }
		      	if(type == "all") { return true; }
		      	else { return true;}
			}));
		} else {
			if (this.resp == 2) {
	         this.route.navigate(['ip_block']);
	         return false;
	      } else if (this.resp == 3) {	         
	         this.route.navigate(['under_maintance']);
	         return false;
	      }
	      if(type == "all") { return true; }
	      else { return true; }
		}

	}
  
}
