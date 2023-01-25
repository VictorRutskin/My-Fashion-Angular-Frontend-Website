import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  selectedComponent: string = 'about-us';
  toggleComponent() {
    if (this.Content == "1") {
      this.selectedComponent = '1'
    }
    else
    {
      this.selectedComponent = '2'
    }
  }

  ngOnInit() {
    this.toggleComponent();
  }

  @Input() buttonText: string = "";
  @Input() Content: string = "";

  visible = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }
}