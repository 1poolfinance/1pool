import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface PeriodicElement {
	_id: string;
	title: string;
	mailsubject: string;
	modifiedDate: number;
	action: string;
}

@Component({
	selector: 'app-emailtemplate',
	templateUrl: './emailtemplate.component.html',
	styleUrls: ['./emailtemplate.component.scss']
})
export class EmailtemplateComponent implements OnInit {
	loading = true;	postRequest = ''; actionType = ''; content_error = true;
	displayNoRecords: any; config: any;
	token = localStorage.getItem('Key'); per = false; access:any;

	model: { "title": "", "mailsubject": "", "updated_at": "" };

	displayedColumns: string[] = ['title', 'mailsubject', 'updated_at', 'action'];
	dataSource = new MatTableDataSource<PeriodicElement>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private dataService: DataService,
		public datepipe: DatePipe,
		private notifier: NotifierService,
		private route: Router
	) {
		this.notifier = notifier;
		this.config = this.dataService.geteditorconfig()
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true; this.getAllTemp();
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage Emails');
				if(itemArr.length!=0){
					this.per = true; this.getAllTemp();
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.route.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.route.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);				
		} 
	});
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	public getAllTemp = () => {
		this.dataService.getData('cms/emailtemplate')
			.subscribe(res => {
				this.actionType = 'all'; this.loading = false;
				for (var i = 0; i < res.data.length; i++) {
					var ld = res.data[i];
				}
				this.dataSource.data = res.data as PeriodicElement[];
				if (this.dataSource.data.length == 0) {
					this.displayNoRecords = true;
				} else {
					this.displayNoRecords = false;
				}
			})
	}

	dateFormats(date: Date) {
		let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd H:mm:ss');
		return latest_date;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.filteredData.length == 0) {
			this.displayNoRecords = true;
		} else {
			this.displayNoRecords = false;
		}
	}

	public redirectToEdit = (id: string) => {
		this.postRequest = '';
		this.loading = true; this.actionType = '';
		this.dataService.getData('cms/template/' + id)
			.subscribe(res => {
				this.actionType = 'edit';
				this.model = res.data;
				this.loading = false;
			})
	}

	public redirectToAll = (action: string) => {
		this.actionType = action;
	}

	public onChange({ editor }: any) {
		const data = editor.getData();
		this.content_error = false;
	}

	onSubmit() {
		if (!this.content_error) {
			this.notifier.notify('error', "Content is required");
			return;
		}
		this.postRequest = 'yes';
		this.dataService.importData('cms/templateUpdate', this.model).subscribe(reqData => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.getAllTemp();
				this.actionType = 'all';
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

	public cancelToEdit = () => {
		this.actionType = 'all';
	}

}
