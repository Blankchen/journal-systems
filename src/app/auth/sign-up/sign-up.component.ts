import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { notEqualValidator } from '@shared/validators/notEqual';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      passwords: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]],
        confirmPassword: ['', [Validators.required]],
      }, { validator: notEqualValidator('password', 'confirmPassword') }),
    });
  }

  // checkPasswords(group: FormGroup): { mismatch: boolean } {
  //   const password = group.get('password');
  //   const confirm = group.get('confirmPassword');
  //   if (!password || !confirm) {
  //     return null;
  //   }
  //   return password.value === confirm.value ? null : { mismatch: true };
  // }

  isFieldInvalid(field: string) {
    return !this.signupForm.get(field).valid && this.signupForm.get(field).touched;
  }

  signUpByEmail() {
    this.authService.signUpByEmail(this.signupForm.value).subscribe(data => {
      console.log('signUpByEmail', data);
    });
  }

}

