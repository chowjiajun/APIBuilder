import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddNewApiModalComponent } from '../modals/add-new-api-modal/add-new-api-modal.component';
import { ApiDataHandlerService } from '../services/api-data-handler.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  addNewAPIModal: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private apiDataHandlerService: ApiDataHandlerService
  ) { }

  ngOnInit(): void {
    
  }

  openAddNewAPIModal(event: Event) {
    event.preventDefault();
    this.addNewAPIModal = this.modalService.show(AddNewApiModalComponent, {
      class: 'modal-lg modal-dialog-centered scrollable'
    });
  }
}