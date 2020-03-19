import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  touchAllFields(form: FormGroup): void {
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsDirty();
      form.controls[controlName].markAsTouched();
    });
  }
}
