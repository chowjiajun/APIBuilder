import { Injectable } from '@angular/core';
import { API } from '../models/APIModel';

@Injectable({
  providedIn: 'root'
})
export class ApiDataHandlerService {

  apis: API[];

  constructor() {
  }

  checkDuplicateAPINameAndSaveAPI(api: API): boolean {
    if (api.name === api.name) {
      throw new Error('API Name already exists!');
    } else {

    }
    return true;
  }
}
