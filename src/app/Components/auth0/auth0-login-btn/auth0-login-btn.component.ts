import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0-login-btn',
  templateUrl: './auth0-login-btn.component.html',
  styleUrls: ['./auth0-login-btn.component.css'],
})
export class Auth0LoginBtnComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
