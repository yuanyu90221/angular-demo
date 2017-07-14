import { PasswdValidators } from './passwd.validators';
import { FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'change-passwd-form',
  templateUrl: './change-passwd-form.component.html',
  styleUrls: ['./change-passwd-form.component.css']
})
export class ChangePasswdFormComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
        oldpasswd: ['', Validators.required, PasswdValidators.shouldMatchOldPasswd],
        newpasswd: ['', Validators.required],
        confirmpasswd: ['', Validators.required]
    }, {validator: PasswdValidators.misMatch});
  }

  log(form) {
    console.log(form);
  }

  get oldpasswd() {
    return this.form.get('oldpasswd');
  }

  get newpasswd() {
    return this.form.get('newpasswd');
  }

  get confirmpasswd() {
    return this.form.get('confirmpasswd');
  }

}
