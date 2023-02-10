import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  registerForm: any = FormGroup;
  submitted = false;
  //Add user form actions
  get form() {
    return this.registerForm.controls;
  }

  constructor(
    //private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  submitForm() {
    // const email = this.form.get('email')?.value || '';
    // const password = this.form.get('password')?.value || '';

    // console.log(email, password);

    // this.authenticationService
    //   .login(username, password)
    //   .subscribe((response: any) => {
    //     this.Router.navigate(['/Shop']);
    //   });

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      alert('submitted!!');
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
}
