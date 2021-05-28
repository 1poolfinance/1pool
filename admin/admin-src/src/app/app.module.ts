import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { AdminauthService } from './services/adminauth.service';
import { config } from './constants';
import { CommonModule } from '@angular/common';
/*--*/
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const Socketconfig: SocketIoConfig = { url: '',  options: { secure: true, transports: ['websocket'] } };

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { AppRoutingModule } from './app.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RequestPasswordComponent } from './views/request-password/request-password.component';
import { LogoutComponent } from './views/logout/logout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    HttpModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(Socketconfig),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
    }),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    LogoutComponent,
    ResetpasswordComponent,
    ConfirmEqualValidatorDirective    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
