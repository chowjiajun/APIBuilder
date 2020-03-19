import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiDataHandlerService } from 'src/app/services/api-data-handler.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { API } from 'src/app/models/APIModel';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-add-new-api-modal',
  templateUrl: './add-new-api-modal.component.html',
  styleUrls: ['./add-new-api-modal.component.css']
})
export class AddNewApiModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private apiDataHandlerService: ApiDataHandlerService,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      producer: [''],
      webServiceFormat: ['REST'],
      input: ['JSON'],
      output: ['JSON']
    });
  }

  onSave() {
    if (this.form.valid) {
      const api: API = {
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        producer: this.form.get('producer').value,
        webServiceFormat: this.form.get('webServiceFormat').value,
        input: this.form.get('input').value,
        output: this.form.get('output').value
      };
      try {
        this.apiDataHandlerService.checkDuplicateAPINameAndSaveAPI(api);
      } catch (error) {
        console.log(error);
      }
    } else {
      this.formService.touchAllFields(this.form);
    }
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
