import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Validator } from '@angular/forms';


@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator{
  @Input() appConfirmEqualValidator!: string;
  validate(control: AbstractControl<any, any>): {[key:string]: any} | null {
    const controlToCompare = control.parent?.get(this.appConfirmEqualValidator);
    if(controlToCompare && controlToCompare.value !== control.value){
      return{ 'notEqual': true};
    }
    return null;
  }
}
