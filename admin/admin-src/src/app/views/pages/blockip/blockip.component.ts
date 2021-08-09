import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';


export interface PeriodicElement {
	_id: string;
	ip: string;
	created_at: Date;
	action: string
}

@Component({
	selector: 'app-blockip',
	templateUrl: './blockip.component.html',
	styleUrls: ['./blockip.component.scss']
})
export class BlockipComponent implements OnInit {
	loading = true; postRequest = ''; actionType = ""; model: {"ip":""}; displayNoRecords:any;
	token = localStorage.getItem('Key'); per = false; access:any; model1: {"email":""};
	displayedColumns: string[] = ['ip', 'created_at', 'action'];
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
		this.dataService.getData('admin/getaccdetails').subscribe(resData => {
			var ip_status = resData.data;
			if(ip_status == "not_ok"){
				this.route.navigate(['/404']);
				return false;
			}
		});
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true; this.getAll();
				}else if(res.data.role == 2){				
					this.access=res.data.access_module;
					var itemArr = [];
					itemArr = this.access.filter( item => item == 'Manage IP');
					if(itemArr.length!=0){
						this.per = true; this.getAll();
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
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	public getAll = () => {
		this.dataService.getData('admin/getblockip')
		.subscribe(res => {
			this.actionType = 'all';this.loading = false;		
			this.dataSource.data = res.data as PeriodicElement[] ;
			if(this.dataSource.data.length==0){
				this.displayNoRecords = true;
			} else {
				this.displayNoRecords = false;
			}
		})
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if(this.dataSource.filteredData.length==0){
			this.displayNoRecords = true;
		} else {
			this.displayNoRecords = false;
		}
	}

	public cancelToAdd = () => {
		this.actionType = 'all';
	}
	public redirectToAdd = () => {
		this.actionType = 'add';
		this.model = {"ip":""};
		this.model1 = {"email":""};
	}

	public redirectToAll = (action: string) => {
		this.actionType = action;
	}

	onSubmit() {
		this.postRequest = 'yes';
		this.dataService.importData('admin/addBlockip', this.model).subscribe(reqData => {
			this.loading = false;this.postRequest = '';
			if(reqData.status == true) {
				this.dataService.sendip(this.model);
				this.getAll();
				this.actionType = 'all';   
				this.notifier.notify( 'success', reqData.msg);
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		});
	}

	submitFunc() {
		this.postRequest = 'yes';
		this.dataService.importData('admin/blockEmail', this.model1).subscribe(reqData => {
			this.loading = false;this.postRequest = '';
			if(reqData.status == true) {
				this.dataService.sendip(this.model1);
				this.getAll();
				this.actionType = 'all';
				this.notifier.notify( 'success', reqData.msg);
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		});
	}

	public openConfirmationDialog(id: string) {
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to delete?')
		.then((confirmed) => this.doDelete(id,confirmed));
	}

	doDelete (id: string, confirmed) {
		if(confirmed == false) {
			return false;
		}
		this.dataService.getData('admin/ipDelete/'+id)
		.subscribe(reqData => {
			if(reqData.status == true) {
				this.dataService.sendip(id);				
				this.getAll();
				this.notifier.notify( 'success', reqData.msg);
			} else {
				this.notifier.notify( 'error', reqData.msg);
			}
		})
	}
}
