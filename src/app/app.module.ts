import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modals
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddNewApiModalComponent } from './modals/add-new-api-modal/add-new-api-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewApiModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
