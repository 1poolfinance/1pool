import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../../guards/auth-guard.guard';

import { SettingsComponent } from './settings/settings.component';
import { CmsComponent } from './cms/cms.component';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { FaqComponent } from './faq/faq.component';
import { CurrencyComponent } from './currency/currency.component';
import { PairsComponent } from './pairs/pairs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SupportComponent } from './support/support.component';
import { BlockipComponent } from './blockip/blockip.component';
import { UsersComponent } from './users/users.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NewsComponent } from './news/news.component';
import { ChangePatternComponent } from './change-pattern/change-pattern.component';
import { SitesettingsComponent } from './sitesettings/sitesettings.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoghistoryComponent } from './loghistory/loghistory.component';
import { LogattemptsComponent } from './logattempts/logattempts.component';
import { UserlogsComponent } from './userlogs/userlogs.component';
import { ViewPairComponent } from './view-pair/view-pair.component';
import { BridgeListComponent } from './bridge-list/bridge-list.component';
import { StakeListComponent } from './stake-list/stake-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'cms',
        component: CmsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Manage CMS'
        }
      },
      {
        path: 'sitesettings',
        component: SitesettingsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Site settings'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Manage FAQ'
        }
      },
      {
        path: 'emailtemplate',
        component: EmailtemplateComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Manage Emailtemplates'
        }
      },
      {
        path: 'currency',
        component: CurrencyComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Currency Settings'
        }
      },
      {
        path: 'pairs',
        component: PairsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Currency Pairs'
        }
      },
      {
        path: 'view-pairs',
        component: ViewPairComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Edit Pairs'
        }
      },
      {
        path: 'contactus',
        component: ContactusComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Contact Us'
        }
      },
      {
        path: 'view-contact',
        component: ViewContactComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Contact Us'
        }
      },
      {
        path: 'support',
        component: SupportComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Support Ticket'
        }
      },
      {
        path: 'changepattern',
        component: ChangePatternComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Change Pattern'
        }
      },
      {
        path: 'blockip',
        component: BlockipComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Block IP'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Users'
        }
      },
       {
        path: 'userloghistory',
        component: UserlogsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Users Log History'
        }
      },{
        path: 'failed_attempts',
        component: LogattemptsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Login Attempts'
        }
      },
      {
        path: 'view-users',
        component: ViewUsersComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'View Users'
        }
      },
      {
        path: 'active/users',
        component: UsersComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Active Users'
        }
      },
      {
        path: 'inactive/users',
        component: UsersComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Inactive Users'
        }
      },
      {
        path: 'deposit',
        component: DepositComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Deposit History'
        }
      },
      {
        path: 'pending/deposit',
        component: DepositComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Pending Deposit History'
        }
      },
      {
        path: 'pending/deposit',
        component: DepositComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Pending Deposit History'
        }
      },
      {
        path: 'withdraw',
        component: WithdrawComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Withdraw History'
        }
      },
      {
        path: 'pending/withdraw',
        component: WithdrawComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Pending Withdraw History'
        }
      },
      {
        path: 'loghistory',
        component: LoghistoryComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Log History'
        }
      },
      {
        path: 'news',
        component: NewsComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'News'
        }
      },
      {
        path: 'blogs',
        component: BlogComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Blogs'
        }
      },
      {
        path: 'bridge-list',
        component: BridgeListComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Bridge'
        }
      },
      {
        path: 'stake-list',
        component: StakeListComponent,
        canActivate: [AuthGuardGuard],
        data: {
          title: 'Stake'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
