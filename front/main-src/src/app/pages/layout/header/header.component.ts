import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../connection.service';
declare let window: any;
declare let BinanceChain: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
navbarCollapsed = true; metabalance:any; 

account = localStorage.getItem('account');
account_bnb = localStorage.getItem('account_bnb');
  toggleNavbarCollapsing() { this.navbarCollapsed = !this.navbarCollapsed; }
  constructor(private router : Router,public toastr: ToastrManager,private conn: ConnectionService) { }

  ngOnInit() {
  }

  async walletoptions(cur){

    var key = this;
    if(cur == "ETH") { 
  	if (typeof window.web3 !== "undefined") {
        window.web3 = window.web3.currentProvider;
        window.web3 = new window.Web3(window.ethereum);
        var account = await window.ethereum.enable();
      const defaultAccount = account;
        window.web3.eth.getAccounts(async (err, retAccount) => {
          if (defaultAccount.length > 0) {
            window.web3.eth.getBalance(retAccount[0], function(error, balance) {
              key.metabalance = balance / 1.0e18;
              localStorage.setItem("account", retAccount[0]);
              const sucMsg = {
                status: true,
                message: "Login successfully",
                address: retAccount[0]
              };
              var obj={"currency":"ETH","amount":0};
              var postData = {"key":retAccount[0].toLowerCase(),"wallet":[]}               
                postData.wallet.push(obj);
              
              key.conn.postUrl('users/createProfile',postData).subscribe((res:any) => {
                
                if (res.status == 1) {
                  localStorage.setItem('1pool-Token', res.token);             
                 
                  key.toastr.successToastr(res.msg,'success');
                  window.location.href="/farm";
                 
                }else {
                  key.toastr.errorToastr(res.msg,'Error');
                }
              });
            })
          } else {
            const failMsg = {
              status: false,
              message: "No account found"
            };
            this.toastr.errorToastr("No account found",'error');
          }
          if (err != null) {
            const failMsg = {
              status: false,
              message: "Error retrieving account"
            };
            this.toastr.errorToastr("Error retrieving account",'error');
          }
        });
      } else {
        const failMsg = {
          status: false,
          message: "Metamask extension not added on your browser"
        };
        this.toastr.errorToastr("Metamask extension not added on your browser",'error');
      }
    }
    else
    {
      if (typeof BinanceChain !== "undefined") {
      await BinanceChain.enable();
      window.web3 = new window.Web3(window.BinanceChain);
        window.web3.eth.getAccounts(async (err, retAccount) => {
          if (retAccount.length > 0) {
            window.web3.eth.getBalance(retAccount[0], function(error, balance) {
              key.metabalance = balance / 1.0e18;
              localStorage.setItem("account_bnb", retAccount[0]);
              const sucMsg = {
                status: true,
                message: "Login successfully",
                address: retAccount[0]
              };
              var obj={"currency":"BNB","amount":0};
              var postData = {"key":retAccount[0].toLowerCase(),"wallet":[]}               
                postData.wallet.push(obj);
              key.conn.postUrl('users/createProfile',postData).subscribe((res:any) => {
                if (res.status == 1) {
                  localStorage.setItem('1pool-Token_bnb', res.token);
                  key.toastr.successToastr(res.msg,'success');
                  window.location.href="/farm-bnb";
                }else {
                  key.toastr.errorToastr(res.msg,'Error');
                }
              });
            })
          } else {
            const failMsg = {
              status: false,
              message: "No account found"
            };
            this.toastr.errorToastr("No account found",'error');
          }
          if (err != null) {
            const failMsg = {
              status: false,
              message: "Error retrieving account"
            };
            this.toastr.errorToastr("Error retrieving account",'error');
          }
        });
      }
      else
      {
        const failMsg = {
          status: false,
          message: "Binance chain wallet not added on your browser"
        };
        this.toastr.errorToastr("Binance chain wallet not added on your browser",'error');
      }
    }
  }

  logout(){
    localStorage.removeItem('account');
    localStorage.removeItem('1pool-Token');

    localStorage.removeItem('account_bnb');
    localStorage.removeItem('1pool-Token_bnb');

    this.toastr.successToastr('Logout Successfully','success');
     window.location.href="";
  }

}