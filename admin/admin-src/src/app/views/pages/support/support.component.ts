import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatTooltip } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { DataService } from '../../../data.service';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Socket } from 'ngx-socket-io';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge } from "rxjs/observable/merge";
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
	_id: string,
	username: string;
	subject: string;
	status: string;
	created_at: number;
	action: string;
}

export interface PeriodicElement2 {
	_id: string,
	category: string;
	status: string;
	created_at: number;
	action: string
}

@Component({
	selector: 'app-support',
	templateUrl: './support.component.html',
	styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

	AvoidSpace(event) {		
		const k = (event.which) ? event.which : event.keyCode;
		if (k == 32) return false;
	}


	token = localStorage.getItem('Key'); per = false; access:any;
	postRequest = ''; categoryLoader = false;
	actionType = ""; select :any; loading = true;
	viewContact = true; message = ""; attach = "";
	supportCount = 0; replymsg = []; filesToUpload: Array<File> = [];
	viewDetail: {}; displayNoRecords: any; displayNoRecords2: any;
	config: any;

	model: { "_id": "", "message": "", "username": "", "ticketStatus": "", "admin_reply": "", "attachment": "" };

	displayedColumns: string[] = ['username', 'subject', 'created_at', 'status', 'action'];
	dataSource = new MatTableDataSource<PeriodicElement>();
	displayedColumns2: string[] = ['category', 'created_at', 'status', 'action'];
	dataSource2 = new MatTableDataSource<PeriodicElement2>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild('input') input: ElementRef;

	constructor(
		private dataService: DataService,
		private notifier: NotifierService,
		private confirmDialogService: ConfirmDialogService,
		private route: Router,
		private router: ActivatedRoute
	) {
		this.notifier = notifier;
		this.config = this.dataService.geteditorconfig()
		this.dataService.getRequest('admin/admin_access',this.token).subscribe((res:any) => {
			if(res.status == true){	
				if(res.data.role == 1){
					this.per = true;
				}else if(res.data.role == 2){				
				this.access=res.data.access_module;
				var itemArr = [];
				itemArr = this.access.filter( item => item == 'Manage Support');
				if(itemArr.length!=0){
					this.per = true;
				}else{
					this.notifier.notify('error','Permission denied!')				
					this.route.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard'])									
				}
			}
		}else {
			this.notifier.notify('error','Permission denied!');
			this.route.navigate(['/UQZYyKXjbJhGPFSqSzkY/pages/dashboard']);				
		} 
	});
	}

	ngOnInit() {
		this.router.queryParams
			.filter(params => params.type)
			.subscribe(params => {
				var sel = params.type;
				if (sel == "new") {
					this.select = 0;
					this.input.nativeElement.value = "";
				}else {
					this.input.nativeElement.value = "";
				}
			});

		this.sort.direction = 'desc';
		this.paginator.pageIndex = 0;
		this.paginator.pageSize = 10;
		this.sort.active = 'created_at';

		this.getList();
		this.getCate();
	}
	applyFilter(filterValue: string) {
		this.dataSource2.filter = filterValue.trim().toLowerCase();
		if (this.dataSource2.filteredData.length == 0) {
			this.displayNoRecords2 = true;
		} else {
			this.displayNoRecords2 = false;
		}
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		fromEvent(this.input.nativeElement, 'keyup')
			.pipe(
				debounceTime(150),
				distinctUntilChanged(),
				tap(() => {
					this.paginator.pageIndex = 0;

					this.getList();
				})
			)
			.subscribe();

		merge(this.sort.sortChange, this.paginator.page)
			.pipe(
				tap(() => this.getList())
			)
			.subscribe();
	}

	getList() {
		let params = {
			filter: this.input.nativeElement.value,
			sortOrder: this.sort.direction,
			pageIndex: this.paginator.pageIndex,
			pageSize: this.paginator.pageSize,
			sortActive: this.sort.active,
			selected: this.select
		}

		this.dataService.loadData('home/support', params)
			.subscribe(res => {
				this.actionType = 'all';
				this.loading = false;
				this.dataSource.data = res.data as PeriodicElement[];
				this.supportCount = res.supportCount;

				if (this.dataSource.data.length == 0) {
					this.displayNoRecords = true;
				} else {
					this.displayNoRecords = false;
				}
			})
	}

	AddCate(d: NgForm) {
		var data = d.value;
		var e = data.category.trim();
		if (e.length == 0) {
			this.notifier.notify('error', "Category is required");
			return;
		}
		this.categoryLoader = true;
		this.dataService.postRequest('home/add_category', data, this.token)
			.subscribe((res: any) => {
				if (res.success == 0) {
					this.notifier.notify('error', res.msg);
				} else if (res.success == 1) {
					this.notifier.notify('success', res.msg);
				} else {
					this.notifier.notify('error', res.msg);
				}
				d.resetForm();
				this.categoryLoader = false;
				this.getCate();
			});
	}

	getCate = () => {

		this.dataService.getRequest('home/get_category', this.token)
			.subscribe((res: any) => {
				this.dataSource2.data = res.data as PeriodicElement2[];
				for (var i = 0; i < res.data.length; i++) {
					var ld = res.data[i];
					var sts = (ld.status == 1) ? "Active" : "Deactive";
					res.data[i].status = sts;
				}
				if (this.dataSource2.data.length == 0) {
					this.displayNoRecords2 = true;
				} else {
					this.displayNoRecords2 = false;
				}
			});
	}

	public openConfirmationDialog(id: string, status: number) {
		let sts = status == 1 ? 'De-activate' : 'Activate';
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to ' + sts + '?')
			.then((confirmed) => this.doStatus(confirmed, id, status))
	}

	doStatus(confirmed, id: string, status) {
		if (confirmed == false) {
			return false;
		}
		let obj = {
			"_id": id,
			"status": status
		};

		this.dataService.postRequest('home/category_status', obj, this.token)
			.subscribe((reqData: any) => {
				if (reqData.status == true) {
					this.getCate();
					this.notifier.notify('success', reqData.msg);
				} else {
					this.notifier.notify('error', reqData.msg);
				}
			})
	}
	public deleteConfirmationDialog(id: string) {
		this.confirmDialogService.confirm('Please confirm..', 'Are you sure want to delete?')
			.then((confirmed) => this.doDelete(id, confirmed));
	}

	doDelete(id: string, confirmed) {
		if (confirmed == false) {
			return false;
		}
		this.dataService.getRequest('home/category_delete/' + id, this.token)
			.subscribe((reqData: any) => {
				if (reqData.status == true) {
					this.getCate();
					this.notifier.notify('success', reqData.msg);
				} else {
					this.notifier.notify('error', reqData.msg);
				}
			})
	}

	public cancelToEdit = () => {
		this.actionType = 'all';
		this.replymsg = [];
	}

	public redirectToEdit = (id: string) => {
		this.postRequest = '';
		this.actionType = '';
		this.dataService.getData('home/viewSupport/' + id)
			.subscribe(res => {
				this.actionType = 'edit';
				this.viewDetail = res.data;
				this.model = res.data;

				var re = res.data.reply[0];
				this.message = re.description;
				this.attach = re.attachment;

				var arr = [];
				arr = res.data.reply;
				arr.shift();
				var arr1 = [];
				arr1 = arr;
				this.replymsg = arr1;
				this.viewContact = false;
			})
	}

	public redirectToAll = (action: string) => {
		this.actionType = action;
	}

	showMyImage(files, event, element) {
		if (event.target.files && event.target.files[0]) {
			this.filesToUpload = <Array<File>>event.target.files;
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				let typeFile = file.type;
				let file_size = file.size / 1024 / 1024;
				if (typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
					this.notifier.notify('error', "Invalid image format");
					return;
				}
				if (file_size >= 2) {
					this.notifier.notify('error', "Upload image should be less than or equal to 2MB");
					return;
				}
				const img: any = document.getElementById(element);
				img.file = file;
				var reader = new FileReader();
				reader.onload = (function(aImg) {
					return function(e) {
						aImg.src = e.target.result;
					};
				})(img);
				reader.readAsDataURL(file);
			}
		}
	}

	onSubmit(f: NgForm) {
		var dat = f.value;
		var r = dat.admin_reply.trim();
		dat.s_id = this.model._id;
		dat.ticketStatus = (dat.ticketStatus == "") ? 0 : 1;
		if (r.length == 0) {
			this.notifier.notify('error', "Reply message is required");
			return;
		}
		this.postRequest = 'yes';

		const formData: any = new FormData();
		var files: Array<File> = this.filesToUpload;
		for (let i = 0; i < files.length; i++) {
			  var fileName = files[i]['name'];
				var filenames = fileName.split('.');
				var lastValue = filenames.length - 1;
				var FileName = 'attachment.' + filenames[lastValue];
				formData.append("reference_proof", files[i], FileName);
		}
		Object.keys(dat).forEach(function(key) {
			if (key != "reference_proof") {
				formData.append(key, dat[key]);
			}
		});
		this.dataService.filePostRequest('home/replySupport', formData, this.token).subscribe((reqData: any) => {
			this.postRequest = '';
			if (reqData.status == true) {
				this.getList();
				this.cancelToEdit();
				this.notifier.notify('success', reqData.msg);
			} else {
				this.notifier.notify('error', reqData.msg);
			}
		});
	}
}
