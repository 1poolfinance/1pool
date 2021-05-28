import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-view-users',
	templateUrl: './view-users.component.html',
	styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit { 
	loading = true;	
	displayNoRecords: any; select: any;
	userInfo: any = {};
	userWlt: any = []; user_address = [];
	ticketToken = "";
	selfie = { reject_message: "" };
	idproof = { reject_message: "" };
	selfieRequest = false; idproofRequest = false;
	selfieRejectForm = false;
	selfieBtn = true;
	IDRejectForm = false; IDBtn = true;
	idrejectLoader = false;
	selfieRejectLoader = false;
	token = localStorage.getItem('Key');
	per = false; access:any;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
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
					itemArr = this.access.filter( item => item == 'Manage Users');
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
				this.dataService.getRequest('users/viewusers/' + this.ticketToken, this.token).subscribe((res: any) => {
					this.loading = false;
					if (res.status == true) {
						var data = res.data;
						this.userInfo = res.data;
						this.loading = false;
						this.selfie = { reject_message: "" };
						this.userWallet(this.ticketToken);

					} else {
						this.notifier.notify('error', res.msg);
						this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/users']);
					}
				})
			} else {
				this.notifier.notify('error', 'Invalid Request');
				this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/users']);
			}
		});	
	}

	userWallet(id) {
		this.dataService.getData('userWallet/userWalletList/' + id)
		.subscribe((res:any) => {
			this.userWlt = res.data;
		})
		this.dataService.getData('userWallet/userAddress/' + id).subscribe((response:any) =>{
			this.user_address = response.data;	
		});	
	}

	getAddress(curr, coinType){
		var userAddress = []; 
		if(coinType != 'coin') {
			curr = 'ETH';
		}
		userAddress = this.user_address.filter(item => item.currency == curr)
		if(userAddress.length!=0){
			return userAddress[0].address;		 	
		}else {
			return '--';
		}
	}

	approveKyc(proof: number, id: string) {
		let obj = {
			proof: proof,
			_id: id
		};
		if (proof == 2) {
			this.selfieRequest = true;
			this.selfieBtn = false;
		} else {
			this.idproofRequest = true;
			this.IDBtn = false;
		}
		this.dataService.importData('users/updateKyc', obj)
		.subscribe(resData1 => {			
			this.selfieRequest = false;
			this.idproofRequest = false;
			if (resData1.status == true) {
				if (proof == 2) {
					this.userInfo.selfie_status = 3;
				} else {
					this.userInfo.id_status = 3;
				}
				if (this.userInfo.selfie_status == 3 && this.userInfo.id_status == 3) {
					this.userInfo.kyc_status = 3;
				}
				this.notifier.notify('success', "Successfully updated");
			} else {
				this.selfieBtn = true;
				this.IDBtn = true;
				this.notifier.notify('error', "Please try again");
			}
		})
	}

	rejectKyc(type: number) {
		if (type == 2) {
			this.selfieRejectForm = true;
			this.selfieBtn = false;
		}
		if (type == 1) {
			this.IDRejectForm = true;
			this.IDBtn = false;
		}
	}

	cancelReject(type) {
		if (type == 2) {
			this.selfieRejectForm = false;
			this.selfieBtn = true;
		}
		if (type == 1) {
			this.IDRejectForm = false;
			this.IDBtn = true;
		}
	}

	RejectForm(type: number, id: string, d: NgForm) {
		let reason;
		var data = d.value;
		var msg = data.reject_message.trim();
		if (msg.length == 0) {
			this.notifier.notify('error', "Reason must be valid");
			d.resetForm();
			return;
		}
		if (type == 1) {
			this.idrejectLoader = true;
			reason = this.idproof.reject_message;
		} else {
			this.selfieRejectLoader = true;
			reason = this.selfie.reject_message;
		}

		let obj = {
			"_id": id,
			"proof": type,
			"reason": reason
		};

		this.dataService.importData('users/rejectKYC', obj)
		.subscribe(reqData => {
			if (reqData.status == true) {
				if (type == 1) {
					this.idrejectLoader = false;
					this.IDRejectForm = false;
					this.userInfo.id_status = 2;
				} else {
					this.selfieRejectLoader = false;
					this.selfieRejectForm = false;
					this.userInfo.selfie_status = 2;
				}
				this.userInfo.kyc_status = 2;
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		})
	}

	updateBalance(uid, bal, curr) {
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to update '+curr+' balance?')
		.then((confirmed) => this.doUpdateBalance(confirmed, uid, bal, curr))
	}

	doUpdateBalance(confirmed, uid, bal, curr) {
		if (confirmed == false) {
			return false;
		}

		let obj = {
			"_id": uid,
			"bal": +bal,
			"currency": curr
		};

		this.dataService.importData('users/updateBalance', obj)
		.subscribe(reqData => {
			if (reqData.status == true) {
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		})
	}

	rounds(value, length) {
		return value.toFixed(length ? length : value);
	}
}
