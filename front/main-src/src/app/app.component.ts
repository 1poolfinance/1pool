import { Component } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'OnePool';
 constructor(private conn: ConnectionService, private route: Router, public toastr: ToastrManager) {    
    this.conn.idleLogout();
  }

}
