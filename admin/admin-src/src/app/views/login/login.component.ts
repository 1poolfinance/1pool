import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../data.service';
import { AdminauthService } from '../../services/adminauth.service';


import PatternLock from 'patternlock';
import * as $ from 'jquery';

@Component({
	selector: 'app-dashboard',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
	postRequest = false;
	loginForm: FormGroup;
	submitted = false;
	returnUrl: string;
	ipblock = true;  tfa_form = 1; tfa_inf={secret:''}; tfa_button = false; loginLoader = false;
	private notifier: NotifierService;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private dataService: DataService,
		notifier: NotifierService,
		private auth: AdminauthService
		) { 

		this.dataService.getData('admin/getaccdetails').subscribe(resData => {
			var ip_status = resData.data;
			if(ip_status == "not_ok"){
				this.router.navigate(['/404']);
				return false;
			}
		});
		this.dataService.getData('admin/blockip').subscribe(reqData => {
			if(reqData.status==false)
				{ this.ipblock=true;
					this.router.navigate(['/404']);
				}else{
					this.ipblock=false;
				}
			});

		this.notifier = notifier;
		this.returnUrl = this.dataService.adminUrl()+'pages/dashboard';

		if(this.dataService.getSession('id')) {
			this.router.navigateByUrl ( this.returnUrl );
		}
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
		
		var lock = new PatternLock("#patternContainer",{
			onDraw:function(pattern){
				var pat = lock.getPattern();
				$("#patterncode").val(pat);
				this.patterncode=pat;           
			}
		});

	}

	get f() { return this.loginForm.controls; }

	onSubmit() {	
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		var loginObj:any;
		loginObj=this.loginForm.value;
		if($("#patterncode").val()=="")
		{
			this.notifier.notify( 'error', "Please draw pattern");
			return;
		}
		loginObj.pattern=$("#patterncode").val();
		this.postRequest = true;
		this.dataService.chklogin(loginObj).subscribe((resData:any) => {
			if(resData.status == true) {
				this.notifier.notify( 'success', resData.success);
				this.auth.setSession(resData.Key);
				setTimeout(() => {
					return this.router.navigateByUrl(this.returnUrl);
				}, 600);

			} else if(resData.status == 2){
				localStorage.setItem('Tfa', resData.ttoken);
				this.tfa_form = 0;
			}else if(resData.status == 401){
				this.notifier.notify( 'error', 'IP Blocked');
				this.router.navigate(['/404']);
			} 
			else {
				this.postRequest = false;
				this.notifier.notify( 'error', resData.error);
				if(resData.status == 401)
				{
					this.router.navigate(['/yDKXkjbhUFZYGEUdINOs']);
				}
			}

		});
		}

		tfa_status(login:NgForm){
		this.tfa_button=true;
		if(this.tfa_inf.secret==''){
			this.notifier.notify( 'error', 'Please Enter the TFA to Continue');
			this.tfa_button=false;

		}
		else{
			this.tfa_button=false;
			this.loginLoader = true;
			var data = {
				ttoken:localStorage.getItem('Tfa'),
				tfa_code:this.tfa_inf.secret
			}
			this.dataService.importData('admin/tfaLogin', data).subscribe((resData:any) => {
				if(resData.status == true){
					this.notifier.notify( 'success', 'login successfully');
					this.auth.setSession(resData.Key);
				setTimeout(() => {
					return this.router.navigateByUrl(this.returnUrl);
				}, 600);
				}
				else{
					this.notifier.notify( 'error', resData.msg);
				}
				this.tfa_inf.secret = '';
				this.loginLoader = false;
			})
		}
	}



	}