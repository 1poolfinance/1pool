import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  _id: string,
  pagetitle: string;
  pagetype: string;
  updated_at: string;
  action: string
}

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit { 
  loading = true; postRequest = ''; actionType = ''; editCms = true; displayNoRecords: any;
  config: any; token = localStorage.getItem('Key'); per = false; access:any; con = false;

  model: { "pagetitle": "", "pagecontent": "", "pagetype": "" };

  displayedColumns: string[] = ['pagetitle', 'updated_at', 'action'];
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
    this.config = this.dataService.geteditorconfig()
    this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
      if(res.status == true){ 
        if(res.data.role == 1){
          this.per = true; this.getAllCms();
        }else if(res.data.role == 2){       
        this.access=res.data.access_module;
        var itemArr = [];
        itemArr = this.access.filter( item => item == 'Manage CMS');
        if(itemArr.length!=0){
          this.per = true; this.getAllCms();
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

  public getAllCms = () => {
    this.dataService.getData('cms/get_cms')
      .subscribe(res => {
        this.actionType = 'all'; this.loading = false;

        for (var i = 0; i < res.data.length; i++) {
          var ld = res.data[i];
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
    this.postRequest = '';
    this.loading = true; this.actionType = '';
    this.dataService.getData('cms/cms/' + id)
      .subscribe(res => {
        this.actionType = 'edit';
        this.model = res.data;
        this.editCms = false;
        this.loading = false;
      })
  }

  onSubmit() {
    this.postRequest = 'yes';
    this.dataService.importData('cms/cmsUpdate', this.model).subscribe(reqData => {
      this.postRequest = '';
      if (reqData.status == true) {
        this.getAllCms();
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

  public redirectToAll = (action: string) => {
    this.actionType = action;
  }

}
