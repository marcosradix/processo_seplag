

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { SubAuthGuardService } from './services/guard/subAuthGuardService';
import { DefaultComponent } from './shared/components/layouts/default/default.component';





const routes: Routes = [

    {
    path: '',
    component: DefaultComponent,
    canActivate:[AuthGuardService],
    children: [
 
  {
    path: '', canActivate:[SubAuthGuardService],loadChildren: () => import('./shared/components/layouts/default/default.module').then(d => d.DefaultModule),
  },

    ]
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(d => d.LoginModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
