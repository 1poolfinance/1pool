import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ConnectionService } from '../../../connection.service';
import { ContractDetails } from '../../../files/contract';
import { PoolStakeAbi } from '../../../files/pool_staking_api';
import { PendingPoolAbi } from '../../../files/pendingpool';
import { RewardPoolAbi } from '../../../files/reward_pool_api';
import { PfacAbi } from '../../../files/pfac_api';
import { LPAbi } from '../../../files/lp_abi';
import { VaultAbi } from '../../../files/vault_api';
import { RewardFactoryAbi } from '../../../files/reward_factory_api';
import { USDvals } from '../../../files/usdvals';

import { environment } from '../../../../environments/environment';


declare let window: any;

let contract_details  = ContractDetails;
let poolstakeabi      = PoolStakeAbi;
let lpAbi             = LPAbi;
let rewardfactoryAbi  = RewardFactoryAbi;
let vaultabi  = VaultAbi;

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {


	 stakebutton_show  = true;
  show_unstake_section  = false;
  deposit_amount       = 0;
  available_lp_amount  = 0;
  uni_usd:any;
  uni_perc:any=0;
  deposit_harv:any=0;
  currency_select:any="";


  popupcont: string = '<div class="popupcontent">' +
  '<div class="poplist"><span>Asset: </span><span><b>WETH</b></span></div>'+
'<div class="poplist"><span>Vault address: </span><span><b><a>0xFE09...573e <i class="fas fa-external-link-alt"></i></a></b></span></div>'+
'<div class="poplist"><span>Pool address: </span><span><b><a>0x3DA9...ff8e <i class="fas fa-external-link-alt"></i></a></b></span></div>'+
'<div class="poplist"><span>fToken: </span><span><b>fWETH</b></span></div>'+

'<div class="poplist1"><span>APY </span><span><b>7.03%</b></span></div>'+
'<div class="poplist1"><span>0.37%: Auto harvested </span><span><b>COMP</b></span></div>'+
'<div class="poplist1"><span>6.66%:</span><span><b>Farm</b> rewards</span></div>'+

'<div class="poplist3"><span><b>Claim rewards:</b></span></div>'+
'<div><ol class="numeric-list"><li>Hit "Claim rewards" to claim your <b>FARM</b></li>'+
'<li>To earn additional interest on your <b>FARM</b>, stake your claimed <b>FARM</b> into the <b>FARM</b> pool. We recommend claiming and re-staking your <b>FARM</b> rewards into the <b>FARM</b> pool periodically (for example, weekly)</li></ol></div>'+
'</div>';



dtOptions: any = {}; stakeHis:any; currentstakedata:any;stakepairHis = []; stakeLoader = false; metabalance : any; account = localStorage.getItem('account'); token = localStorage.getItem('1pool-Token');
  cur_stack_pool_info :any;
  stakeall_value:any;
satkeAbi = [{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"address","name":"_rewardDistribution","type":"address"},{"internalType":"address","name":"_storage","type":"address"},{"internalType":"address","name":"_sushiMasterChef","type":"address"},{"internalType":"uint256","name":"_sushiPoolId","type":"uint256"},{"internalType":"address","name":"_sushiToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardDenied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenQuantity","type":"uint256"}],"name":"SushiReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingSushi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"poolDetails","outputs":[{"internalType":"uint256","name":"poolAccPerShare","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"pushReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_rewardDistribution","type":"address"}],"name":"setRewardDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_store","type":"address"}],"name":"setStorage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"store","outputs":[{"internalType":"contract Storage","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sushiMasterChef","outputs":[{"internalType":"contract IMaster","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sushiPoolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sushiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

  constructor(public toastr: ToastrManager,private router : Router,private conn: ConnectionService) { }

  ngOnInit() {
    let cont_add    = contract_details.reward_pool_contract;
    let token_abi   = RewardPoolAbi;

    setTimeout(()=>{
    let contract    = new window.web3.eth.Contract(PfacAbi, "0xb23fe963303f541701f2bf580160e35b0c9db417");
    contract.methods.totalSupply().call(async(err,result:any) =>{
    let perc =  +result / 10 ** 18;
     this.deposit_harv = +perc * +USDvals.uni_usd;

    this.uni_perc = +perc / 200 * 100;

    })
     },100);
    this.uni_usd = USDvals.uni_usd;
   var key = this;
  	 const body = document.getElementsByTagName('body')[0];
      body.classList.remove('forOverlayBottom');

       if(!this.account){
      this.toastr.errorToastr('Connect your wallet','Error');
      this.router.navigate(['/']);
      return;
    }




    this.getBalance();
    this.stakehis();
    this.stakepairhis();

     this.dtOptions = {
     
      dom: 'Bfrtip',
     
      buttons: [
        
        'print'
       
      ]
    };
  }


  getBalance(){
    var key = this;
    window.web3 = window.web3.currentProvider;
    window.web3 = new window.Web3(window.ethereum);
    window.web3.eth.getBalance(key.account, function(error, balance) {
      key.metabalance = balance / 1.0e18;
    })
  }

    stakehis(){
    this.conn.getRequest('users/stakeHis', this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.stakeHis = res.result;
        this.router.navigate(['/farm']);
      }
    });
  }

  async get_earned_rewards(cont_address: any,abi: any,useraddress:any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          window.web3.eth.getChainId(async(err, netId) => {
            if(netId == environment.chainid.toString()) {
                await contract.methods.pendingonePool(useraddress).call(async(err,result) =>{
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


      async get_earned_rewards_weth(cont_address: any,abi: any,useraddress:any): Promise<any> {
        return new Promise(async (resolve, reject) => {
          let cont_add    = cont_address;
          let token_abi   = abi;
          let contract    = new window.web3.eth.Contract(token_abi, cont_add);
          window.web3.eth.getChainId(async(err, netId) => {
            if(netId == environment.chainid.toString()) {
                await contract.methods.pendingReward(useraddress).call(async(err,result) =>{
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

  stakepairhis(){
  	let _self = this;
    this.conn.getRequest('users/pairHis', this.token).subscribe(async(res:any) => {
      if(res.status == 1){
      	var set_val_Upgrade = [];
      	let cont_addr       = contract_details.reward_pool_contract;
		let abi             = RewardPoolAbi;
    let pabi             = PendingPoolAbi;
		let rpcontract1      = new window.web3.eth.Contract(abi, cont_addr);
      	for(let i=0;i<res.result.length;i++)
      	{
            if(res.result[i].poolid != '30')
            {
            let token_reward = await _self.get_earned_rewards(res.result[i].contract_address,pabi,_self.account);
            let token_balance = await _self.lp_token_balance(res.result[i].address,lpAbi,_self.account);
            let lp_token_bal  =  await _self.dep_token_balance(res.result[i].poolid);
            var upgra       = {poolid:res.result[i].poolid,symbol:res.result[i].symbol,address:res.result[i].address,balance:parseFloat(token_balance.balance).toFixed(8),depo_bal:parseFloat(lp_token_bal.balance).toFixed(8),earning:parseFloat(token_reward.balance).toFixed(8)};
         set_val_Upgrade.push(upgra);
            }
            else{
            let token_reward = await _self.get_earned_rewards_weth(res.result[i].contract_address,vaultabi,_self.account);
           let token_balance = await _self.lp_token_balance(res.result[i].address,lpAbi,_self.account);
           let lp_token_bal  =  await _self.dep_token_balance_weth(res.result[i].poolid);
            var upgra       = {poolid:res.result[i].poolid,symbol:res.result[i].symbol,address:res.result[i].address,balance:parseFloat(token_balance.balance).toFixed(8),depo_bal:parseFloat(lp_token_bal.balance).toFixed(8),earning:parseFloat(token_reward.balance).toFixed(8)};
         set_val_Upgrade.push(upgra);

            }
      	}

        this.stakepairHis = set_val_Upgrade;
      }
    });
  }

   dep_token_balance(poolid: any): Promise<any> {
        return new Promise(async (resolve, reject) => {let self = this;
      let cont_addr         = contract_details.reward_pool_contract;
      let abi               = RewardPoolAbi;
      let rpcontract        = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(poolid).call(async(err,result) =>{
      if(result) {
        this.cur_stack_pool_info  = result;
      let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
      let rfcontract            = new window.web3.eth.Contract(rewardfactoryAbi, reawardFactory);
      await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
      if(userInforesult){
        const sucMsg = {
                      status: true,
                      rawbalance: userInforesult.amount,
                      balance: await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether'),
                      message: "Got balance",
                    };
              resolve(sucMsg);
      }
      });
    }
      });
}) as Promise<any>;
      }


       dep_token_balance_weth(poolid: any): Promise<any> {
        return new Promise(async (resolve, reject) => {let self = this;
      let cont_addr         = contract_details.reward_pool_contract;
      let abi               = RewardPoolAbi;
      let rpcontract        = new window.web3.eth.Contract(abi, cont_addr);
      let reawardFactory        = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
      let rfcontract            = new window.web3.eth.Contract(vaultabi, reawardFactory);
      await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
      if(userInforesult){
        const sucMsg = {
                      status: true,
                      rawbalance: userInforesult.amount,
                      balance: await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether'),
                      message: "Got balance",
                    };
              resolve(sucMsg);
      }
      });
}) as Promise<any>;
      }


  open_pair(paddress)
  {
  	
  }

   async stakeFun(stake: NgForm){
    this.conn.changebackground();
    let postData        = stake.value;
    if(postData.amount > 0)
    {
    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(postData.poolid).call(async(err,result) =>{

      if(result){  
              
        this.cur_stack_pool_info  = result;
        let lp_contract           = this.cur_stack_pool_info.lpToken;
        let reawardFactory        = this.cur_stack_pool_info.reawardFactory;
        let _self = this;
        
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
                          _self.conn.clearbackground();
                          let obj = {
                            "amount" :postData.amount,
                            "poolid" :postData.poolid,
                            "useraddress" :_self.account.toString(),
                            "txid" :retdeposit.txid.transactionHash,
                            "types" :"Deposit",
                            "currency" :"OP-SUSHI",
                          } 
                         
                          _self.conn.postRequest('users/stake',obj, _self.token).subscribe((res:any) => {
                            if(res.status == 1){
                              _self.toastr.successToastr(res.msg,'success');
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
    this.conn.postRequest('users/stake',postData, this.token).subscribe((res:any) => {
      if(res.status == 1){
        this.toastr.successToastr(res.msg,'success');
        this.router.navigate(['/farm']);
        this.stakehis();
      }else{
        this.toastr.errorToastr(res.msg,'Error');
      }
    });
  }
  else{
    this.toastr.errorToastr("Please enter valid number",'Error');
  }
  }


  async reward(poolid,depo_ball)
  {
        let _self = this;
  	if(depo_ball > 0)
  	{
     if(poolid != "30") {

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
    let cont_addr       = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
    let abi             = vaultabi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);

              
        let lp_contract           = "0xc778417e063141139fce010982780140aa0cd5ab";
        let reawardFactory        = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
     
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
      

    return;
  }

}
else
{
	_self.toastr.errorToastr("Insufficiant balance",'Error');
}
  
  }

   amountKeyup(val,stake: NgForm){
  }

   async lp_token_balance(cont_address: any,abi: any,useraddress:any): Promise<any> {
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

  async balanceref()
  {
      let self = this;
      let cont_addr         = contract_details.reward_pool_contract;
      let abi               = RewardPoolAbi;
      let rpcontract        = new window.web3.eth.Contract(abi, cont_addr);
      
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
   async unstakeFun(stake: NgForm){
    this.conn.changebackground();
    let postData        = stake.value;

 
    if(postData.amount > 0) {
    if(postData.poolid != "30") {
    let amount          = await window.web3.utils.toWei(postData.amount.toString(), 'ether');
    let cont_addr       = contract_details.reward_pool_contract;
    let abi             = RewardPoolAbi;
    let rpcontract      = new window.web3.eth.Contract(abi, cont_addr);
    await rpcontract.methods.poolInfo(postData.poolid).call(async(err,result) =>{

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
                    "poolid" :postData.poolid,
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

          var currency_select = "WETH";


        let lp_contract           = "0xc778417e063141139fce010982780140aa0cd5ab";
        let reawardFactory        = "0xebe44368ec606a57f06d9a84938c1e34c04f1e7b";
       
        let _self = this;
        
          let rfcontract            = new window.web3.eth.Contract(vaultabi, reawardFactory);
          await rfcontract.methods.userInfo(this.account).call(async(err,userInforesult) =>{
            if(userInforesult){
              this.deposit_amount   = await window.web3.utils.fromWei(userInforesult.amount.toString(), 'ether');
              if(userInforesult.amount < +amount){
                _self.toastr.errorToastr('Insufficiant Balance','Error');
                _self.conn.clearbackground();
              }else{
                let factory_contract  = reawardFactory;
                let factory_abi       = vaultabi;
                await _self.withdrawcall(factory_contract,vaultabi,amount).then(async function (retWithdraw: any) {
                  if(retWithdraw.status) {
                    
                    _self.toastr.successToastr(retWithdraw.message,'success');
                    _self.conn.clearbackground();
                    let obj = {
                    "amount" :postData.amount,
                    "poolid" :postData.poolid,
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
  stakeall(balancc)
  {
  	this.stakeall_value = balancc;
  }

}



