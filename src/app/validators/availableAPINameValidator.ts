import { ValidatorFn, AbstractControl } from '@angular/forms';
import { ApiDataHandlerService } from '../services/api-data-handler.service';

export function availableAPINameValidator(apiDataHandler: ApiDataHandlerService): ValidatorFn {
    // tslint:disable-next-line: only-arrow-functions
    return function(control: AbstractControl): { [key: string]: any } | null {
        const found = apiDataHandler.checkDuplicateAPIName(control.value);
        if (found) {
            return { apiNameExists: true };
        } else {
            return null;
        }
    };
}