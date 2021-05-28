import { AbstractControl } from '@angular/forms';
export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('new_pass').value;

       let confirmPassword = control.get('confirm_pass').value;

        if(password != confirmPassword) {
            control.get('confirmPassword').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}