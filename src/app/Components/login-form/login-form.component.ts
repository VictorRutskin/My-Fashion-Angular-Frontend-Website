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
    private AuthenticationService: AuthenticationService,
    private Router: Router
  ) {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    const username = this.form.get('username')?.value || '';
    const password = this.form.get('password')?.value || '';

    this.AuthenticationService.login(username, password).subscribe(
      (response) => {
        this.Router.navigate(['/Shop']);
      }
    );

    console.log(username, password);
  }
}
