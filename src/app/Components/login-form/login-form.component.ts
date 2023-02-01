import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username = new FormControl('', [Validators.required]);
password = new FormControl('', [Validators.required]);

  login() {
    console.log(`Username: ${this.username} Password: ${this.password}`);
  }
}
