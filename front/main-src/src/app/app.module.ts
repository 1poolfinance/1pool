import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './pages/cms/faq/faq.component';
import { FarmComponent } from './pages/content/farm/farm.component';
import { HomeComponent } from './pages/content/home/home.component';
import { StakeComponent } from './pages/content/stake/stake.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

import { JwtModule } from "@auth0/angular-jwt";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EthereumsectionComponent } from './pages/content/ethereumsection/ethereumsection.component';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { FarmBnbComponent } from './pages/content/farm-bnb/farm-bnb.component';
import { BinancesectionComponent } from './pages/content/binancesection/binancesection.component';
import { StakeBnbComponent } from './pages/content/stake-bnb/stake-bnb.component';
import { TransitComponent } from './pages/content/transit/transit.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TransitBnbComponent } from './pages/content/transit-bnb/transit-bnb.component';
import { AuthGuard } from './auth.guard';
import { IpblockComponent } from './pages/ipblock/ipblock.component';
import { UndermaintanceComponent } from './pages/undermaintance/undermaintance.component';

export function tokenGetter() {
  return localStorage.getItem("account");
}

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FarmComponent,
    HomeComponent,
    StakeComponent,
    HeaderComponent,
    FooterComponent,
    EthereumsectionComponent,
    FarmBnbComponent,
    BinancesectionComponent,
    StakeBnbComponent,
    TransitComponent,
    TransitBnbComponent,
    IpblockComponent,
    UndermaintanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    DataTablesModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ToastrModule.forRoot(),
    PopoverModule.forRoot(),
    FormsModule,  
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
