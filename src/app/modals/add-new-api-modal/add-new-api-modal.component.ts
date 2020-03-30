import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiDataHandlerService } from 'src/app/services/api-data-handler.service';
import { FormBuilder, FormGroup, Validators, FormArray, Form, FormArrayName } from '@angular/forms';
import { API } from 'src/app/models/APIModel';
import { FormService } from 'src/app/services/form.service';
import { availableAPINameValidator } from 'src/app/validators/availableAPINameValidator';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-api-modal',
  templateUrl: './add-new-api-modal.component.html',
  styleUrls: ['./add-new-api-modal.component.css']
})
export class AddNewApiModalComponent implements OnInit {

  form: FormGroup;
  deleteIcon = faTrashAlt;
  plusIcon = faPlus;

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
      name: ['', [Validators.required, availableAPINameValidator(this.apiDataHandlerService)]],
      description: [''],
      producer: [''],
      webServiceFormat: ['REST'],
      input: ['JSON'],
      output: ['JSON'],
      method: ['GET'],
      inputFields: this.formBuilder.array([]),
      outputFields: this.formBuilder.array([])
    });
  }

  get inputFields(): FormArray {
    return this.form.get('inputFields') as FormArray;
  }

  get outputFields(): FormArray {
    return this.form.get('outputFields') as FormArray;
  }

  addInputField() {
    this.inputFields.push(this.formBuilder.group({
      serialNo: this.inputFields.length + 1,
      inputField: [null, Validators.required],
      dataType: ['CHAR', Validators.required],
      length: [null],
      mandatory: ['NO', Validators.required],
      remarks: [null]
    }));
  }

  addInputSubField(parentFormGroup: number, value: string) {
    if (value === 'ARRAYLIST') {
      this.insertAt(this.inputFields, parentFormGroup + 1, this.formBuilder.array([
        this.formBuilder.group({
          serialNo: this.inputFields.length + 1,
          inputField: [null, Validators.required],
          dataType: ['CHAR', Validators.required],
          length: [null],
          mandatory: ['NO', Validators.required],
          remarks: [null]
        })
      ]));
    }
    console.log(this.form);
  }

  deleteInputRow(rowNumber: number) {
    this.inputFields.removeAt(rowNumber);
    this.renumberSerialNo(this.inputFields);
  }

  renumberSerialNo(formArray: FormArray): void {
    for (let i = 1; i < formArray.controls.length + 1; i++) {
      formArray.controls[i - 1].get('serialNo').patchValue(i);
    }
  }

  insertAt(formArray: FormArray, position: number, formArrayOrGroup: FormArray | FormGroup) {
    const newArray = this.formBuilder.array([]);
    if (formArray.controls.length < 2) {
      newArray.push(formArray.controls[0]);
      newArray.push(formArrayOrGroup);
    } else {
      for (let i = 0; i < formArray.controls.length; i++) {
        if (i === position) {
          newArray.push(formArrayOrGroup);
        } else {
          newArray.push(formArray.controls[i]);
        }
      }
    }
    this.removeAllControls(formArray);
    for (const controls of newArray.controls) {
      formArray.push(controls);
    }
  }

  removeAllControls(formArray: FormArray): void {
    for (let i = 0; i < formArray.controls.length; i++) {
      formArray.removeAt(0);
    }
  }

  onSave() {
    console.log('Form :', this.form.value);
    if (this.form.valid) {
      const api: API = {
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        producer: this.form.get('producer').value,
        webServiceFormat: this.form.get('webServiceFormat').value,
        input: this.form.get('input').value,
        output: this.form.get('output').value,
        method: this.form.get('method').value
      };
      this.apiDataHandlerService.saveNewAPI(api);
      this.closeModal();
    } else {
      this.formService.touchAllFields(this.form);
    }
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
