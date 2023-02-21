import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  errorMessage = new BehaviorSubject<string>('Error');
  //Add user form actions
  get form() {
    return this.registerForm.controls;
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  submitForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      this.httpClient
        .post('/submitlogin', {
          email: this.registerForm.get('email').value,
          password: this.registerForm.get('password').value,
        })
        .subscribe((response: any) => {
          if (response.status === 200) {
            //check if admin or user
            let user = response.data;
            if (user.roles === 'admin') {
              this.errorMessage.next('Welcome admin');
              this.router.navigate(['/home']);
            } else if (user.roles === 'user') {
              let username = user.email.substring(0, user.email.indexOf('@'));
              this.errorMessage.next('Welcome ' + username);

              this.router.navigate(['/home']);
            }
          } else if (response.status === 401) {
            this.errorMessage.next(response.error);
            this.router.navigate(['/login']);
          }
        });
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
}
