import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { DatePipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';

export interface PeriodicElement {
	_id: string;
	user: string;
	amount: number;
	status: string;
	currency: string;
	txnid: string;
	created_at: Date;

}

@Component({
	selector: 'app-deposit',
	templateUrl: './deposit.component.html',
	styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
	depositCount = 0;
	displayNoRecords: any;
	per = false; access:any;
	token = localStorage.getItem('Key');
	displayedColumns = ["user", "amount", "txnid", "currency", "status", "created_at"];
	dataSource = new MatTableDataSource<PeriodicElement>();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		private confirmDialogService: ConfirmDialogService,
		private router: Router,
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
		this.input.nativeElement.value = "";
		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'created_at';
		this.loadDeposit();
	}


	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		fromEvent(this.input.nativeElement, 'keyup')
		.pipe(
			debounceTime(150),
			distinctUntilChanged(),
			tap(() => {
				this.paginator.pageIndex = 0;

				this.loadDeposit();
			})
			)
		.subscribe();

		merge(this.sort.sortChange, this.paginator.page)
		.pipe(
			tap(() => this.loadDeposit())
			)
		.subscribe();
	}



	loadDeposit() {
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active
		}
		this.dataService.loadData('admin_deposit/depositList', params)
		.subscribe(res => {
			this.dataSource.data = res.data as PeriodicElement[];
			this.depositCount = res.depositCount;

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
			sortActive: this.sort.active
		}
		this.dataService.loadData('admin_deposit/depositList', params)
		.subscribe(res => {
			var exportfile = [];
			for (var i = 0; i < res.data.length; i++) {
				var ld = res.data[i];    
				
				let json ={
					"txnid" : ld.txnid,
					"username": ld.user,
					"amount": ld.amount,
					"currency":ld.currency,
					"status":ld.status,
					"created_at":this.datepipe.transform(ld.created_at, 'yyyy-MM-dd H:mm:ss')
				};
				exportfile.push(json);
			}
			this.depositCount = res.depositCount;
			if (this.dataSource.data.length == 0) {
				this.displayNoRecords = true;
				this.notifier.notify('error','No Records Found');
			} else {
				this.displayNoRecords = false;
				this.dataService.exportAsExcelFile(exportfile, "deposit_history");
			}
		})  
	}

}




