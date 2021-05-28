import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from './data.service';


declare var changeFavicon: Function;

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  sitesettings:any={};
  constructor(private router: Router, private dataService: DataService) {

    this.dataService.getData('admin/blockip').subscribe(reqData => {
      if (reqData.status == false) {
        this.router.navigate(['/404']);
      }
    });
    this.dataService.idleLogout();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    var path = 'admin/settings';
     this.dataService.getData(path).subscribe(data=>{
      this.sitesettings = data;
      if( this.sitesettings != undefined ){
        if( this.sitesettings.status == true ){          
          this.sitesettings = this.sitesettings.data;
          changeFavicon(this.sitesettings.logo_img);
        }
      }
    });

  }
}
