import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Socket } from 'ngx-socket-io';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';


export interface PeriodicElement {
	userAdd: string;
	randId: string;
	wallet: string;
	updated_at: string;	
}

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	usersCount = 0; displayNoRecords: any; select: any;
	userInfo: any = {};
	userWlt: any = []; actionType = ''; loading =true;
  info = [];
	selfie = { reject_message: "" };
	idproof = { reject_message: "" };
	selfieRequest = false; idproofRequest = false;
	selfieRejectForm = false;
	selfieBtn = true;
	IDRejectForm = false; IDBtn = true;
	idrejectLoader = false;
	selfieRejectLoader = false;
	token = localStorage.getItem('Key');
	per = false; access:any;
	displayedColumns = ["userAdd", "randId", "wallet",  "updated_at"];

	dataSource = new MatTableDataSource<PeriodicElement>();	

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		private confirmDialogService: ConfirmDialogService,
		private socket: Socket,
		private router: Router,
		private route: ActivatedRoute,
		public datepipe: DatePipe
	) {
		this.notifier = notifier;
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true;
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage Users');
				if(itemArr.length!=0){
					this.per = true;
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/dashboard']);				
		} 
	});
}

	ngOnInit() {
		this.route.queryParams
			.filter(params => params.type)
			.subscribe(params => {
				var sel = params.type;
				if (sel == "active") {
					this.select = 1;
					this.input.nativeElement.value = "";
				}
				else if (sel == "inactive") {
					this.select = 0
					this.input.nativeElement.value = "";
				}
				else if (sel == "pendingKyc") {
					this.select = 2
					this.input.nativeElement.value = "";
				} else {
					this.input.nativeElement.value = "";
				}
			});

		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'created_at';
		this.loadUsers();
	}

	ngAfterViewInit() {

		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		fromEvent(this.input.nativeElement, 'keyup')
			.pipe(
				debounceTime(150),
				distinctUntilChanged(),
				tap(() => {
					this.paginator.pageIndex = 0;

					this.loadUsers();
				})
			)
			.subscribe();

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				tap(() => this.loadUsers())
			)
			.subscribe();
	}

		public loadUsers() {	
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active,
			selected: this.select
		}
		this.dataService.loadData('admin/userlist', params)
			.subscribe(res => {
				this.actionType = 'all'; this.loading = false;
				this.dataSource.data = res.data as PeriodicElement[];

				this.usersCount = res.usersCount;
				if (this.dataSource.data.length == 0) {
					this.displayNoRecords = true;
				} else {
					this.displayNoRecords = false;
				}
			})
	}

	my_profit_excel(){
     let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active,
			selected: this.select
		}
   		this.dataService.loadData('admin/userlist', params)
			.subscribe(res => {
				var exportfile = [];
				 for (var i = 0; i < res.data.length; i++) {
          var ld = res.data[i];
          var status = ld.status;
          var tfasts = ld.tfa_status;
          var kycsts;
          if(ld.kyc_status == 3){
          	kycsts = "Verified"
          }else{          	
					kycsts = (ld.kyc_status == 0) ? "Not upload" : ((ld.kyc_status == 1) ? "Pending" : "Rejected");
          }
					tfasts = (tfasts == 0) ? "Disabled" : "Enabled";
					status = (status == 0) ? "Inactive" : ((status == 1) ? "Active" : "Deactive");
          
          let json = {
          	"email" : ld.email,
          	"username": ld.username,
          	"kyc_status": kycsts,
          	"status":status,
          	"tfa_status":tfasts,
          	"created_at":this.datepipe.transform(ld.created_at, 'yyyy-MM-dd H:mm:ss')
          };
 					exportfile.push(json);
        }
				this.usersCount = res.userCount;
				if (this.dataSource.data.length == 0) {
					this.displayNoRecords = true;
					this.notifier.notify('error','No Records Found');
				} else {
					this.displayNoRecords = false;
				  this.dataService.exportAsExcelFile(exportfile, "user_list");
         
				}
			})  
  }

	public openConfirmationDialog(id: string, status: number) {
		let sts = status == 1 ? 'De-activate' : 'Activate';
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to ' + sts + '?')
			.then((confirmed) => this.doStatus(confirmed, id, status))
	}


	public openConfirmDialog(id: string, status: number) {
		let sts = status == 0 ? 'Disable' : 'Enable';
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to ' + sts + ' TFA?')
			.then((confirmed) => this.dotfaStatus(confirmed, id, status))
	}


	dotfaStatus(confirmed, id: string, status) {
		if (confirmed == false) {
			return false;
		}
		let obj = {
			"_id": id,
			"tfaStatus": status
		};

		this.dataService.importData('users/tfaStatus', obj)
			.subscribe(reqData => {
				if (reqData.status == true) {
					this.loadUsers();
					this.notifier.notify('success', "Successfully updated");					 
				} else {
					this.notifier.notify('error', "Invalid request. Please try again");
				}
			})
	}

	doStatus(confirmed, id: string, status) {
		if (confirmed == false) {
			return false;
		}
		let obj = {
			"_id": id,
			"status": status
		};
		this.dataService.importData('users/status', obj)
			.subscribe(reqData => {
				if (reqData.status == true) {
					this.loadUsers();
					this.notifier.notify('success', reqData.msg);					
					if(obj.status == 1){
					var deactive = {"token":reqData.token,'status':obj.status}				
					}
				} else {
					this.notifier.notify('error', reqData.msg);
				}
			})
	}

	resendFunc(id) {
		let send = {"id": id};
		this.dataService.importData('basic/resend_mail', send)
			.subscribe(resData => {
				if(resData.success == 1){
					this.notifier.notify('success',resData.msg)
				}else{
					this.notifier.notify('error',resData.msg)
				}
			});
	} 

	
	

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.filteredData.length == 0) {
			this.displayNoRecords = true;
		} else {
			this.displayNoRecords = false;
		}
	}
	
}
