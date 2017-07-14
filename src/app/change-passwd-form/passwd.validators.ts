import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
export class PasswdValidators {
  static shouldMatchOldPasswd(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          if (control.value !== '1234') {
            resolve({shouldMatchOldPasswd: true});
          }
          // tslint:disable-next-line:one-line
          else {
            resolve(null);
          }
        }, 2000);
    });
  }

  static misMatch(group: FormGroup): ValidationErrors | null {
    // let valid = false;
    return group.get('confirmpasswd').value === group.get('newpasswd').value ? null : {mismatch: true};
  }
}
