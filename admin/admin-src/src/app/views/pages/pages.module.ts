import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSortModule, MatProgressBarModule, MatProgressSpinnerModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { DataTableModule } from 'angular7-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { config } from '../../constants';

const Socketconfig: SocketIoConfig = { url: '' };

import { AuthInterceptorService } from '../../services/interceptors/auth-interceptor.service';
import { AdminauthService } from '../../services/adminauth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsComponent } from './cms/cms.component';
import { SettingsComponent } from './settings/settings.component';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { FaqComponent } from './faq/faq.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { CurrencyComponent } from './currency/currency.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SupportComponent } from './support/support.component';
import { PairsComponent } from './pairs/pairs.component';
import { BlockipComponent } from './blockip/blockip.component';
import { UsersComponent } from './users/users.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NewsComponent } from './news/news.component';
import { ChangePatternComponent } from './change-pattern/change-pattern.component';
import { SitesettingsComponent } from './sitesettings/sitesettings.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { LoghistoryComponent } from './loghistory/loghistory.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { BlogComponent } from './blog/blog.component';
import { LogattemptsComponent } from './logattempts/logattempts.component';
import { UserlogsComponent } from './userlogs/userlogs.component';
import { ViewPairComponent } from './view-pair/view-pair.component';
import { BridgeListComponent } from './bridge-list/bridge-list.component';
import { StakeListComponent } from './stake-list/stake-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule.forRoot(),
        DataTableModule.forRoot(),
        BsDatepickerModule.forRoot(),
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSortModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTooltipModule,
        HttpClientModule,
        HttpModule,
        PagesRoutingModule,
        CKEditorModule,
        SocketIoModule.forRoot(Socketconfig),
        BsDropdownModule.forRoot(),
        TabsModule,
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        SettingsComponent,
        CmsComponent,
        EmailtemplateComponent,
        FaqComponent,
        ConfirmDialogComponent,
        CurrencyComponent,
        ContactusComponent,
        SupportComponent,
        PairsComponent,
        BlockipComponent,
        UsersComponent,
        DepositComponent,
        WithdrawComponent,
        NewsComponent,
        ChangePatternComponent,
        SitesettingsComponent,
        ViewUsersComponent,
        LoghistoryComponent,
        ViewContactComponent,
        BlogComponent,
        LogattemptsComponent,
        UserlogsComponent,
        ViewPairComponent,
        BridgeListComponent,
        StakeListComponent
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }, DatePipe,
        ConfirmDialogService
    ],

})
export class PagesModule { }
