import { MaterialModule } from 'src/app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TramitacaoRoutingModule } from './tramitacao-routing.module';
import { TramitesComponent } from './tramites/tramites.component';


@NgModule({
  declarations: [TramitesComponent],
  imports: [
    CommonModule,
    TramitacaoRoutingModule,
    MaterialModule
  ]
})
export class TramitacaoModule { }
