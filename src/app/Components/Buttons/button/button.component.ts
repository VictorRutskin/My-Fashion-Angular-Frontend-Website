import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  selectedComponent: string = 'about-us';
  spinDirection: string = 'spin-right';

  toggleComponent() {
    if (this.Content === "1") {
      this.selectedComponent = '1';
      this.spinDirection = 'spin-right';
    } else {
      this.selectedComponent = '2';
      this.spinDirection = 'spin-left';
    }
  }

  ngOnInit() {
    this.toggleComponent();
  }
  toggleVisibility() {
    this.visible = !this.visible;
    this.visibilityToggled.emit(this.visible);
  }

  @Input() buttonText: string = "";
  @Input() Content: string = "";
  @Output() visibilityToggled = new EventEmitter<boolean>();


  visible = false;

}