import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatTableModule } from  '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSortModule, MatProgressBarModule, MatProgressSpinnerModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { AdminauthService } from '../../services/adminauth.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ],
  providers: [DatePipe]
})
export class DashboardModule { }
