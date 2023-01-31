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
    { name: 'Bubble Head Hat', description: 'quirky headpiece with a transparent dome that encapsulates your head.', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/bubble head.png' },
    { name: 'Cattlehead Hat', description: ' humorous hat that might unlock the secrets of the farm districts.', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/cattlehead.jpg' },
    { name: 'Diamond Face Mask', description: 'luxurious face covering featuring a diamond-encrusted pattern.', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/diamonghead.jpg' },
    { name: 'knight Mask', description: 'An intimidating face covering modeled after a medieval knights helmet.', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/knight mask.png' },
    { name: 'Air Filtering Mask', description: 'functional mask that purifies the air you breathe through its advanced filtration system.', price: '$20', image: 'assets/Images/ClothingItems/HeadWear/mask.jpg' },
  ];
  Shirtsitems = [
    { name: 'Amagdyla Dress', description: 'stunning garment with intricate patterns inspired by the Greek myth of the Gorgon Medusa.', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/amagdyla dress.png' },
    { name: 'Dumb Suit', description: 'formal suit with exaggerated features, designed for comedic effect.', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/dumb suit.png' },
    { name: 'Neon Shirt', description: 'vibrant shirt that glows in the dark, perfect for parties and events.', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/neon shirt.jpg' },
    { name: 'Red Face Cover Hoodie', description: 'face covering hoodie in a fiery shade of red.', price: '$20', image: 'assets/Images/ClothingItems/BodyWear/red face cover.jpg' },
    { name: 'White Spikey Set Women', description: 'fashion-forward set for women with a white spikey pattern.', price: '$50', image: 'assets/Images/ClothingItems/BodyWear/white spikey set women.png' },
  ];
  Pantsitems = [
    { name: 'Blue Raze pants', description: 'Pants with Raze effect fit for flying.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Blue Raze effect pants.png' },
    { name: 'Globus festival pants 2460', description: 'Celebrating 60 years without AI control over the human race.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Rainbow Trippy Globus festival pants 2460.png' },
    { name: 'Yoga Aztec Pattern', description: 'Traditional Yoga from Planet Morm.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Traditional Yoga Planet Mom.jpg' },
    { name: 'Volt Lightning Pants', description: 'Made with real lightning.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Volt lightning pants.jpg' },
    { name: 'Wiggle Pants', description: ' Fun pants that move and "wiggle" with your every step.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/wiggle pants.jpg' },
    { name: 'Wizz Race Blood Pants', description: 'A sporty pair of pants inspired by racing, with a bold "wizz race" blood design.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/Wizz Race Blood Pants.png' },
    { name: 'Yoga Alien Trousers', description: 'Futuristic pants for yoga enthusiasts, featuring an alien-inspired design.', price: '$20', image: 'assets/Images/ClothingItems/LegWear/yogo alien trousers.png' },
  ];
  Shoesitems = [
    { name: 'Anti Radiation Shoes', description: 'Protective shoes designed to shield against harmful radiation, perfect for use in EU southern district.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Anti Radiation Shoes For EU southern District.jpg' },
    { name: 'Fly High Shoes BB61', description: 'Stylish shoes with a futuristic design, made for people who like to "fly high."', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Fly High Shoes BB61.png' },
    { name: 'Galactic Football Shoes', description: 'High-performance shoes for football players, with a galaxy-inspired design.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Galactic Football Shoes.png' },
    { name: 'Inflatable Soft Sponge G558', description: 'Comfortable shoes with a soft sponge sole that can be inflated for extra cushioning.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Inflatable soft sponge G558.png' },
    { name: 'Layered Hovers', description: ' Futuristic shoes with a multi-layer design, perfect for "hovering" around.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Layered Hovers.jpg' },
    { name: 'Psychic Shoes Inflated', description: 'Stylish shoes with a unique, inflatable design inspired by psych-rock music.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Psychic Shoes Inflated.jpg' },
    { name: 'raditional Chinese Shoes 2300 era', description: 'A traditional style of shoe from the 2300 era in Chinese history, perfect for costume or cultural events.', price: '$20', image: 'assets/Images/ClothingItems/FootWear/Traditional Chinese Shoes 2300 era.jpg' },
  ];
  
  addToCart(item: any) {
    console.log('Adding to cart: ', item);
  }

  ngOnInit() {
    if (this.ListName === 'Headwearitems' ||this.ListName === 'All') {
      this.List = this.List.concat(this.Headwearitems);
    } 
   if (this.ListName === 'Shirtsitems' ||this.ListName === 'All') {
    this.List = this.List.concat(this.Shirtsitems);
  } 
   if (this.ListName === 'Pantsitems' ||this.ListName === 'All') {
    this.List = this.List.concat(this.Pantsitems);
  } 
   if (this.ListName === 'Shoesitems' ||this.ListName === 'All') {
    this.List = this.List.concat(this.Shoesitems);
  }
}
}