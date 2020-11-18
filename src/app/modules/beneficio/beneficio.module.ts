
import { MaterialModule } from 'src/app/shared/material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficioRoutingModule } from './beneficio-routing.module';
import { FormBeneficioComponent } from './form-beneficio/form-beneficio.component';
import { TableBeneficiosComponent } from './table-beneficios/table-beneficios.component';
import { AdicionarArquivosComponent } from './adicionar-arquivos/adicionar-arquivos.component';


@NgModule({
  declarations: [FormBeneficioComponent, TableBeneficiosComponent, AdicionarArquivosComponent],
  imports: [
    CommonModule,
    BeneficioRoutingModule,
    MaterialModule
  ]
})
export class BeneficioModule { }
