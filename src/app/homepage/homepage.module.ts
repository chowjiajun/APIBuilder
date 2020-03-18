import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ModalsModule } from '../modals/modals.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ModalsModule,
    SharedModule
  ]
})
export class HomepageModule { }
