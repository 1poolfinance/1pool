import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";

export interface PeriodicElement {
	_id: string,	
	name: string;
	emailid:string;
	subject: number;
	created_at: Date;
	status:number,
	action: any
}

@Component({
	selector: 'app-contactus',
	templateUrl: './contactus.component.html',
	styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
	loading = true;	postRequest = '';actionType = ""; viewContact = true; contactCount = 0;
	viewDetail: {}; token = localStorage.getItem('Key'); per = false; access:any;

	model: {"reply": ""};
	displayNoRecords:any;

	displayedColumns: string[] = ['emailid','name','subject','created_at', 'status', 'action'];
	dataSource = new MatTableDataSource<PeriodicElement>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;
	
	constructor(
		private dataService: DataService,
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
				itemArr = this.access.filter( item => item == 'Manage Contact');
				if(itemArr.length!=0){
					this.per = true;
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
		this.input.nativeElement.value = "";
		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'created_at';
		this.getList();
	}

	

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		fromEvent(this.input.nativeElement,'keyup')
		.pipe(
			debounceTime(150),
			distinctUntilChanged(),
			tap(() => {
				this.paginator.pageIndex = 0;

				this.getList();
			})
			)
		.subscribe();

		merge(this.sort.sortChange, this.paginator.page)
		.pipe(
			tap(() => this.getList())
			)
		.subscribe();
	}


	getList() {
		this.actionType = ''; this.loading = true;
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active
		}

		this.dataService.loadData('home/contactus', params)
		.subscribe(res => {
			this.actionType = 'all'; this.loading = false;
			
			this.dataSource.data = res.data as PeriodicElement[];
			this.contactCount = res.contactCount;
			
			if(this.dataSource.data.length==0){
				this.displayNoRecords = true;
			} else {
				this.displayNoRecords = false;
			}
		})
	}	

	}
