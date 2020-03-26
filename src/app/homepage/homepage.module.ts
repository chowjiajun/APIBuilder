import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ModalsModule } from '../modals/modals.module';
import { SharedModule } from '../shared/shared.module';
import { ApiAccordianComponent } from './api-accordian/api-accordian.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    HomepageComponent,
    ApiAccordianComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ModalsModule,
    SharedModule
  ]
})
export class HomepageModule { }
