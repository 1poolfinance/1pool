import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './pages/cms/faq/faq.component';
import { FarmComponent } from './pages/content/farm/farm.component';
import { FarmBnbComponent } from './pages/content/farm-bnb/farm-bnb.component';
import { HomeComponent } from './pages/content/home/home.component';
import { StakeComponent } from './pages/content/stake/stake.component';
import { EthereumsectionComponent } from './pages/content/ethereumsection/ethereumsection.component';
import { BinancesectionComponent } from './pages/content/binancesection/binancesection.component';
import { StakeBnbComponent } from './pages/content/stake-bnb/stake-bnb.component';
import { TransitComponent } from './pages/content/transit/transit.component';
import { TransitBnbComponent } from './pages/content/transit-bnb/transit-bnb.component';
import { IpblockComponent } from './pages/ipblock/ipblock.component';
import { UndermaintanceComponent } from './pages/undermaintance/undermaintance.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
{ path: '', component: HomeComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'faq', component: FaqComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'docs', component: FaqComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'stake', component: StakeComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'eth', component: EthereumsectionComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'bnb', component: BinancesectionComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'farm', component: FarmComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'farm-bnb', component: FarmBnbComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'stake-bnb', component: StakeBnbComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'transit', component: TransitComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'transit-bnb', component: TransitBnbComponent, canActivate: [AuthGuard], data: { type: 'all' } },
{ path: 'ip_block', component: IpblockComponent },
{ path: 'under_maintance', component: UndermaintanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
