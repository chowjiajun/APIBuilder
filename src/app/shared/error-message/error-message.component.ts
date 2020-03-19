import { Component, OnInit, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() formC: AbstractControl;

  errorMessages = [
    { error: 'required', text: 'This field is required.' }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.formC);
  }

}
