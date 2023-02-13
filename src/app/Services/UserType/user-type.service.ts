import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  //admin
  //registered user
  //guest


  userType: string;

  constructor() {
    const userAgentLocal = 'guest';
    
    if (userAgentLocal.toLowerCase().startsWith('admin')) {
      this.userType = 'admin';
    } else if (userAgentLocal.toLowerCase().startsWith('user')) {
      this.userType = 'user';
    } else {
      this.userType = 'guest';
    }
  }
}