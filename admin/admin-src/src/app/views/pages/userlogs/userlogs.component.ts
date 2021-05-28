import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  _id: string;
  ip_address: string;
  location: string;
  browser: string;
  deviceinfo: string;
  created_at: Date;
  email: string;
}

@Component({
  selector: 'app-userlogs',
  templateUrl: './userlogs.component.html',
  styleUrls: ['./userlogs.component.scss']
})
export class UserlogsComponent implements OnInit {

  displayNoRecords = false;
  users: any;
  actusers: any;
  deactusers: any;
  subadmins: any;
  tickets: any;
  pendingKyc: any;
  orders: any;
  activeorders: any;
  deposits: any;
  pdeposits: any;
  withdraws: any;
  pwithdraws: any;
  trades: any;
  logcount: any;
  token = localStorage.getItem('Key');
  per = false; access:any; actionType = ''; loading =true;
  displayedColumns: string[] = ['ip_address', 'email', 'deviceinfo', 'browser', 'created_at'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    public datepipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute
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

    this.dataService.loadData('users/loghistory', params)
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
