import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  returnUrl: string;	
  constructor(private router: Router,private dataService: DataService) { }

  ngOnInit() {
  	this.dataService.unsetSession();
  	localStorage.clear();
  	return this.router.navigateByUrl(this.returnUrl);
  }

}
