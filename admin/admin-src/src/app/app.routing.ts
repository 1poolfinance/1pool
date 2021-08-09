import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { AuthGuardGuard } from './guards/auth-guard.guard';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';
import { RequestPasswordComponent } from './views/request-password/request-password.component';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';

export const routes: Routes = [

  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'yDKXkjbhUFZYGEUdINOs/pages',
    redirectTo: 'yDKXkjbhUFZYGEUdINOs/pages/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuardGuard],
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'yDKXkjbhUFZYGEUdINOs',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'request-password',
    component: RequestPasswordComponent,
    data: {
      title: 'Request Password'
    }
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
    data: {
      title: 'Reset Password'
    }
  },
  {
    path: 'yDKXkjbhUFZYGEUdINOs/pages',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
