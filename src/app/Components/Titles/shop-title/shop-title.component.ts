import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-title',
  templateUrl: './shop-title.component.html',
  styleUrls: ['./shop-title.component.css'],
})
export class ShopTitleComponent {
  Title = 'Shop';
}
