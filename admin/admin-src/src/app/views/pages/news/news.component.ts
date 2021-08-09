import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface PeriodicElement {
	_id: string;	
	title: string;	
	description: string;
	status: string;
	updated_at: number;
}

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	loading = true;	postRequest = ''; disable:Boolean=false; pageType = "";
	actionType = ''; newsUrl = ""; editFeature = true; displayNoRecords:any;
	chngmode:Boolean; changeUploadTriggered:boolean = true;
	token = localStorage.getItem('Key'); per = false; access:any;
	config:any; 

	model = {"_id":"","title":"","description":"","content":"","news_image":"","status":1};

	displayedColumns: string[] = ['title','status','updated_at','action'];
	dataSource = new MatTableDataSource<PeriodicElement>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		public datepipe: DatePipe,
		private confirmDialogService: ConfirmDialogService,
		private route: Router
		) {
		this.notifier = notifier;	
		this.config=this.dataService.geteditorconfig()	
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true;
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage News');
				if(itemArr.length!=0){
					this.per = true;
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.route.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.route.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard']);				
		} 
	});
}

	ngOnInit() {
		this.getAll();
	}

	onFileChanged(event: any) {
		let reader = new FileReader();
		const name = event.target.name;
		const file = event.target.files[0];
		let typeFile = event.target.files[0].type;
		let file_size = event.target.files[0].size / 1024 / 1024;
		
		if(file_size >= 2) {
			this.notifier.notify( "error", "Upload image should be less than or equal to 2MB");
			this.changeUploadTriggered = false;
			return;
		}

		if(typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
			this.notifier.notify( "error", "Invalid image format");
			this.changeUploadTriggered = false;
			return;
		}
		reader.onload = (e: any) => {
			var img = new Image();
      img.src = e.target.result;
			this.newsUrl = e.target.result;
    if ((img.height <= 250) ||( img.width <= 700)) {
            this.notifier.notify("error","Minimum 250px height and 700px width required");
            this.changeUploadTriggered = false;
             img.src = "";
            return;
          }
        }
		
		this.changeUploadTriggered = true;		
		reader.readAsDataURL(file); 
		this.model.news_image = file;

	}	

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if(this.dataSource.filteredData.length==0){
			this.displayNoRecords = true;
		} else {
			this.displayNoRecords = false;
		}
	}

	public getAll = () => {

		this.dataService.getData('cms/get_news')
		.subscribe(res => {
			this.actionType = 'all';this.loading = false;
			this.dataSource.data = res.data as PeriodicElement[];
			for (var i = 0; i < res.data.length; i++) {
				var ld = res.data[i];
				var sts = (ld.status == 1)?"Active":"Deactive";

				res.data[i].status = sts;	
				var newDate = this.dateFormats(ld.updated_at);
				res.data[i].updated_at = newDate;
			}
			if(this.dataSource.data.length==0){
				this.displayNoRecords = true;
			} else {
				this.displayNoRecords = false;
			}
		})
	}

	dateFormats(date: Date){
		let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd H:mm:ss');
		return latest_date;
	}

	public cancelToEdit = () => {
		this.actionType = 'all';
		this.changeUploadTriggered = true;
	}

	public redirectToAdd = () => {
		this.actionType = 'edit';
		this.chngmode=false;
		this.pageType = 'add';
		this.newsUrl = "";
		this.model = {"_id":"","title": "", "description":"","content":"", "news_image":"", "status":1};
	}

	onSubmit() {
		this.notifier.hideAll();		
		let actionUrl = '';
		if(this.pageType=='edit') {
			actionUrl = 'newsUpdate';
		} else {
			actionUrl = 'newsAdd';
		}

		if(!this.changeUploadTriggered) {
			this.notifier.notify( 'error', 'Invalid image/format.');
			return;
		}	
		var a = this.model.title.trim();
		var b = this.model.description.trim();
		var c = this.model.content.trim();
		if(a.length == 0 || b.length == 0 || c.length == 0){
			this.notifier.notify( 'error', 'Form must be valid');
			return;
		}
		this.postRequest = 'yes';
		const formData = new FormData();
		formData.append('_id', this.model._id);
		formData.append('title', this.model.title);
		formData.append('description', this.model.description);
		formData.append('content', this.model.content);
		formData.append('status', String(this.model.status));
		
		if(typeof this.model.news_image['name'] != 'undefined' && typeof this.model.news_image['name'] != undefined)
		{		
			formData.append('news_img', this.model.news_image);
		} else {
			formData.append('news_img', this.model.news_image);
		}	

		this.dataService.importData('cms/'+actionUrl, formData).subscribe(reqData => {
			this.postRequest = '';
			if(reqData.status == true) {
				this.getAll();
				this.notifier.notify( 'success', reqData.msg);
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		});
	}

	public redirectToEdit = (data) => {
		let sts = data.status=="Active"?1:0;
		this.actionType = 'edit';
		this.chngmode=true;
		this.pageType = 'edit';
		this.model = {"_id":data._id,"title":data.title,"description":data.description,"content":data.content,"status":sts,"news_image":""};
		this.newsUrl = data.news_image;
	}

	public openConfirmationDialog(id: string) {
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to delete?')
		.then((confirmed) => this.doDelete(id,confirmed));
	}

	doDelete (id: string, confirmed) {
		this.notifier.hideAll();
		if(confirmed == false) {
			return false;
		}
		this.dataService.getData('cms/newsDelete/'+id)
		.subscribe(reqData => {
			if(reqData.status == true) {
				this.getAll();
				this.notifier.notify( 'success', reqData.msg);
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		})
	}
}
