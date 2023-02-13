import { UserTypeService } from './../../Services/UserType/user-type.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visiting-agent',
  templateUrl: './visiting-agent.component.html',
  styleUrls: ['./visiting-agent.component.css']
})
export class VisitingAgentComponent {
  userType: string;

  constructor(private userTypeService: UserTypeService) {
    this.userType = this.userTypeService.userType;
  }
}