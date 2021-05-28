import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	cms = false; static = [];

  constructor(private conn: ConnectionService,private route: Router) { }

  ngOnInit() {
  	const body = document.getElementsByTagName('body')[0];
      body.classList.add('forOverlayBottom');

      var data = {"pagehint":"home"};
      this.conn.postUrl('cms/post_cms', data).subscribe((res: any) => {
        if (res.status == true) {
          this.static = res.data;
          this.cms = true;
        }
      });
  }

}
