import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
isFirstOpen = true; oneAtATime: boolean = true; faq: any; content = false;

	constructor(private conn: ConnectionService) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('forOverlayBottom');
		this.conn.getUrl('cms/get_faq').subscribe((res: any) => {
			if (res.status == true) {
				this.faq = res.data.slice().reverse();
				this.content = true;
			}
		});
  }

}
