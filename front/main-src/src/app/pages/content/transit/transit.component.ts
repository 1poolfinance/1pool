import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { ConnectionService } from '../../../connection.service';
import { Router } from '@angular/router';
import { LPAbi } from '../../../files/lp_abi';
import { EBAbi } from '../../../files/eth_bridge_abi';
import { BBAbi } from '../../../files/bnb_bridge_abi';
import { ContractDetails } from '../../../files/contract';
import { ToastrManager } from 'ng6-toastr-notifications';

let lpAbi             = LPAbi;
let ebAbi             = EBAbi;
let bbAbi             = BBAbi;


declare let window: any;
declare let BinanceChain: any;

let contract_details  = ContractDetails;
let eth_onpool_address  = ContractDetails.eth_onpool_address;
let eth_onpool_contract  = ContractDetails.eth_onpool_contract;
let bnb_onpool_contract  = ContractDetails.bnb_onpool_contract;

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {

  dtOptions: any = {}; stakeHis:any; currentstakedata:any;stakepairHis = []; stakeLoader = false; metabalance : any; account = localStorage.getItem('account'); token = localStorage.getItem('1pool-Token');
currency_select:any="";
eth_bal_op:any="0";
approve_btn:any=false;
transit_btn:any=false;

  showDiv = {
    bnbstation : false
  }

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,public toastr: ToastrManager,private router : Router,private conn: ConnectionService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }



  ngOnInit() {
    if(!this.account){
      this.toastr.errorToastr('Connect your wallet','Error');
      this.router.navigate(['/']);
      return;
    }
  window.web3 = window.web3.currentProvider;
  window.web3 = new window.Web3(window.ethereum);


 this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
        'print'
      ]
    };
    this.stakehis();


  }

  stakehis(){
      let obj = {"account" :this.account} 
      this.conn.postRequest('users/history_bnb',obj, this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.stakeHis = res.result;
        
      }
    });
  }


  async change_fun(e)
  {
    let rpcontract        = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
    await rpcontract.methods.balanceOf(this.account).call((err,balance) =>{
      this.eth_bal_op = balance / 10 ** 18;
    });
    await rpcontract.methods.allowance(this.account,eth_onpool_contract).call(async(err,allowance) =>{
     if(allowance > 0)
     {
         this.transit_btn=true;
     }
     else{
         this.approve_btn=true;
     }
    });
  }

  async approve_func()
  {
    let _self = this;
    this.conn.changebackground();
    let rpcontract        = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
     await rpcontract.methods
                .approve(eth_onpool_contract, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
                .send({ from: this.account })
                .on("transactionHash", hash => {
                })
                .on("receipt", approveresult => {
                  _self.conn.clearbackground();
                  _self.toastr.successToastr("Token is approved",'success');
                   _self.transit_btn=true;
                   _self.approve_btn=false;
                })
                .on("confirmation", (confirmationNumber, approveresult) => {
                })
                .on("error", error => {
                  _self.conn.clearbackground();
                this.toastr.errorToastr(error.message,'Error');
                });
  }

  async getbnbpool()
  {
    let _self = this;
    await BinanceChain.enable();
    window.web3 = new window.Web3(window.BinanceChain);
    var latest = await window.web3.eth.getBlockNumber();
   
    let bnb_contract        = new window.web3.eth.Contract(bbAbi, bnb_onpool_contract);

 
alert(this.account);
    await bnb_contract.methods.message(this.account,"100000000000000000",parseFloat(latest) + 60,"postData.txid_").call(async(err,messagehash) =>{


       let sign = window.web3.eth.accounts.sign(messagehash, "0x19cc7483de721c62a006a1cdc282e773377082a1ebf974b321433bace374846d");
       ;
    var signature = sign.signature;
    




    await bnb_contract.methods
                .claimOnePool(parseFloat(latest) + 60,"100000000000000000","postData.txid_",signature)
                
                .send({ from: this.account})
                .on("transactionHash", hash => {
                })
                .on("receipt", approveresult => {
                  _self.conn.clearbackground();
                  _self.toastr.successToastr("Token is transfered",'success');
                   _self.transit_btn=true;
                })
                .on("confirmation", (confirmationNumber, approveresult) => {
                })
                .on("error", error => {
                  _self.conn.clearbackground();
                this.toastr.errorToastr(error.message,'Error');
                });

                  });
    return  false;



  }


  async withdraw_bnb(eth_op_form: NgForm)
  {
    let _self = this;
    _self.conn.changebackground();
    let postData        = eth_op_form.value;
    let obj = {"txid" :postData.txid_} 

        _self.conn.postRequest('users/getxid',obj, _self.token).subscribe(async (res:any) => {
          var amount_ = res.data.amount * 10 ** 18;
    if(res.status == 1){
    let _self = this;
   /* await BinanceChain.enable();
    window.web3 = new window.Web3(window.BinanceChain);*/
    var latest = await window.web3.eth.getBlockNumber();
    let bnb_contract        = new window.web3.eth.Contract(ebAbi, eth_onpool_contract);

    await bnb_contract.methods.message(this.account,amount_.toString(),parseFloat(latest) + 5,postData.txid_).call(async(err,messagehash) =>{
    let sign = window.web3.eth.accounts.sign(messagehash, "0xef7012588bb6f2895695559f4ce9a3e24916a1f7b05fed8af6f17e7a743f6819");
    var signature = sign.signature;
    await bnb_contract.methods
                .claimOnePool(parseFloat(latest) + 5,amount_.toString(),postData.txid_,signature)
                .send({ from: this.account})
                .on("transactionHash", hash => {
                })
                .on("receipt", approveresult => {
          let obj = {"transactionid" :postData.txid_,status:"completed"}; 
          this.conn.postRequest('users/update_bnb',obj, this.token).subscribe((res:any) => {
          _self.conn.clearbackground();
                  _self.toastr.successToastr("Token is transfered",'success');
                   _self.transit_btn=true;
                   _self.balance_ref();
                   eth_op_form.resetForm();
          });
                })
                .on("confirmation", (confirmationNumber, approveresult) => {
                })
                .on("error", error => {
                  _self.conn.clearbackground();
                this.toastr.errorToastr(error.message,'Error');
                });

                  });
    return  false;



  }else{
    _self.conn.clearbackground();
        _self.toastr.errorToastr(res.msg,'Error');
        }
        });



  }
  async balance_ref()
  {
    let rpcontract        = new window.web3.eth.Contract(lpAbi, eth_onpool_address);
    await rpcontract.methods.balanceOf(this.account).call((err,balance) =>{
      this.eth_bal_op = balance / 10 ** 18;
    });
  }
  async deposit_ethop(eth_op_form: NgForm)
  {
    this.conn.changebackground();
    let _self = this;
    let postData        = eth_op_form.value;
    if(+postData.amount_ > 0)
    {
      if(+this.eth_bal_op < +postData.amount_)
      {
        _self.conn.clearbackground();
        this.toastr.errorToastr("Insufficient balance",'Error');
        return false;
      }
    let deposit_amount   = await window.web3.utils.toWei(postData.amount_.toString(), 'ether');
    let opcontract        = new window.web3.eth.Contract(ebAbi, eth_onpool_contract);
       await opcontract.methods
                .deposit(deposit_amount)
                .send({ from: this.account })
                .on("transactionHash", hash => {
                })
                .on("receipt", approveresult => {
                  _self.conn.clearbackground();
                   _self.transit_btn=true;
                     let obj = {
                            "amount" :postData.amount_,
                            "useraddress" :_self.account.toString(),
                            "txid" :approveresult.transactionHash,
                            "types" :"Deposit",
                            "currency" :"ETH",
                          } 
                          _self.conn.postRequest('users/eth_bridge',obj, _self.token).subscribe((res:any) => {
                            if(res.status == 1){
                              _self.balance_ref();
                              eth_op_form.resetForm();
                              _self.toastr.successToastr(res.msg,'success');
                            }else{
                              _self.toastr.errorToastr(res.msg,'Error');
                            }
                          });


                })
                .on("confirmation", (confirmationNumber, approveresult) => {
                })
                .on("error", error => {
                  _self.conn.clearbackground();
                this.toastr.errorToastr(error.message,'Error');
                });
    }
    else{
      this.toastr.errorToastr("Please enter valid amount",'Error');
    }
  }

}
