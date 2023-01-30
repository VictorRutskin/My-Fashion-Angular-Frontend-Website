import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  items = [
    { name: 'T-Shirt', description: '100% cotton, available in various colors', price: '$20', image: 'https://via.placeholder.com/50x50' },
    { name: 'Jeans', description: 'Denim, classic fit', price: '$50', image: 'https://via.placeholder.com/50x50' }
  ];

  addToCart(item: any) {
    console.log('Adding to cart: ', item);
  }
}