import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewApiModalComponent } from './add-new-api-modal/add-new-api-modal.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';

@NgModule({
  declarations: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent
  ],
  entryComponents: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent
  ]
})
export class ModalsModule { }
