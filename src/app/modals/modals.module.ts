import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewApiModalComponent } from './add-new-api-modal/add-new-api-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddNewApiModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddNewApiModalComponent
  ]
})
export class ModalsModule { }
