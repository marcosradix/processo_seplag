import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { DefaultModule } from './shared/components/layouts/default/default.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { ShowPDFComponent } from './modules/show-pdf/show-pdf.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowPDFComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgMaterialMultilevelMenuModule,
    ToastrModule.forRoot(),


  ],
  bootstrap: [AppComponent],
  entryComponents: [ShowPDFComponent]
})
export class AppModule { }
