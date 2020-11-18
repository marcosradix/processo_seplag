

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './shared/components/layouts/default/default.component';





const routes: Routes = [

    {
    path: '',
    component: DefaultComponent,
    children: [
 
  {
    path: '',loadChildren: () => import('./shared/components/layouts/default/default.module').then(d => d.DefaultModule),
  },
    {
    path: 'beneficio', loadChildren: () => import('./modules/beneficio/beneficio.module').then(d => d.BeneficioModule),

  },
    {
    path: 'tramites', loadChildren: () => import('./modules/tramitacao/tramitacao.module').then(d => d.TramitacaoModule),

  },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
