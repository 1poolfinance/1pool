import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, PRIMARY_OUTLET, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../data.service';
import { Socket } from 'ngx-socket-io';
import { AdminauthService } from '../../services/adminauth.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './resetpassword.component.html',
	styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
	lower = true; upper = true; len = true; num = true; spec = true;
	resetLoader = false; resetToken = ""; resetVerify = ""; captchaVal = false; captcha = "";

	constructor(private data: DataService, private notifier: NotifierService, private route: Router, private actRoute: ActivatedRoute) {
		if (this.data.loggedIn()) {
			this.notifier = notifier;
		}
		this.actRoute.params.subscribe((params) => {
			this.resetToken = this.actRoute.snapshot.queryParamMap.get('token');
			this.resetVerify = this.actRoute.snapshot.queryParamMap.get('verify');
			if (this.resetToken == null || this.resetToken == undefined || this.resetToken == "undefined" || this.resetVerify == null || this.resetVerify == undefined || this.resetVerify == "undefined") {
				this.notifier.notify('error', "Invalid request");
			}
		});
	}

	typePwd(pwd) {
		if (pwd != null && pwd != undefined && pwd != "") {
			this.lower = true; this.upper = true; this.len = true; this.num = true; this.spec = true;
			let lowerChars = /[a-z]/g;
			let upperChars = /[A-Z]/g;
			let numbers = /[0-9]/g;
			let specials = /\W|_/g;
			if (pwd.length < 8) { this.len = false; return; }
			if (pwd.match(lowerChars) == null) { this.lower = false; return; }
			if (pwd.match(upperChars) == null) { this.upper = false; return; }
			if (pwd.match(numbers) == null) { this.num = false; return; }
			if (pwd.match(specials) == null) { this.spec = false; return; }
		}
	}

	ngOnInit() {
	}

	submitFunc(reset: NgForm) {
		this.resetLoader = true;
		var data = reset.value;
		data.token = this.resetToken;
		data.verify = this.resetVerify;
		this.data.loadData('admin/resetPass', data).subscribe((res: any) => {
			if (res.success == 1) {
				this.notifier.notify('success', res.msg);
				this.route.navigate(['/']);
			} else {
				this.notifier.notify('error', res.msg);
			}
			reset.resetForm();
			this.resetLoader = false;
		});
	}

}
