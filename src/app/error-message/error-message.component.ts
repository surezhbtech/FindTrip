import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-error-message',
  template: `<span class="error" *ngIf="errorMessage !== null">{{errorMessage}}</span>`,
  styles: [`
        .error{
            color: #d40504;
        }`]
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }

  ngOnInit() {
  }
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
