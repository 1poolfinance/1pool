import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';

import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
	_id: string,
	question: string;
	status: string;
	created_at: number;
	action: string
}

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
	loading = true; postRequest = ''; pageType = ""; actionType = ""; actionUrl = 'faqAdd';
	editCms = true;	chngmode: Boolean; displayNoRecords: any; config: any;
	token = localStorage.getItem('Key'); per = false; access:any;

	model: { "question": "", "answer": "", "status": 1 };

	displayedColumns: string[] = ['question', 'status', 'created_at', 'action'];
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
		this.config = this.dataService.geteditorconfig()
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true; this.getAllFaq();
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage FAQ');
				if(itemArr.length!=0){
					this.per = true; this.getAllFaq();
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.route.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.route.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard']);				
		} 
	})
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	public getAllFaq = () => {
		this.dataService.getData('cms/faq').subscribe(res => {
				this.actionType = 'all'; this.loading = false;
				for (var i = 0; i < res.data.length; i++) {
					var ld = res.data[i];
					var sts = (ld.status == 1) ? "Active" : "Deactive";
					res.data[i].status = sts;
					var newDate = this.dateFormats(ld.createdDate);
					res.data[i].createdDate = newDate;
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
		this.chngmode = false;
		this.loading = true; this.actionType = '';
		this.pageType = "edit";
		this.dataService.getData('cms/faq/' + id)
			.subscribe(res => {
				this.actionType = 'edit';
				this.model = res.data;
				this.editCms = false;
				this.loading = false;
			})
	}


	public redirectToAll = (action: string) => {
		this.actionType = action;
	}

	onSubmit() {
		if (this.pageType == 'edit') {
			this.actionUrl = 'faqUpdate';
		} else {
			this.actionUrl = 'faqAdd';
		}
		this.postRequest = 'yes';
		this.dataService.importData('cms/' + this.actionUrl, this.model).subscribe(reqData => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.actionType = 'all';
				this.notifier.notify('success', reqData.msg);
				this.getAllFaq();

			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}

	public cancelToEdit = () => {
		this.actionType = 'all';
	}
	public redirectToAdd = () => {
		this.chngmode = false;
		this.actionType = 'edit';
		this.pageType = 'add';
		this.model = { "question": "", "answer": "", "status": 1 };
	}

	public openConfirmationDialog(id: string) {
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to delete?')
			.then((confirmed) => this.doDelete(id, confirmed));
	}

	doDelete(id: string, confirmed) {
		if (confirmed == false) {
			return false;
		}
		this.dataService.getData('cms/faqDelete/' + id)
			.subscribe(reqData => {
				if (reqData.status == true) {
					this.getAllFaq();
					this.notifier.notify('success', reqData.msg);
				} else {
					this.notifier.notify('error', reqData.msg);
				}
			})
	}
}
