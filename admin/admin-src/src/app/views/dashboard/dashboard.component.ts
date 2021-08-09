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
import { DataService } from '../../data.service';
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
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  displayNoRecords = false;
  pairsCount: any;
  deposits: any;
  blockip: any;
  withdraws: any;
  stakeCount: any;
  earnCount: any;
  bridgeCount: any;
  users: any;
  displayedColumns: string[] = ['ip_address', 'email', 'deviceinfo', 'browser', 'created_at'];
  model:any ={ethpool :0, sushipool:0, cakepool :0, usdpool :0, wbnbpool :0, opsushipool :0, wethpool :0, ethsushipool:0, total:''};
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
   notifier = notifier;
  }

  ngOnInit() {    
    this.getDashboard(); this.getValue();
  }

  public getDashboard = () => {
    this.dataService.getData('admin/adminDashboard').subscribe(res => {
      this.pairsCount = res.pairsCount
      this.deposits = res.depositCount
      this.blockip = res.blockip
      this.withdraws = res.withdrawCount;
      this.stakeCount = res.stakeCount;
      this.earnCount = res.earnCount;
      this.bridgeCount = res.bridgeCount;
      this.users = res.usersCount;
    });
  }

  getValue(){
    this.dataService.getData('pairs/totalprice').subscribe(res => {
      if(res){
        var pairs = res.data.pairs;
        var val = res.data.stakes;
        var ethpool = pairs.filter(x=>x.symbol == 'eth-onePool');
        var sushipool = pairs.filter(x=>x.symbol == '1pool-sushi');
        var cakepool = pairs.filter(x=>x.symbol == 'onePool-cake');
        var usdpool = pairs.filter(x=>x.symbol == 'onepool-USD');
        var wbnbpool = pairs.filter(x=>x.symbol == 'WBNB');
        var opsushipool = pairs.filter(x=>x.symbol == 'OP');        
        var wethpool = pairs.filter(x=>x.symbol == 'Weth');
        var ethsushipool = pairs.filter(x=>x.symbol == 'eth-sushi');
        var ethpool1 = val.filter(x=>x.currency == 'eth-onePool');
        var sushipool1 = val.filter(x=>x.currency == '1pool-sushi');
        var cakepool1 = val.filter(x=>x.currency == 'onePool-cake');
        var usdpool1 = val.filter(x=>x.currency == 'onepool-USD');
        var wbnbpool1 = val.filter(x=>x.currency == 'WBNB');
        var opsushipool1 = val.filter(x=>x.currency == 'OP');        
        var wethpool1 = val.filter(x=>x.currency == 'Weth');
        var ethsushipool1 = pairs.filter(x=>x.currency == 'eth-sushi')
        for(var i in ethpool){
          for(var j in ethpool1){
            var tot = 0;
            tot +=ethpool1[j].amount;
            ethpool1[j].total = tot;
            this.model.ethpool = Number(ethpool1[j].total) * Number(ethpool[i].price);
          }
        }
        for(var i in sushipool){
          for(var j in sushipool1){
            var tot = 0;
            tot +=sushipool1[j].amount;
            sushipool1[j].total = tot;
            this.model.sushipool = Number(sushipool1[j].total) * Number(sushipool[i].price);
          }
        }
        for(var i in cakepool){
          for(var j in cakepool1){
            var tot = 0;
            tot +=cakepool1[j].amount;
            cakepool1[j].total = tot;
            this.model.cakepool = Number(cakepool1[j].total) * Number(cakepool[i].price);
          }
        }
        for(var i in usdpool){
          for(var j in usdpool1){
            var tot = 0;
            tot +=usdpool1[j].amount;
            usdpool1[j].total = tot;
            this.model.usdpool = Number(usdpool1[j].total) * Number(usdpool[i].price);
          }
        }
        for(var i in wbnbpool){
          for(var j in wbnbpool1){
            var tot = 0;
            tot +=wbnbpool1[j].amount;
            wbnbpool1[j].total = tot;
            this.model.wbnbpool = Number(wbnbpool1[j].total) * Number(wbnbpool[i].price);
          }
        }
        for(var i in opsushipool){
          for(var j in opsushipool1){
            var tot = 0;
            tot +=opsushipool1[j].amount;
            opsushipool1[j].total = tot;
            this.model.opsushipool = Number(opsushipool1[j].total) * Number(opsushipool[i].price);
          }
        }
        for(var i in wethpool){
          for(var j in wethpool1){
            var tot = 0;
            tot +=wethpool1[j].amount;
            wethpool1[j].total = tot;
            this.model.wethpool = Number(wethpool1[j].total) * Number(wethpool[i].price);
          }
        }
        for(var i in ethsushipool){
          for(var j in ethsushipool1){
            var tot = 0;
            tot +=ethsushipool1[j].amount;
            ethsushipool1[j].total = tot;
            this.model.ethsushipool = Number(ethsushipool1[j].total) * Number(ethsushipool[i].price);
          }
        }
        var total =  this.model.ethpool + this.model.sushipool+ this.model.cakepool + this.model.usdpool + this.model.wbnbpool + this.model.opsushipool + this.model.wethpool + this.model.ethsushipool;
        this.model.total = total.toFixed(8);
      }
    });

  }

  navigateSection = (type, data) => {

    if (type == "user") {
      if (data == 'active') {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/users'], { queryParams: { type: 'active' } });
      }
      else if (data == 'inactive') {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/inactive/users']);
      } else if (data == 'pendingKyc') {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/pendingKyc/users']);
      }
      else {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/users']);
      }
    } else if (type == "deposit") {
      if (data == "pending") {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/pending/deposit']);
      } else {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/deposit']);
      }
    }
    else if (type == "withdraw") {
      if (data == 'pending') {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/pending/withdraw']);

      }
      else {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/withdraw']);
      }
    }
    else if (type == "orders") {
      if (data == 'active') {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/active/orderhistory']);

      }
      else {
        this.router.navigate(['/yDKXkjbhUFZYGEUdINOs/pages/orderhistory']);

      }

    }

  }

}

