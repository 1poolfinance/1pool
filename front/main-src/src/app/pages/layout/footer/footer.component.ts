import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../connection.service';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  site : any = {};
  
  constructor(public conn: ConnectionService, private route: Router, private titleService: Title) { }

  ngOnInit() {
  	this.conn.getUrl('cms/get_site').subscribe((res:any) => {
      if(res.status == true){
      	this.site = res.data;	
      }        
    });
  }

}
