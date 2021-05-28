import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { Socket } from 'ngx-socket-io';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	loading = true; postRequest = '';
	actionType = false; tfaLoader = false;
	id: any; token = localStorage.getItem('Key');
	changeEventTriggered: boolean = false;
	passwordForm: FormGroup;
	profileForm: FormGroup;
	passSubmitted = false;
	profileSubmitted = false;
	private notifier: NotifierService;
	profile: any = {};
	profileUrl = 'assets/avatar2.png';

	modelProfile = { '_id': '', 'ownermail': '', 'username': '', 'profileimg': '', 'tfa_url':'', 'tfa_status':'', 'tfa_code':'' };

	public files: any[];

	constructor(
		private formBuilder: FormBuilder,
		private dataService: DataService,
		private router: Router,
		notifier: NotifierService,
		private socket: Socket,
		) {
		this.notifier = notifier;
		this.files = [];
		this.dataService.getData('admin/getaccdetails').subscribe(resData => {
			var ip_status = resData.data;
			if(ip_status == "not_ok"){
				this.router.navigate(['/404']);
				return false;
			}
		});
	}

	onFileChanged(event: any) {
		let reader = new FileReader();
		const name = event.target.name;
		const file = event.target.files[0];
		this.changeEventTriggered = true;
		var imageType = /image.*/;
		if (!file.type.match(imageType)) {
			this.notifier.notify('error', "Upload valid image");
			return;
		} else
		if (name == "profile_img") {
			reader.onload = (e: any) => {
				this.profileUrl = e.target.result;
			}
			reader.readAsDataURL(file);
			this.modelProfile.profileimg = file;
		}

	}

	ngOnInit() {
		this.passwordForm = this.formBuilder.group({
			cur_pass: ['', Validators.required],
			new_pass: ['', Validators.required],
			confirm_pass: ['', Validators.required]
		}, {
			validator: this.checkPasswords
		});

		this.dataService.getData('admin/profile').subscribe(reqData => {
			this.modelProfile = reqData.data;
			this.actionType = true; this.loading = false;
			if (reqData.data.profileimg) {
				this.profileUrl = reqData.data.profileimg;
			}
		});
	}

	checkPasswords(group: FormGroup) {
		let pass = group.controls.new_pass.value;
		let confirmPass = group.controls.confirm_pass.value;
		return pass === confirmPass ? null : true;
	}


	get p() { return this.passwordForm.controls; }

	onPassword() {
		this.passSubmitted = true;

		if (this.passwordForm.invalid) {
			return;
		}
		let passData = this.passwordForm.value;
		let curpass = passData.cur_pass;
		let newpass = passData.new_pass;

		if (newpass != passData.confirm_pass) {
			this.notifier.notify('error', 'Passwords don\'t match.');
			return;
		} if (newpass == curpass) {
			this.notifier.notify('error', 'Current password and new password cannot be same.');
			return;
		}
		var pass = {
			authid: this.dataService.getSession('id'),
			curpass: curpass,
			newpass: newpass
		}
		this.postRequest = 'yes';
		this.dataService.importData('admin/updatePass', pass).subscribe(reqData => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.notifier.notify('success', reqData.msg);
				this.passwordForm.reset();
				this.passSubmitted = false;
				localStorage.clear();
				setTimeout(() => {
					return  this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY']);
				}, 500);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

	onProfile() {
		this.postRequest = 'yes';
		this.dataService.importData('admin/updateProfile', this.modelProfile).subscribe(reqData => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

	copyText(val: string) {
		let selBox = document.createElement('input');
		selBox.value = val;
		document.body.appendChild(selBox);
		selBox.focus();
		selBox.select();
		document.execCommand('copy');
		document.body.removeChild(selBox);
		window.scrollTo(0, 0);
		this.notifier.notify('success','copied to the clipboard');
	}

	tfaStatus(tfa: NgForm) {
		this.tfaLoader = true;
		var data = tfa.value;
		this.dataService.postRequest('admin/updateTfa', data, this.token).subscribe((res: any) => {
			if (res.status == true) {
				var response = res.result;
				this.modelProfile.tfa_status = response.tfa_status;
				this.modelProfile.tfa_code = response.tfa_code;
				this.modelProfile.tfa_url = response.tfa_url;
				response.tfa_status == 1 ? this.notifier.notify('success','TFA enabled successfully') : this.notifier.notify('success','TFA disabled successfully');
			} else {
				this.notifier.notify('error',res.msg);
			}
			tfa.resetForm();
			this.tfaLoader = false;
		})
	}
}
