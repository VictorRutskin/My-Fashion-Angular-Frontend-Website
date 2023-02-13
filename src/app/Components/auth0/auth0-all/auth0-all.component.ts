import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0-all',
  templateUrl: './auth0-all.component.html',
  styleUrls: ['./auth0-all.component.css']
})
export class Auth0AllComponent  implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}