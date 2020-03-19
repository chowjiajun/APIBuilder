import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Self Defined modules
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsModule } from './modals/modals.module';

// Service Files
import { ApiDataHandlerService } from './services/api-data-handler.service';
import { FormService } from './services/form.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ModalsModule,
    SharedModule
  ],
  providers: [
    ApiDataHandlerService,
    FormService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
