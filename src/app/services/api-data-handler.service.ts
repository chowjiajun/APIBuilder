import { Injectable } from '@angular/core';
import { API } from '../models/APIModel';

@Injectable({
  providedIn: 'root'
})
export class ApiDataHandlerService {

  apis: API[] = [];

  constructor() {
    this.apis = JSON.parse(window.localStorage.getItem('apis'));
    if (!this.apis) {
      this.apis = [];
    }
  }

  saveNewAPI(api: API) {
    this.apis.push(api);
    window.localStorage.setItem('apis', JSON.stringify(this.apis));
  }

  deleteAPI(apiToDelete: API) {
    const tempArray: API[] = [];
    this.apis.forEach((api) => {
      if (api !== apiToDelete) {
        tempArray.push(api);
      }
      debugger;
    });
    console.log(tempArray);
    this.apis = tempArray;
    window.localStorage.setItem('apis', JSON.stringify(this.apis));
  }

  clearAllApis() {
    this.apis = [];
    window.localStorage.setItem('apis', JSON.stringify([]));
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
