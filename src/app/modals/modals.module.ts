import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewApiModalComponent } from './add-new-api-modal/add-new-api-modal.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';
import { EditApiModalComponent } from './edit-api-modal/edit-api-modal.component';

@NgModule({
  declarations: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent,
    EditApiModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent,
    EditApiModalComponent
  ],
  entryComponents: [
    AddNewApiModalComponent,
    DeleteConfirmationModalComponent,
    EditApiModalComponent
  ]
})
export class ModalsModule { }
