import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule
  ],
  exports: [
    ErrorMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule
  ]
})
export class SharedModule { }
