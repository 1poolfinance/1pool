import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
	userAdd: string;
	transactionid: string;
	amount: Number;
	status: string;
	currency: string;
	date: string;
	currencytype: string;
}

@Component({
	selector: 'app-bridge-list',
	templateUrl: './bridge-list.component.html',
	styleUrls: ['./bridge-list.component.scss']
})
export class BridgeListComponent implements OnInit {

	displayedColumns: string[] = ['userAdd', 'transactionid', 'currency', 'currencytype', 'amount', 'status', 'date'];
	dataSource = new MatTableDataSource<PeriodicElement>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;
	logcount: any; displayNoRecords = false; actionType = ''; loading =true;
	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		public datepipe: DatePipe,
		private router: Router,
		private route: ActivatedRoute
		) {
		this.notifier = notifier;
		this.dataService.getData('admin/getaccdetails').subscribe(resData => {
			var ip_status = resData.data;
			if(ip_status == "not_ok"){
				this.router.navigate(['/404']);
				return false;
			}
		});
	}

	ngOnInit() {
		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'datetime';
		this.gethistory();

	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		fromEvent(this.input.nativeElement, 'keyup')
		.pipe(
			debounceTime(150),
			distinctUntilChanged(),
			tap(() => {
				this.paginator.pageIndex = 0;
				this.gethistory();
			})
			)
		.subscribe();
		merge(this.sort.sortChange, this.paginator.page)
		.pipe(
			tap(() => this.gethistory())
			)
		.subscribe();
	}

	public gethistory() {
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active
		}

		this.dataService.loadData('admin/bridgehistory', params)
		.subscribe(resData => {
			this.actionType = 'all'; this.loading = false;
				this.dataSource.data = resData.data as PeriodicElement[];
				this.logcount = resData.bridgeCount;
				if (this.dataSource.data.length == 0) {
					this.displayNoRecords = true;
				} else {
					this.displayNoRecords = false;
				}
			});
	}

}
