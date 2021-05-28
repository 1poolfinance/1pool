import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { navItems } from '../../_nav';
import { DataService } from '../../data.service';
import { AdminauthService } from '../../services/adminauth.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  user_id: any; msg: any;
  siteInfo: any = {};
  profileImg = 'assets/avatar2.png';
  navbaritems: any = [];
  navItemsModule: any = [];
  token = localStorage.getItem('Key');
  constructor(private router: Router, private authService: AdminauthService, private dataService: DataService, @Inject(DOCUMENT) _document?: any) {

    this.dataService.data.subscribe(resData => {
      if (JSON.stringify(resData) != "{}") { this.msg = resData; this.profileImg = this.msg };
    });
    this.dataService.sitesetting.subscribe(resData => {
      if (JSON.stringify(resData) != "{}") { this.msg = resData; this.siteInfo = this.msg };
    });

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['UQZYyKXjbJhGPFSqSzkY']);
  }

  ngOnInit() {

    this.dataService.getData('admin/settings').subscribe((reqData:any) => {
      this.siteInfo = reqData.data;      
    });
    let adminId = this.dataService.getSession('id');
    this.dataService.getData('admin/profile/' + adminId).subscribe(reqData => {
      if (reqData.data.profileimg) {
        this.profileImg = reqData.data.profileimg;
      }
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
