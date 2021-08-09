import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
// import { Title } from "@angular/platform-browser";

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

	model = { '_id': "", 'site_name': "",'logo_img': "", 'copyright': "", "contact_mail": "", "contactnumber": "", "address": "", "refLevel":"", "facebook": "", "twitter": "", "telegram": "", "linkedin": "","reddit": "","medium": "", "sitemode": "" };

	public files: any[]; changeEventTriggered: boolean = false; logoUrl = 'assets/img/brand/logo.png';

 constructor(
		private formBuilder: FormBuilder,
		private dataService: DataService,
		private router: Router,
		notifier: NotifierService	
		// private titleService: Title
	) {
		this.notifier = notifier;
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
		// get data
		this.dataService.getData('admin/settings').subscribe(reqData => {
			this.submitted = false;
			this.model = reqData.data;
			this.logoUrl = reqData.data.logo_img;
			// console.log(this.model)
			this.actionType = true;
			this.loading = false;
		});	
	}

	onFileChanged(event: any) {
		let reader = new FileReader();
		const name = event.target.name;
		// console.log('AJCIIOKD -->',name);
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

		console.log("this.model._id",this.model._id);

		const formData = new FormData();
		formData.append('_id', this.model._id);
		formData.append('site_name', this.model.site_name);
		formData.append('copyright', this.model.copyright);
		formData.append('address', this.model.address);
		formData.append('refLevel', this.model.refLevel);
		formData.append('contact_mail', this.model.contact_mail);
		formData.append('contactnumber', this.model.contactnumber);
		// formData.append('address', this.model.address);
		formData.append('facebook', this.model.facebook);
		formData.append('twitter', this.model.twitter);
		formData.append('telegram', this.model.telegram);
		formData.append('linkedin', this.model.linkedin);

		formData.append('reddit', this.model.reddit);
		formData.append('medium', this.model.medium);

		formData.append('sitemode', this.model.sitemode);

		if (typeof this.model.logo_img['name'] != 'undefined' && typeof this.model.logo_img['name'] != undefined) {
			formData.append('logoImg', this.model.logo_img);
		} else {
			formData.append('logoImg', this.model.logo_img);
		}

		var a = this.model.site_name.trim();
		var b = this.model.copyright.trim();
		var c = this.model.address.trim();
			if(a.length == 0 || b.length == 0 || c.length == 0){
					this.notifier.notify('error', 'Please fill all the fields');
					return;
				}
				let datas = {_id : this.model._id,site_name : this.model.site_name,copyright : this.model.copyright,address : this.model.address,refLevel : this.model.refLevel,contact_mail : this.model.contact_mail,contactnumber : this.model.contactnumber,facebook : this.model.facebook,twitter : this.model.twitter,telegram : this.model.telegram,linkedin : this.model.linkedin,reddit : this.model.reddit,medium : this.model.medium,
					sitemode : this.model.sitemode};
		this.dataService.importData('admin/site_settings', datas).subscribe((reqData:any) => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.notifier.notify('success', reqData.msg);
				// this.titleService.setTitle(reqData.data.site_name);
				this.dataService.sitesettings(reqData.data);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

}
