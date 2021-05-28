import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AdminauthService } from '../adminauth.service';


@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

	constructor(private auth:AdminauthService) { }

	intercept(req: HttpRequest<any>,
		next: HttpHandler): Observable<HttpEvent<any>> {

		const idToken = this.auth.getToken();
		if (idToken) {
			const cloned = req.clone({
				headers: req.headers.set("Authorization", "Bearer " + idToken)
			});

			return next.handle(cloned);
		}
		else {
			return next.handle(req);
		}
	}
}
