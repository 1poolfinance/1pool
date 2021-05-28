import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

	@Input() title: string;
	@Input() message: string;
	@Input() btnOkText: string;
	@Input() btnCancelText: string;

	constructor(private activeModal: NgbActiveModal) { }

	ngOnInit() {
	}

	public decline() {
		this.activeModal.close(false);
	}

	public accept() {
		this.activeModal.close(true);
	}

	public dismiss() {
		this.activeModal.dismiss();
	}

}
