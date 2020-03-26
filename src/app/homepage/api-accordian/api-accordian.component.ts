import { Component, OnInit, Input } from '@angular/core';
import { API } from 'src/app/models/APIModel';
import { ApiDataHandlerService } from 'src/app/services/api-data-handler.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-api-accordian',
  templateUrl: './api-accordian.component.html',
  styleUrls: ['./api-accordian.component.css']
})
export class ApiAccordianComponent implements OnInit {

  @Input() api: API;

  isCollapsed = false;
  deleteModalRef: BsModalRef;
  editModalRef: BsModalRef;
  rarelyUsedMethods: string[] = ['PATCH', 'TRACE', 'HEAD', 'CONNECT', 'OPTIONS'];

  constructor(
    private apiDataHandlerService: ApiDataHandlerService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log('API: ', this.api);
  }

  editAPI() {
    
  }

  deleteAPI() {
    const modalOptions: ModalOptions = {
      initialState: {
        api: this.api
      }
    };
    this.deleteModalRef = this.bsModalService.show(DeleteConfirmationModalComponent, modalOptions);
  }
}
