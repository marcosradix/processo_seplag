import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './shared/components/layouts/default/default.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomHttpInterceptorService } from './services/interceptor/custom-http-interceptor.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { SubAuthGuardService } from './services/guard/subAuthGuardService';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgMaterialMultilevelMenuModule,
    ToastrModule.forRoot(),

  ],
  providers: [
         {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true
    },
    AuthGuardService,
    SubAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
