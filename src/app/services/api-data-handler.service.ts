import { Injectable } from '@angular/core';
import { API } from '../models/APIModel';

@Injectable({
  providedIn: 'root'
})
export class ApiDataHandlerService {

  apis: API[] = [];

  constructor() {
    console.log('API Data Handler Instantiated');
    this.apis = JSON.parse(window.localStorage.getItem('apis'));
    if (!this.apis) {
      this.apis = [];
    }
  }

  saveNewAPI(api: API) {
    this.apis.push(api);
    window.localStorage.setItem('apis', JSON.stringify(this.apis));
  }

  checkDuplicateAPIName(apiName: string): boolean {
    let found = false;
    this.apis.forEach((api: API) => {
      console.log(api.name === apiName);
      if (api.name === apiName) {
        found = true;
      }
    });
    return found;
  }
}
