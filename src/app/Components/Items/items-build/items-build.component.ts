import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-items-build',
  templateUrl: './items-build.component.html',
  styleUrls: ['./items-build.component.css']
})
export class ItemsBuildComponent {
  List: { name: string; description: string; price: string; image: string; }[] = [];

  @Input() ListName: string = "";

  Headwearitems = [
    { name: 'Bubble head', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/bubble head.png' },
    { name: 'Cattlehead', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/cattlehead.jpg' },
    { name: 'diamonghead', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/diamonghead.jpg' },
    { name: 'knight mask', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/knight mask.png' },
    { name: 'mask', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/mask.jpg' },
  ];
  Shirtsitems = [
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/amagdyla dress.png' },
    { name: 'dumb suit', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/dumb suit.png' },
    { name: 'neon shirt', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/neon shirt.jpg' },
    { name: 'red face cover', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/red face cover.jpg' },
    { name: 'white spikey set women', description: 'Denim, classic fit', price: '$50', image: 'assets/Images/ClothingItems/BodyWear/white spikey set women.png' },
  ];
  Pantsitems = [
    { name: 'Blue Raze pants', description: 'Pants with Raze effect good for flying.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Blue Raze effect pants.png' },
    { name: 'Globus festival pants 2460', description: 'Celebrating 60 years without AI control over the human race.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Rainbow Trippy Globus festival pants 2460.png' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Traditional Yoga Planet Mom.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Volt lightning pants.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/LegWear/wiggle pants.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Wizz Race Blood Pants.png' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/LegWear/yogo alien trousers.png' },
  ];
  Shoesitems = [
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Anti Radiation Shoes For EU southern District.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Fly High Shoes BB61.png' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Galactic Football Shoes.png' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Inflatable soft sponge G558.png' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Layered Hovers.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Psychic Shoes Inflated.jpg' },
    { name: 'Amagdyla dress', description: '100% cotton, available in various colors', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Traditional Chinese Shoes 2300 era.jpg' },
  ];
  


  addToCart(item: any) {
    console.log('Adding to cart: ', item);
  }

  ngOnInit() {
    if (this.ListName === 'Headwearitems') {
       this.List  = this.Headwearitems;
    } else if (this.ListName === 'Shirtsitems') {
        this.List = this.Shirtsitems;
    } else if (this.ListName === 'Pantsitems') {
        this.List = this.Pantsitems;
    } else if (this.ListName === 'Shoesitems') {
        this.List = this.Shoesitems;
    }
}
}