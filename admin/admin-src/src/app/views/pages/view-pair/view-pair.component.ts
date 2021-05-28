import { Component, ElementRef, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-view-pair',
  templateUrl: './view-pair.component.html',
  styleUrls: ['./view-pair.component.scss']
})
export class ViewPairComponent implements OnInit {

  loading = true; postRequest = ''; ticketToken ="";
  actionType = '';
  editPair = true; toFixed: number;
  displayNoRecords: any;
  toFix = 8; p = false;
  token = localStorage.getItem('Key'); per = false; access:any;


  model: any = {};


  private specialKeys = {
    number: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
    decimal: ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'],
  };	

 constructor(
    private dataService: DataService,
    private notifier: NotifierService,
    public datepipe: DatePipe,
    private confirmDialogService: ConfirmDialogService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.notifier = notifier;
    this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
      if(res.status == true){	
				if(res.data.role == 1){
					this.per = true; this.getId();
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Pairs');
				if(itemArr.length!=0){
					this.per = true; this.getId();
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
  }

    getId(){			
			this.actRoute.params.subscribe((params) => {
			this.ticketToken = this.actRoute.snapshot.queryParamMap.get('token');
			if (this.ticketToken != null && this.ticketToken != undefined && this.ticketToken != "") {
				this.dataService.getRequest('pairs/editPair/' + this.ticketToken, this.token)
		    .subscribe((res:any) => {
        this.actionType = 'edit';
        var output = res.data[0];
        this.model = output;
        var out = output.symbol;
        this.model.address = output.address;  
        this.model.pair = out;  
        this.p = true;      
          this.toFix = 8;        
        var toFix = this.toFix;
        this.editPair = false;
        this.loading = false;
      })

			} else {
				this.notifier.notify('error', 'Invalid Request');
				this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/pairs']);
			}
		});	
  }

 onSubmit() {
    this.postRequest = 'yes';
    this.dataService.importData('pairs/pairUpdate', this.model).subscribe(reqData => {
      this.loading = false; this.postRequest = '';
      if (reqData.status == true) {
        this.actionType = 'all';
        this.notifier.notify('success', reqData.msg);
        this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/pairs']);        
      } else {
        this.notifier.notify('error', reqData.msg);      
      }
    });
  }

}
