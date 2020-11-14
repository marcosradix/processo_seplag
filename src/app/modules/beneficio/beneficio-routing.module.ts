

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarArquivosComponent } from './adicionar-arquivos/adicionar-arquivos.component';
import { FormBeneficioComponent } from './form-beneficio/form-beneficio.component';
import { TableBeneficiosComponent } from './table-beneficios/table-beneficios.component';


const routes: Routes = [
  {
    path: '',
    component: FormBeneficioComponent,
  },  
  {
    path: 'todos',
    component: TableBeneficiosComponent,
  },
  {
    path: 'arquivos/:id',
    component: AdicionarArquivosComponent,
  },
    {
    path: 'arquivos/ver/:id',
    component: AdicionarArquivosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficioRoutingModule { }
