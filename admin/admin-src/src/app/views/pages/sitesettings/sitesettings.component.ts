import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-sitesettings',
  templateUrl: './sitesettings.component.html',
  styleUrls: ['./sitesettings.component.scss']
})
export class SitesettingsComponent implements OnInit {

	loading = true; postRequest = '';
	actionType = false;
	submitted = true;	
	private notifier: NotifierService;
	siteInfo: any = {}; profile: any = {};
	token = localStorage.getItem('Key'); per = false; access:any;

	model = { '_id': "", 'site_name': "",'logo_img': "", 'copyright': "", "contact_mail": "", "contactnumber": "", "address": "", "refLevel":"", "facebook": "", "twitter": "", "telegram": "", "linkedin": "", "sitemode": "" };

	public files: any[]; changeEventTriggered: boolean = false; logoUrl = 'assets/img/brand/logo.png';

 constructor(
		private formBuilder: FormBuilder,
		private dataService: DataService,
		private router: Router,
		notifier: NotifierService
	) {
		this.notifier = notifier;
		this.dataService.getData('admin/getaccdetails').subscribe(resData => {
			var ip_status = resData.data;
			if(ip_status == "not_ok"){
				this.router.navigate(['/404']);
				return false;
			}
		});
	}

 	ngOnInit() {
 		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true;
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage Site Settings');
				if(itemArr.length!=0){
					this.per = true;
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);				
		} 
	})
		
		this.dataService.getData('admin/settings').subscribe(reqData => {
			this.submitted = false;
			this.model = reqData.data;
			this.logoUrl = reqData.data.logo_img;
			this.actionType = true;
			this.loading = false;
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
			if (name == "logo_img") {
				reader.onload = (e: any) => {
					this.logoUrl = e.target.result;
				}
				reader.readAsDataURL(file);
				this.model.logo_img = file;
			}
	}

	onSettings() {
		this.postRequest = 'yes';
		this.dataService.importData('admin/site_settings', this.model).subscribe((reqData:any) => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.notifier.notify('success', reqData.msg);
				this.dataService.sitesettings(reqData.data);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

}
