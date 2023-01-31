import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-navigator',
  templateUrl: './shop-navigator.component.html',
  styleUrls: ['./shop-navigator.component.css'],
})
export class ShopNavigatorComponent {
  Links = [
    { href: '/Shop/Headwear', Text: 'Headwear' },
    { href: '/Shop/Bodywear', Text: 'Bodywear' },
    { href: '/Shop/Legwear', Text: 'Legwear' },
    { href: '/Shop/FootWear', Text: 'Footwear' },
  ];
}
