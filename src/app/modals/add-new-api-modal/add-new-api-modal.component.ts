import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-new-api-modal',
  templateUrl: './add-new-api-modal.component.html',
  styleUrls: ['./add-new-api-modal.component.css']
})
export class AddNewApiModalComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
