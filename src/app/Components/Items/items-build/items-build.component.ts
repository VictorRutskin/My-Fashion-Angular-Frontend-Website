import { Component } from '@angular/core';

@Component({
  selector: 'app-items-build',
  templateUrl: './items-build.component.html',
  styleUrls: ['./items-build.component.css']
})
export class ItemsBuildComponent {
  Headwearitems = [
    { name: 'Bubble head', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/bubble head.png' },
    { name: 'Cattlehead', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/cattlehead.jpg' },
    { name: 'diamonghead', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/diamonghead.jpg' },
    { name: 'knight mask', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/knight mask.png' },
    { name: 'mask', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/mask.jpg' },
  ];
  Shirtsitems = [
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/amagdyla dress.png' },
    { name: 'dumb suit', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/dumb suit.png' },
    { name: 'neon shirt', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/neon shirt.png' },
    { name: 'red face cover', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/red face cover.png' },
    { name: 'white spikey set women', description: 'Denim, classic fit', price: '$50', image: 'assets/Images/ClothingItems/white spikey set women.png' },
  ];
  Pantsitems = [
    { name: 'Jeans', description: 'Denim, classic fit', price: '$50', image: 'assets/Images/ClothingItems/amagdyla dress.png' },
  ];
  Shoesitems = [

    { name: 'Jeans', description: 'Denim, classic fit', price: '$50', image: 'assets/Images/ClothingItems/amagdyla dress.png' },
  ];
  addToCart(item: any) {
    console.log('Adding to cart: ', item);
  }
}