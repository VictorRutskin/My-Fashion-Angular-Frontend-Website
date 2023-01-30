import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  HomeText ="Home" // Home Page
  AboutText ="About" // About Us Page
  ShopText ="Shop" //Shop Page
  ContactText ="Contact" // Contact Page

  Links = [
    { href: '/Home', Text: 'Home' },
    { href: '/About', Text: 'About' },
    { href: '/Shop', Text: 'Shop' },
    { href: '/Contact', Text: 'Contact' },
  ];

  isCollapsed = false;
}
