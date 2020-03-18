import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  errorMessages = [
    { error: 'nameUsed', text: 'Name has already been used.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
