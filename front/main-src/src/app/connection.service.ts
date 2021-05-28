import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BackendUrl } from '../backendconn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

	redirectUrl = BackendUrl;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }


	postUrl(uri, data) {
		return this.http.post(this.redirectUrl + uri, data);
	}

	getUrl(uri) {
		return this.http.get(this.redirectUrl + uri);
	}	

	postRequest(uri, data, token) {
		const headers = new HttpHeaders()
			.set('cache-control', 'no-cache')
			.set('content-type', 'application/json')
			.set('Authorization', 'Bearer ' + token);
		return this.http.post(this.redirectUrl + uri, data, { headers: headers })
	}

	getRequest(uri, token) {
		const headers = new HttpHeaders()
			.set('cache-control', 'no-cache')
			.set('content-type', 'application/json')
			.set('Authorization', 'Bearer ' + token);
		return this.http.get(this.redirectUrl + uri, { headers: headers })
	}

	changebackground(){
		document.getElementById('loader_new').style.display = 'flex';
		document.getElementById('body').style.display = 'flex';
	}

  	clearbackground(){
	  	document.getElementById('loader_new').style.display = 'none';
		document.getElementById('body').style.display = 'flex';
	}

	checkMaintain(): Observable<any> {
		const headers = new HttpHeaders()
			.set('cache-control', 'no-cache');
    return this.http.get(this.redirectUrl + 'admin/check_maintain', { headers: headers });
  }

	idleLogout() {
    var t;
	    window.onload = resetTimer;
	    window.onmousemove = resetTimer;
	    window.onmousedown = resetTimer;       
	    window.ontouchstart = resetTimer; 
	    window.onclick = resetTimer;      
	    window.onkeypress = resetTimer;   
	    window.addEventListener('scroll', resetTimer, true);
	    function yourFunction() {
	          localStorage.clear();
	          window.location.href = '/';  
	    }
	    function resetTimer() {
	        clearTimeout(t);
	        t = setTimeout(yourFunction, 900000);
	    }
	}
}
