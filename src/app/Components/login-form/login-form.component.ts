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
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private Router: Router
  ) {}

  submitForm() {
    const username = this.form.get('username')?.value || '';
    const password = this.form.get('password')?.value || '';

    console.log(username, password);

    this.authenticationService
      .login(username, password)
      .subscribe((response: any) => {
        this.Router.navigate(['/Shop']);
      });

    if (this.form.invalid) {
      return;
    }
  }
}
