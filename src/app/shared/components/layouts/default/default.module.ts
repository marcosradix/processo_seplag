import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardRoutingModule } from 'src/app/modules/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [
    DefaultComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TextMaskModule,
    NgxMaskModule.forRoot(),
    DashboardRoutingModule

  ],
  providers:[
    //   {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomHttpInterceptorService,
    //   multi: true
    // }
  

  ],
})
export class DefaultModule { }
