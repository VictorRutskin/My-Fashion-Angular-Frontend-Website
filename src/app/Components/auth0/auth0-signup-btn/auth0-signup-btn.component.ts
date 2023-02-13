import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-auth0-signup-btn',
  templateUrl: './auth0-signup-btn.component.html',
  styleUrls: ['./auth0-signup-btn.component.css']
})
export class Auth0SignupBtnComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}