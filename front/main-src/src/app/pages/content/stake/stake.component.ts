import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../connection.service';
import { ContractDetails } from '../../../files/contract';
import { PoolStakeAbi } from '../../../files/pool_staking_api';
import { VaultAbi } from '../../../files/vault_api';
import { RewardPoolAbi } from '../../../files/reward_pool_api';
import { LPAbi } from '../../../files/lp_abi';
import { RewardFactoryAbi } from '../../../files/reward_factory_api';


import { environment } from '../../../../environments/environment';

declare let window: any;


let contract_details  = ContractDetails;
let poolstakeabi      = PoolStakeAbi;
let lpAbi             = LPAbi;
let rewardfactoryAbi  = RewardFactoryAbi;
let vaultabi  = VaultAbi;

@Component({
  selector: 'app-stake',
  templateUrl: './stake.component.html',
  styleUrls: ['./stake.component.scss']
})
export class StakeComponent implements OnInit {
dtOptions: any = {}; stakeHis:any; currentstakedata:any;stakepairHis = []; stakeLoader = false; metabalance : any; account = localStorage.getItem('account'); token = localStorage.getItem('1pool-Token');
currency_select:any="";rewrd_btn:any = true;

contractAdd = '';
  constructor(public toastr: ToastrManager,private router : Router,private conn: ConnectionService) { }
  ngOnInit() {

    
    const body = document.getElementsByTagName('body')[0];
      body.classList.remove('forOverlayBottom');
  

    if(!this.account){
      this.toastr.errorToastr('Connect your wallet','Error');
      this.router.navigate(['/']);
      return;
    }
    this.getBalance();
    this.dtOptions = {
     
      dom: 'Bfrtip',
      buttons: [
       
        'print',       
      ]
    };

    this.stakehis();
    this.stakepairhis();

  }

  getBalance(){
    var key = this;
    window.web3 = window.web3.currentProvider;
    window.web3 = new window.Web3(window.ethereum);
    window.web3.eth.getBalance(key.account, function(error, balance) {
      key.metabalance = balance / 1.0e18;
    })
  }

  amountKeyup(val,stake: NgForm){
  }

  deposit_amount       = 0;
  available_lp_amount  = 0;
  stakebutton_show  = true;
  show_unstake_section  = false;
  async stakepair_select(e){
    this.rewrd_btn       = false;
    this.deposit_amount       = 0;
    this.available_lp_amount  = 0;
      let self = this;
      this.currentstakedata = e.target.value;
      let cont_addr         = contract_details.reward_pool_contract;
      let abi               = RewardPoolAbi;
      let rpcontract        = new window.web3.eth.Contract(abi, cont_addr);

      let lp_contract           = contract_details.onepool;

          await this.lp_token_balance(lp_contract,lpAbi,this.account).then(async function (retAccount: any) {
              if(retAccount.status) {
                self.available_lp_amount = retAccount.balance;
                if(retAccount.rawbalance>0){
                  self.stakebutton_show = true;
                }
              } else {
                alert("Something went to wrong. Please try again later.")
              }
            }).catch(function (error) {
              alert("Something went to wrong. Please try again later.")
            });
        let rfcontract_new            = new window.web3.eth.Contract(lpAbi, contract_details.onepool_staking);
        
         await rfcontract_new.methods.balanceOf(this.account).call(async(err,userInforesult) =>{
            if(userInforesult){
              this.deposit_amount   = await window.web3.utils.fromWei(userInforesult.toString(), 'ether');
              if(userInforesult.amount > 0){
                this.show_unstake_section = true;
              }
            }
          
        });
  }

  async stakeApprove(){
    
  }

  cur_stack_pool_info :any;
  async stakeFun(stake: NgForm){
    this.conn.changebackground();
    let postData        = stake.value;
    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
        
        var currency_select = "1POOL";
        let lp_contract           = contract_details.onepool;//onepool token
        let reawardFactory        = contract_details.onepool_staking;//onepool staking
        let _self = this;
            await this.lp_token_balance(lp_contract,lpAbi,this.account).then(async function (retAccount: any) {
              if(retAccount.rawbalance<amount) {
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                stake.resetForm();
                _self.conn.clearbackground();
              } else {
                  let approve_contract  = lp_contract;
                  let approve_abi       = lpAbi;
                  let approve_spender   = reawardFactory;
                  await _self.approvecall(approve_contract,approve_abi,approve_spender,amount).then(async function (retApprove: any) {
                    if(retApprove.status) {
                      let factory_contract  = reawardFactory;
                      let factory_abi       = rewardfactoryAbi;
                      
                      await _self.depositcall(factory_contract,factory_abi,amount).then(async function (retdeposit: any) {
                        if(retApprove.status) {
                          _self.conn.clearbackground();
                          let obj = {
                            "amount" :postData.amount,
                            "poolid" :31,//31
                            "useraddress" :_self.account.toString(),
                            "txid" :retdeposit.txid.transactionHash,
                            "types" :"Deposit",
                            "currency" :currency_select,
                          } 
                         
                          _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                            if(res.status == 1){
                              stake.resetForm();
                              _self.toastr.successToastr(res.msg,'success');
                              _self.router.navigate(['/stake']);
                              _self.stakehis();
                            }else{
                              _self.toastr.errorToastr(res.msg,'Error');
                            }
                          });
                           _self.balanceref();
                        } else {
                          _self.toastr.errorToastr(retApprove.message,'Error');
                          stake.resetForm();
                          _self.conn.clearbackground();
                        }
                      }).catch(function (error) {
                        _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                        _self.conn.clearbackground();
                      });
                    } else {
                       _self.toastr.errorToastr(retApprove.message,'Error');
                      stake.resetForm();
                      _self.conn.clearbackground();
                    }
                  }).catch(function (error) {
                    _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                    _self.conn.clearbackground();
                  });

              }
            }).catch(function (error) {
              _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
              _self.conn.clearbackground();
            });
    

    return;
    this.conn.postRequest('users/stake',postData, this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.toastr.successToastr(res.msg,'success');
        this.router.navigate(['/stake']);
        this.stakehis();
      }else{
        this.toastr.errorToastr(res.msg,'Error');
      }
    });
  }

  async balanceref()
  {

      let self = this;
      let cont_addr         = contract_details.reward_pool_contract;
      let abi               = RewardPoolAbi;
      let rpcontract        = new window.web3.eth.Contract(abi, cont_addr);
      if(this.currentstakedata != 30)
      {
      await rpcontract.methods.poolInfo(this.currentstakedata).call(async(err,poolInforesult) =>{
      if(poolInforesult){
      let rfcontract            = new window.web3.eth.Contract(rewardfactoryAbi, poolInforesult.reawardFactory);
      let lp_contract           = poolInforesult.lpToken;
      await this.lp_token_balance(lp_contract,lpAbi,this.account).then(async function (retAccount: any) {
      self.available_lp_amount = retAccount.balance;
      });
      }
      });


    await rpcontract.methods.poolInfo(this.currentstakedata).call(async(err,result) =>{
      if(result) {
        this.cur_stack_pool_info  = result;
      let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
      let rfcontract            = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
      await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
      if(userInforesult){
      self.deposit_amount   = await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether');
      }
      });
    }
      });
  }
  }


   async unstakeFun(stake: NgForm){
    this.conn.changebackground();
    let postData        = stake.value;

    if(postData.amount > 0) {

    if(postData.currency != "31") {
    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(postData.currency).call(async(err,result) =>{

          if(this.currentstakedata == 0)
          var currency_select = "eth-onePool";
          else if(this.currentstakedata == 1)
          var currency_select = "eth-sushi";
          else
          var currency_select = "1pool-sushi";


      if(result) {
        this.cur_stack_pool_info  = result;
        let lp_contract           = this.cur_stack_pool_info.lpToken;
        let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
        let _self = this;
          let rfcontract            = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
          await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
            if(userInforesult){
              this.deposit_amount   = await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether');
              if(userInforesult.amount < +amount){
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                _self.conn.clearbackground();
              }else{
                let factory_contract  = reawardFactory;
                let factory_abi       = rewardfactoryAbi;
                await _self.withdrawcall(factory_contract,factory_abi,amount).then(async function (retWithdraw: any) {
                  if(retWithdraw.status) {
                    
                    _self.toastr.successToastr(retWithdraw.message,'success');
                    _self.conn.clearbackground();
                    let obj = {
                    "amount" :postData.amount,
                    "poolid" :postData.currency,
                    "useraddress" :_self.account.toString(),
                    "txid" :retWithdraw.txid.transactionHash,
                    "types" :"Withdraw",
                    "currency" :currency_select,
                    } 
                    _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                    if(res.status == 1){
                    _self.router.navigate(['/stake']);
                    _self.stakehis();
                    }else{
                    _self.toastr.errorToastr(res.msg,'Error');
                    }
                    });
                    _self.stakepairhis();

                  } else {
                    _self.toastr.errorToastr(retWithdraw.message,'Error');
                    _self.conn.clearbackground();
                  }
                }).catch(function (error) {
                  _self.toastr.errorToastr(error.message,'Error');
                  _self.conn.clearbackground();
                });
              }
            }
          });
      } else {

      }
    });

    return;

  }
  else {

    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;

          var currency_select = "1POOL";


        let lp_contract           = contract_details.onepool;
        let reawardFactory        = contract_details.onepool_staking;
       
        let _self = this;
        
          let rfcontract            = new window.web3.eth.Contract(lpAbi, reawardFactory);
          await rfcontract.methods.balanceOf(this.account).call(async(err,userInforesult) =>{
            if(userInforesult){
              this.deposit_amount   = await window.web3.utils.fromWei(userInforesult.toString(), 'ether');
              if(userInforesult.amount < +amount){
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                _self.conn.clearbackground();
              }else{
                let factory_contract  = reawardFactory;
                let factory_abi       = rewardfactoryAbi;
                await _self.withdrawcall(factory_contract,factory_abi,amount).then(async function (retWithdraw: any) {
                  if(retWithdraw.status) {
                    
                    _self.toastr.successToastr(retWithdraw.message,'success');
                    _self.conn.clearbackground();
                    let obj = {
                    "amount" :postData.amount,
                    "poolid" :postData.currency,
                    "useraddress" :_self.account.toString(),
                    "txid" :retWithdraw.txid.transactionHash,
                    "types" :"Withdraw",
                    "currency" :currency_select,
                    } 
                    _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                    if(res.status == 1){
                    _self.router.navigate(['/stake']);
                    _self.stakehis();
                    }else{
                    _self.toastr.errorToastr(res.msg,'Error');
                    }
                    });
                    _self.stakepairhis();

                  } else {
                    _self.toastr.errorToastr(retWithdraw.message,'Error');
                    _self.conn.clearbackground();
                  }
                }).catch(function (error) {
                  _self.toastr.errorToastr(error.message,'Error');
                  _self.conn.clearbackground();
                });
              }
            }
          });
      

    return;

    

  

  }
  
  }
  else{
    this.conn.clearbackground();
    this.toastr.errorToastr("Please enter valid number",'Error');
  }
  }

  async unstakeFun_old(stake: NgForm){
    this.conn.changebackground();
    let postData        = stake.value;
    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(this.currentstakedata).call(async(err,result) =>{
      if(result) {
        this.cur_stack_pool_info  = result;
        let lp_contract           = this.cur_stack_pool_info.lpToken;
        let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
        let _self = this;
          let rfcontract            = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
          await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
            if(userInforesult){
              this.deposit_amount   = await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether');
              if(userInforesult.amount < +amount){
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                stake.resetForm();
                _self.conn.clearbackground();
              }else{
                let factory_contract  = reawardFactory;
                let factory_abi       = rewardfactoryAbi;
                await _self.withdrawcall(factory_contract,factory_abi,amount).then(async function (retWithdraw: any) {
                  if(retWithdraw.status) {
                    
                    _self.toastr.successToastr(retWithdraw.message,'success');
                    stake.resetForm();
                    _self.conn.clearbackground();
                    let obj = {
                    "amount" :postData.amount,
                    "poolid" :_self.currentstakedata,
                    "useraddress" :_self.account.toString(),
                    "txid" :retWithdraw.txid.transactionHash,
                    "types" :"Unstake",
                    } 
                    _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                    if(res.status == 1){
                    _self.router.navigate(['/stake']);
                    _self.stakehis();
                    }else{
                    _self.toastr.errorToastr(res.msg,'Error');
                    }
                    });
                    _self.balanceref();

                  } else {
                    _self.toastr.errorToastr(retWithdraw.message,'Error');
                    stake.resetForm();
                    _self.conn.clearbackground();
                  }
                }).catch(function (error) {
                  _self.toastr.errorToastr(error.message,'Error');
                  _self.conn.clearbackground();
                });
              }
            }
          });
      } else {

      }
    });

    return; 

    this.conn.postRequest('users/stake',"obj", this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.toastr.successToastr(res.msg,'success');
        this.router.navigate(['/stake']);
        this.stakehis();
      }else{
        this.toastr.errorToastr(res.msg,'Error');
      }
    });
  }



      public async lp_token_balance(cont_address: any,abi: any,useraddress:any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          window.web3.eth.getChainId(async(err, netId) => {
            if(netId == environment.chainid.toString()) {
                await contract.methods.balanceOf(useraddress).call(async(err,result) =>{
                  if(result) {
                    const sucMsg = {
                      status: true,
                      rawbalance: result,
                      balance: await window.web3.utils.fromWei(result.toString(), 'ether'),
                      message: "Got balance",
                    };
                    resolve(sucMsg);
                  } else {
                    const sucMsg = {
                      status: false,
                      message: "Somthing went to wrong. Please try again later.",
                    };
                    resolve(sucMsg);
                  }
                });
            } else {
              const sucMsg = {
                      status: false,
                      message: "Kindly Change Ropsten Network",
                    };
              resolve(sucMsg);
            }
          });
        }) as Promise<any>;
      }

      public async approvecall(cont_address: any,abi: any,spender: any,amountIN: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          let amount      = amountIN;
          let decimals    = 18;
          window.web3.eth.getChainId(async(err, netId) => {
            if(netId==environment.chainid.toString().toString()) {
              await contract.methods
                .approve(spender, amount)
                .send({ from: this.account })
                .on("transactionHash", hash => {
                })
                .on("receipt", approveresult => {
                  const sucMsg = {
                        status: true,
                        message: "Token is approved",
                        txid: approveresult,
                  };
                  resolve(sucMsg);
                })
                .on("confirmation", (confirmationNumber, approveresult) => {
                })
                .on("error", error => {
                  let sucMsg = {
                    status: false,
                    message: error.message
                  };
                  resolve(sucMsg);
                });
            } else {
              const sucMsg = {
                      status: false,
                      message: "Kindly Change Ropsten Network",
                    };
              resolve(sucMsg);
            }
          });
        }) as Promise<any>;
      }


      public async depositcall(cont_address: any,abi: any,amountIN: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          let amount      = amountIN;
          let decimals    = 18;
          window.web3.eth.getChainId(async(err, netId) => {
            if( netId == environment.chainid.toString() ) {
              await contract.methods
                .deposit(amount)
                .send({ from: this.account })
                .on("transactionHash", hash => {
                })
                .on("receipt", depositresult => {
                  const sucMsg = {
                    status: true,
                    message: "Deposit is successfully completed ",
                    txid: depositresult,
                  };
                  resolve(sucMsg);
                })
                .on("confirmation", (confirmationNumber, depositresult) => {
                })
                .on("error", error => {
                  let sucMsg = {
                    status: false,
                    message: "Transaction is failed"
                  };
                  resolve(sucMsg);
                });
            } else {
              const sucMsg = {
                      status: false,
                      message: "Kindly Change Ropsten Network",
                    };
              resolve(sucMsg);
            }
          });
        }) as Promise<any>;
      }


      public async withdrawcall(cont_address: any,abi: any,amountIN: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          let amount      = amountIN;
          let decimals    = 18;
          window.web3.eth.getChainId(async(err, netId) => {
            if( netId == environment.chainid.toString() ) {
              await contract.methods
                .withdraw(amount)
                .send({ from: this.account })
                .on("transactionHash", hash => {
                })
                .on("receipt", withdrawresult => {
                  const sucMsg = {
                    status: true,
                    message: "withdraw is successfully completed ",
                    txid: withdrawresult,
                  };
                  resolve(sucMsg);
                })
                .on("confirmation", (confirmationNumber, withdrawresult) => {
                })
                .on("error", error => {
                  let sucMsg = {
                    status: false,
                    message: "Transaction is failed"
                  };
                  resolve(sucMsg);
                });
            } else {
              const sucMsg = {
                      status: false,
                      message: "Kindly Change Ropsten Network",
                    };
              resolve(sucMsg);
            }
          });
        }) as Promise<any>;
      }

  stakehis(){
    this.conn.getRequest('users/stakeHis', this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.stakeHis = res.result;
        this.router.navigate(['/stake']);
      }
    });
  }

  stakepairhis(){
    this.conn.getRequest('users/pairHis', this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.stakepairHis = res.result;
      }
    });
  }


   async reward()
  {
        let _self = this;
        let depo_ball = _self.available_lp_amount;
        let poolid = _self.currentstakedata;
    if(depo_ball > 0)
    {
     if(poolid != "31") {

    this.conn.changebackground();
    let amount          = 0;
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(poolid).call(async(err,result) =>{

      if(result){  
              
        this.cur_stack_pool_info  = result;
        let lp_contract           = this.cur_stack_pool_info.lpToken;
        let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
            await this.lp_token_balance(lp_contract,lpAbi,this.account).then(async function (retAccount: any) {
              if(retAccount.rawbalance<amount) {
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                _self.conn.clearbackground();
              } else {
                  let approve_contract  = lp_contract;
                  let approve_abi       = lpAbi;
                  let approve_spender   = reawardFactory;
                  await _self.approvecall(approve_contract,approve_abi,approve_spender,amount).then(async function (retApprove: any) {
                    if(retApprove.status) {
                      let factory_contract  = reawardFactory;
                      let factory_abi       = rewardfactoryAbi;
                      
                      await _self.depositcall(factory_contract,factory_abi,amount).then(async function (retdeposit: any) {
                        if(retApprove.status) {
                          let obj = {
                            "amount" :0,
                            "poolid" :0,
                            "useraddress" :_self.account.toString(),
                            "txid" :retdeposit.txid.transactionHash,
                            "types" :"Earn",
                            "currency" :"OP",
                          } 
                         
                          _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                            if(res.status == 1){
                              _self.toastr.successToastr("Successfully earned",'success');
                              _self.conn.clearbackground();
                              _self.router.navigate(['/farm']);
                              _self.stakehis();
                            }else{
                              _self.toastr.errorToastr(res.msg,'Error');
                            }
                          });
                           
                           _self.stakepairhis();
                        } else {
                          _self.toastr.errorToastr(retApprove.message,'Error');
                          _self.conn.clearbackground();
                        }
                      }).catch(function (error) {
                        _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                        _self.conn.clearbackground();
                      });
                    } else {
                       _self.toastr.errorToastr(retApprove.message,'Error');
                      _self.conn.clearbackground();
                    }
                  }).catch(function (error) {
                    _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                    _self.conn.clearbackground();
                  });

              }
            }).catch(function (error) {
              _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
              _self.conn.clearbackground();
            });
      }else{

      }
    });

    return;
   
  }
  else{

    this.conn.changebackground();
    let amount          = 0;
    let cont_addr       = contract_details.onepool_staking;
    let abi             = vaultabi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);

              
        let lp_contract           = contract_details.onepool;
        let reawardFactory        = contract_details.onepool_staking;
     
            await this.lp_token_balance(lp_contract,lpAbi,this.account).then(async function (retAccount: any) {
              if(retAccount.rawbalance<amount) {
                
                _self.toastr.errorToastr('Insufficiant Balance','Error');
              
                _self.conn.clearbackground();
              } else {
                
                  let approve_contract  = lp_contract;
                  let approve_abi       = lpAbi;
                  let approve_spender   = reawardFactory;
                  await _self.approvecall(approve_contract,approve_abi,approve_spender,amount).then(async function (retApprove: any) {
                    if(retApprove.status) {
                      let factory_contract  = reawardFactory;
                      let factory_abi       = vaultabi;
                      
                      await _self.depositcall(factory_contract,factory_abi,amount).then(async function (retdeposit: any) {
                        if(retApprove.status) {
                          let obj = {
                            "amount" :0,
                            "poolid" :31,
                            "useraddress" :_self.account.toString(),
                            "txid" :retdeposit.txid.transactionHash,
                            "types" :"Earn",
                            "currency" :"OP",
                          } 
                         
                          _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                            if(res.status == 1){
                              _self.toastr.successToastr("Successfully earned",'success');
                              _self.conn.clearbackground();
                              _self.router.navigate(['/farm']);
                              _self.stakehis();
                            }else{
                              _self.toastr.errorToastr(res.msg,'Error');
                            }
                          });
                           
                           _self.stakepairhis();
                        } else {
                          _self.toastr.errorToastr(retApprove.message,'Error');
                          _self.conn.clearbackground();
                        }
                      }).catch(function (error) {
                        _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                        _self.conn.clearbackground();
                      });
                    } else {
                       _self.toastr.errorToastr(retApprove.message,'Error');
                      _self.conn.clearbackground();
                    }
                  }).catch(function (error) {
                    _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
                    _self.conn.clearbackground();
                  });

              }
            }).catch(function (error) {
              _self.toastr.errorToastr('Something went to wrong. Please try again later.','Error');
              _self.conn.clearbackground();
            });
      

    return;
  }

}
else
{
  _self.toastr.errorToastr("Insufficiant balance",'Error');
}
  
  }

}

