import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
	_id: string,
	symbol: string;
	type: string;
	name: string;
	status: number;
	deposit_status: number;
	withdraw_status: number;
	updated_at: number;
	action: any;
}

@Component({
	selector: 'app-currency',
	templateUrl: './currency.component.html',
	styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
	loading = true;	postRequest = '';actionType = ''; toFixed: number; editCurrency = true;
	displayNoRecords: any; token = localStorage.getItem('Key'); per = false; access:any;


	model: { "name", "symbol": "", "type": "", "min_deposit": "", "max_deposit": "", "min_withdraw": "", "max_withdraw": "", "withdraw_fee": "", "status": 1, "deposit_status": 1, "withdraw_status": 1 };

	displayedColumns: string[] = ['name', 'symbol', 'updated_at', 'status', 'action'];
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
			this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true;
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Currency');
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
		this.getAllCurrency();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	public getAllCurrency = () => {
		this.dataService.getData('home/currency')
			.subscribe(res => {
				this.actionType = 'all'; this.loading = false;
				for (var i = 0; i < res.data.length; i++) {
					var ld = res.data[i];
					var sts = (ld.status == 0) ? "Deactive":"Active";
					res.data[i].status = sts;
					var newDate = this.dateFormats(ld.updated_at);
					res.data[i].updated_at = newDate;
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
		this.actionType = '';
		this.dataService.getData('home/editCurrency/' + id)
			.subscribe(res => {
				this.actionType = 'edit';
				var output = res.data[0];
				this.model = output;

				this.model.min_deposit = output.min_deposit.toFixed(8);
				this.model.max_deposit = output.max_deposit.toFixed(8);
				this.model.min_withdraw = output.min_withdraw.toFixed(8);
				this.model.max_withdraw = output.max_withdraw.toFixed(8);
				this.model.withdraw_fee = output.withdraw_fee.toFixed(8);
				this.editCurrency = false;
			})
	}

	public cancelToEdit = () => {
		this.actionType = 'all';
	}

	public redirectToAll = (action: string) => {
		this.actionType = action;
	}

	onSubmit() {

		let mind = parseFloat(this.model.min_deposit);
		let maxd = parseFloat(this.model.max_deposit);
		let minw = parseFloat(this.model.min_withdraw);
		let maxw = parseFloat(this.model.max_withdraw);

		if (mind > maxd) {
			this.notifier.notify('error', 'Maximum Deposit Amount must be greater than Minimum Deposit Amount');
			return false;
		}

		if (minw > maxw) {
			this.notifier.notify('error', 'Maximum Withdraw Amount must be greater than Minimum Withdraw Amount');
			return false;
		}

		this.postRequest = 'yes';
		this.dataService.importData('home/updateCurrency', this.model).subscribe(reqData => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.getAllCurrency();
				this.actionType = 'all';
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}
}
