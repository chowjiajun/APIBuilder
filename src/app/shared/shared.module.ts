import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
    FontAwesomeModule
  ],
  exports: [
    ErrorMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
