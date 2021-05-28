import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './request-password.component.html',
	styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
	passwordForm: FormGroup;
	submitted = false;
	postRequest = false;
	ipblock = true;
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private dataService: DataService,
		private notifier: NotifierService
	) {
		this.notifier = notifier;
		this.dataService.getData('admin/blockip').subscribe(reqData => {
			if (reqData.status == false) {
				this.ipblock = true;
				this.router.navigate(['/404']);
			} else {
				this.ipblock = false;
			}
		});
	}

	ngOnInit() {
		this.passwordForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email, Validators.pattern]]
		});
	}

	get f() { return this.passwordForm.controls; }

	onSubmit() {
		if (this.ipblock == false) {

			this.submitted = true;

			if (this.passwordForm.invalid) {
				return;
			}
			this.postRequest = true;
			this.dataService.importData('admin/requestPassword', this.passwordForm.value).subscribe(reqData => {
				this.postRequest = false;
				if (reqData.status == true) {
					this.notifier.notify('success', reqData.msg);
					this.submitted = false;
					this.passwordForm.reset();
				} else {
					this.notifier.notify('error', reqData.msg);
				}
			});
		} else {
			this.notifier.notify('error', 'your ip was blocked');
		}
	}
}
