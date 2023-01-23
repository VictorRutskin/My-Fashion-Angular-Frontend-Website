import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {


  Visble = true;

  toggleVisbillity() {
    if (this.Visble == false) {
      this.Visble = true;
      return true;
    }
    else {
      this.Visble = false;
      return false;
    }
  }


}
