import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-undermaintance',
  templateUrl: './undermaintance.component.html',
  styleUrls: ['./undermaintance.component.scss']
})
export class UndermaintanceComponent implements OnInit {

  under_main = false;
  constructor(private conn : ConnectionService, private route : Router) { }

  ngOnInit() {
		this.conn.getUrl('admin/check_maintain').subscribe((resdata:any) => {
			if(resdata.success == 3){
				this.under_main = true;
			}else{
				this.under_main = false;
				this.route.navigate(["/"]);
			}
	  });
	}

}
