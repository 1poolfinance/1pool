import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
	loading = true;	postRequest = '';actionType = ""; viewContact = true; contactCount = 0; ticketToken = "";
	viewDetail:any = {}; token = localStorage.getItem('Key'); per = false; access:any;

	model: {"reply": ""};

 constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		private router: Router,
		private actRoute: ActivatedRoute
	) { 
  	this.notifier = notifier;
 }

  ngOnInit() {
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true; this.getId();
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage Contact');
				if(itemArr.length!=0){
					this.per = true; this.getId();
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);				
		} 
	});
  }

  getId(){				
		this.actRoute.params.subscribe((params) => {
		this.ticketToken = this.actRoute.snapshot.queryParamMap.get('token');
		if (this.ticketToken != null && this.ticketToken != undefined && this.ticketToken != "") {	
			this.dataService.getRequest('home/viewContact/' + this.ticketToken, this.token).subscribe((res: any) => {
				this.postRequest = '';
				this.loading = true;
				if (res.status == true) {
					this.viewDetail = res.data;
					this.model = res.data;
					this.viewContact = false;
					this.loading = false;

				} else {
					this.notifier.notify('error', res.msg);
					this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);
				}
			})
		} else {
			this.notifier.notify('error', 'Invalid Request');
			this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);
		}
	});	
}

		onSubmit(r:NgForm) {
		var d = r.value;
		var a = d.reply.trim();
		if(a.length == 0){
			this.notifier.notify( 'error', 'Reply is required');
			return;
		}
		this.postRequest = 'yes';
		this.dataService.importData('home/replyContact', this.model).subscribe(reqData => {d
			this.postRequest = '';
			if(reqData.status == true) {				
				this.actionType = 'all';
				this.notifier.notify( 'success', reqData.msg);
				this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/contactus']);						
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		});
	}
}
