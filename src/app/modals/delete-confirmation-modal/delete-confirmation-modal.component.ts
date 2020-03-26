import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { API } from 'src/app/models/APIModel';
import { ApiDataHandlerService } from 'src/app/services/api-data-handler.service';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent implements OnInit {

  @Input() api: API;

  constructor(
    public bsModalRef: BsModalRef,
    private apiDataHandlerServicer: ApiDataHandlerService
  ) { }

  ngOnInit(): void {
    console.log(this.api);
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

  deleteAPI(): void {
    this.apiDataHandlerServicer.deleteAPI(this.api);
    this.bsModalRef.hide();
  }
}
