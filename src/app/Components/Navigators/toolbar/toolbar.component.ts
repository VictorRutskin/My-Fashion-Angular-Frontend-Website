import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  Links = [
    { href: '/Home', Text: 'Home' },
    { href: '/About', Text: 'About' },
    { href: '/Shop', Text: 'Shop' },
    { href: '/Contact', Text: 'Contact' },
  ];

  isCollapsed = false;
}
