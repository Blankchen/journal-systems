import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]]
    });
  }

  isFieldInvalid(field: string) {
    return !this.signupForm.get(field).valid && this.signupForm.get(field).touched;
  }

  signInByEmail() {
    // test@test.com / qwerty
    this.authService.signInByEmail(this.signupForm.value).subscribe(data => {
      console.log('signInByEmail', data);
    });
  }

  signInByGoogle() {
    this.authService.signInByGoogle().subscribe(data => {
      console.log('signInByGoogle', data);
    });
  }

  signInByFacebook() {
    this.authService.signInByFacebook().subscribe(data => {
      console.log('signInByFacebook', data);
    });
  }
}



