import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

isAuth = false;

  constructor(private dataService: DataService) { }


  setSession(Key) {
		const expiresAt = moment().add(24,'hours');
		localStorage.setItem('Key', Key);
		localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
	}          

	deleteToken() {
		localStorage.removeItem("Key");
		localStorage.removeItem("expires_at");
	}

	public getToken(): string {
		return localStorage.getItem('Key');
	}

	
	public isAuthenticated(): boolean {
		return moment().isBefore(this.getExpiration());
	}

	loggedIn() {
		return !!localStorage.getItem('Key');
	}
	

	getExpiration() {
		const expiration = localStorage.getItem("expires_at");
		const expiresAt = JSON.parse(expiration);
		return moment(expiresAt);
	} 
}
