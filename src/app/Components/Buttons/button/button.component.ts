import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  selectedComponent: string = 'about-us';
  spinDirection: string = '';
  Link: string = '/Shop/All';

  @Input() buttonText: string = "";
  @Input() Content: string = "";
  @Output() visibilityToggled = new EventEmitter<boolean>();

  @ViewChild('target', { static: false, read: ElementRef }) target: ElementRef | null = null;
  visible = false;

  toggleComponent() {
    if (this.Content === "1") {
      this.selectedComponent = '1';
      this.spinDirection = 'spin-right';
    } else if (this.Content === "2") {
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

    setTimeout(() => { //waiting for the components to load to go down to
      this.scrollDown();
    }, 100);  }

  scrollDown(){
    if (this.target) {
      this.target.nativeElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
