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

export interface PeriodicElement {
	_id: string;
	ip_address: string;
	emailid: string;	
	deviceinfo: string;
	browser: string;
	created_at: number;
	count:number;
}

@Component({
  selector: 'app-logattempts',
  templateUrl: './logattempts.component.html',
  styleUrls: ['./logattempts.component.scss']
})
export class LogattemptsComponent implements OnInit {
 loading = true; actionType = ''; logcount :any; usersCount = 0; displayNoRecords: any; select: any;
	userInfo: any = {};	userWlt: any = []; token = localStorage.getItem('Key');	per = false; access:any;

	displayedColumns = ["ip_address", "emailid", "browser", "deviceinfo", "created_at", "attemptCount"];

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
		private route: ActivatedRoute){


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
    this.sort.direction = 'desc';
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.sort.active = 'created_at';
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

    this.dataService.loadData('users/login_attempt', params)
      .subscribe(resData => {
        this.actionType = 'all'; this.loading = false;
        this.dataSource.data = resData.data as PeriodicElement[];
        this.logcount = resData.logCount;       

        if (this.dataSource.data.length == 0) {
          this.displayNoRecords = true;
        } else {
          this.displayNoRecords = false;
        }
      });
  }
}

