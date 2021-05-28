import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
	_id: string;
	username:string;
	amount: number;	
	currency:string;	
	status: string;		
	user:string;
	reference_no:string;
	created_at: Date;	
}

@Component({
	selector: 'app-withdraw',
	templateUrl: './withdraw.component.html',
	styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

	loading = true; actionType = 'all';
	withdrawCount = 0;
	viewDetail: any = {};
	adminBank: any = [];
	displayNoRecords:any;
	idrejectLoader= false;
	IDRejectForm = false;
	OTPForm=false;
	DBtn = true;
	type=1;
	IDmodel = {rejcomments:""};
	OTPmodel = {otp:""};
	XRPkey = {xkey:""};
	per = false; access:any; ticketToken:any; userid:any; wtype:any; select:any;
	token = localStorage.getItem('Key');
	displayedColumns= ["username","amount","reference_no", "currency" ,"status","created_at","action"];
	dataSource = new MatTableDataSource<PeriodicElement>();
	
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		private confirmDialogService: ConfirmDialogService,
		private router: Router,
		private actRoute: ActivatedRoute,
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
					itemArr = this.access.filter( item => item == 'Transactions');
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
		});		
	}

	ngOnInit() {
		this.actRoute.queryParams
			.filter(params => params.type)
			.subscribe(params => {
				var sel = params.type;
				if (sel == "pending") {
					this.select = "pending";
					this.input.nativeElement.value = "";
				}
				 else {
					this.input.nativeElement.value = "";
				}
			});
		this.input.nativeElement.value = "";
		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'created_at';
		this.loadWithdraw();
		this.withdraw_action();
	}

	withdraw_action(){		
		this.actRoute.params.subscribe((params) => {
			if(this.actRoute.snapshot.queryParamMap.get('type')) {
				this.ticketToken = this.actRoute.snapshot.queryParamMap.get('token');
				this.userid = this.actRoute.snapshot.queryParamMap.get('verify');
				this.wtype = this.actRoute.snapshot.queryParamMap.get('type');
				this.IDRejectForm = false;
				this.DBtn = true;
				this.idrejectLoader = false;
				if(this.wtype == 'confirm'){
					this.OTPForm = true;
				}
				if(this.wtype == 'reject'){
					this.IDRejectForm = true;
				}
				var dta = {
					ticketToken:this.ticketToken,
					Type:this.wtype
				}
				this.dataService.importData('admin_withdraw/getWithdraw', dta).subscribe((res: any) => {
					this.loading = false;
					if (res.status == true) {
						if(this.wtype == 'confirm') {
							this.notifier.notify('success',res.msg);
						}
						this.onView(res.data[0]._id)
					} else {
						this.notifier.notify('error',res.msg);
						this.OTPForm = false;
						this.IDRejectForm = false;
					}
				})
				
			}
		});	
	}


	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		fromEvent(this.input.nativeElement,'keyup')
		.pipe(
			debounceTime(150),
			distinctUntilChanged(),
			tap(() => {
				this.paginator.pageIndex = 0;

				this.loadWithdraw();
			}))
		.subscribe();

		merge(this.sort.sortChange, this.paginator.page)
		.pipe(
			tap(() => this.loadWithdraw())
			)
		.subscribe();
	}
	
	loadWithdraw() {
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active,
			selected: this.select
		}

		this.dataService.loadData('admin_withdraw/withdrawList', params)
		.subscribe(res => {
			
			this.dataSource.data = res.data as PeriodicElement[];
			this.withdrawCount = res.withdrawCount;
			
			if(this.dataSource.data.length==0){
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
			sortActive: this.sort.active
		}
		this.dataService.loadData('admin_withdraw/withdrawList', params)
		.subscribe(res => {
			this.loading = false;
			var exportfile = [];
				 for (var i = 0; i < res.data.length; i++) {
          var ld = res.data[i];    
          
          let json ={
          	"reference_no" : ld.reference_no,
          	"username": ld.username,
          	"amount": ld.amount,
          	"currency":ld.currency,
          	"status":ld.status,
          	"created_at":this.datepipe.transform(ld.created_at, 'yyyy-MM-dd H:mm:ss')
          };
 					exportfile.push(json);
        }
			this.withdrawCount = res.withdrawCount;
			if (this.dataSource.data.length == 0) {
				this.displayNoRecords = true;
				this.notifier.notify('error','No Records Found');
			} else {
				this.displayNoRecords = false;
				this.dataService.exportAsExcelFile(exportfile, "withdraw_history");
			}
		})  
	}


	public depositConfirmDialog(id: string, status: number) {
		let sts = status==1?'completed':'rejected';
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to '+sts+'?')
		.then((confirmed) => this.doConfirm(id, status,confirmed))
	}

	doConfirm (id: string, status: number, confirmed) {
		
		if(confirmed == false) {
			return false;
		}
		let objData = {
			_id : id,
			status: status,
			otp: this.OTPmodel.otp,
			xkey: this.XRPkey.xkey,
			reason:this.IDmodel.rejcomments
		}
		this.idrejectLoader=true;

		this.dataService.importData('admin_withdraw/updateWithdraw', objData)
		.subscribe(reqData => {
			this.IDRejectForm = false;
			this.DBtn = false;
			if(reqData.status == true) {
				this.dataSource.data.find( x => x._id == id).status = String(status);
				this.notifier.notify( 'success', reqData.msg);
				this.OTPForm = false;
				this.IDRejectForm = false;
				this.actionType = 'all';
				this.loadWithdraw();

			} else {
				this.DBtn=true;
				this.idrejectLoader=false;
				this.notifier.notify( 'error', reqData.msg);
			}
		})
	}


	rounds(value,length=8){
		return value.toFixed(length?length:value);
	}
	public redirectToAll = (action: string) => {
		this.actionType = action;
		this.OTPForm = false;
		this.IDRejectForm = false;
	}


	onView(_id) {
		this.actionType = 'view';
		let row = this.dataSource.data.filter( x => x._id == _id);
		this.viewDetail = row[0];	
		
	}


	rejectForm(type: number) {
		
		if(this.type) {
			this.IDRejectForm = true;
			this.DBtn= false;

		}
	}
	cancelReject(type) {
		
		if(this.type) {
			this.IDRejectForm = false;
			this.IDmodel.rejcomments='';
			this.DBtn= true;
			
		}
	}
	showOTP(){
		this.OTPForm=true;
	}
	sendOTP(){
		
		this.wtype = 'confirm';
		var dta = {
			ticketToken:this.viewDetail._id,
			Type:this.wtype
		}
		this.dataService.importData('admin_withdraw/sendOtp', dta).subscribe((res: any) => {
			this.loading = false;
			if (res.status == true) {
				if(this.wtype == 'confirm') {
					this.notifier.notify('success',res.msg);
				}
				this.onView(res.data[0]._id)
			} else {
				this.notifier.notify('error',res.msg);
				this.OTPForm = false;
				this.IDRejectForm = false;
			}
		})
		this.OTPForm=true;
	}
	capitalizeFirstLetter(str) {

		return str[0].toUpperCase() + str.slice(1);
	}

}
