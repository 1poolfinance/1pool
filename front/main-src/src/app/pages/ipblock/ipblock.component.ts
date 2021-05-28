import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ipblock',
  templateUrl: './ipblock.component.html',
  styleUrls: ['./ipblock.component.scss']
})
export class IpblockComponent implements OnInit {

  ip_block = false;
  constructor(private conn : ConnectionService, private route : Router) { }

  ngOnInit() {
		this.conn.getUrl('admin/check_maintain').subscribe((resdata:any) => {
  	if(resdata.success == 2){
  		this.ip_block = true;
  	}else{
  		this.ip_block = false;
  		this.route.navigate(["/"]);
  	}		        	
  	});
	}

}
