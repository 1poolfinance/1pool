import { Component, ElementRef, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  _id: string;
  pair: string;
  last_price: number;
  status: string;
  created: string;
  action: string;
  price: string;
}

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.scss']
})
export class PairsComponent implements OnInit {
  loading = true; postRequest = ''; actionType = ''; editPair = true; toFixed: number;
  displayNoRecords: any; toFix = 8; token = localStorage.getItem('Key'); per = false; access:any;
  
  model: { "option": Number};

  displayedColumns: string[] = ['symbol', 'address', 'decimals', 'price', 'status', 'created_at', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('numericType') numericType: string;
  private regex = {
    number: new RegExp(/^\d+$/),
    decimal: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g)
  };

  private specialKeys = {
    number: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
    decimal: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
  };

  constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    public datepipe: DatePipe,
    private el: ElementRef,
    private confirmDialogService: ConfirmDialogService,
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
        itemArr = this.access.filter( item => item == 'Pairs');
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
    this.getAll();
    this.dataService.getData('admin/getaccdetails').subscribe(resData => {
      var ip_status = resData.data;
      if(ip_status == "not_ok"){
        this.route.navigate(['/404']);
        return false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAll = () => {
    this.dataService.getData('pairs/pairs')
      .subscribe(res => {
        this.actionType = 'all'; this.loading = false;
        for (var i = 0; i < res.data.length; i++) {
          var ld = res.data[i];
          var pairs = res.data[i].symbol;
          var sts = (ld.status == 1) ? "Active" : "Deactive";
          res.data[i].status = sts;
          res.data[i].pair = pairs;
          var newDate = this.dateFormats(ld.created_at);
          res.data[i].created = newDate;
        }
        this.dataSource.data = res.data as PeriodicElement[];
        if (this.dataSource.data.length == 0) {
          this.displayNoRecords = true;
        } else {
          this.displayNoRecords = false;
        }
      })
  }

  public openConfirmationDialog(id: string, status: number) {
    let sts = status == 1 ? 'De-activate' : 'Activate';
    this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to ' + sts + '?')
      .then((confirmed) => this.doStatus(confirmed, id, status));
  }

  doStatus(confirmed, id: string, status) {
    if (confirmed == false) {
      return false;
    }
    let obj = {
      "_id": id,
      "status": status
    };
    this.dataService.importData('pairs/pairStatus', obj)
      .subscribe(reqData => {
        if (reqData.status == true) {
          this.getAll();
          this.notifier.notify('success', reqData.msg);
        } else {
          this.notifier.notify('error', reqData.msg);
        }
      })
  }

  dateFormats(date: Date) {
    let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd H:mm');
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

  onSubmit() {
    this.postRequest = 'yes';
    this.dataService.importData('pairs/pairUpdate', this.model).subscribe(reqData => {
      this.loading = false; this.postRequest = '';
      if (reqData.status == true) {
        this.getAll();
        this.actionType = 'all';
        this.notifier.notify('success', reqData.msg);
      } else {
        this.notifier.notify('error', reqData.msg);
      }
    });
  }

  public cancelToEdit = () => {
    this.actionType = 'all';
  }

  rounds(value, type) {
    let fiat = type.split("/");
    let length = 8;
    if (fiat[1] == 'USD' || fiat[1] == 'EUR') {
      length = 2;
    }
    return parseFloat(value).toFixed(length ? length : value);
  }

}
