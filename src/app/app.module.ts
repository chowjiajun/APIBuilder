import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Self Defined modules
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsModule } from './modals/modals.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Service Files
import { ApiDataHandlerService } from './services/api-data-handler.service';
import { FormService } from './services/form.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
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
