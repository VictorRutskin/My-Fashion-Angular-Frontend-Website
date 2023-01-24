import { Component } from '@angular/core';

@Component({
  selector: 'app-our-models',
  templateUrl: './our-models.component.html',
  styleUrls: ['./our-models.component.css']
})
export class OurModelsComponent {
  models = [
    { name: 'Julia', image: 'assets/Images/FashionModels/FM1.jpg'},
    { name: 'Lior', image: 'assets/Images/FashionModels/FM2.jpg' },
    { name: 'Tal', image: 'assets/Images/FashionModels/FM3.jpg' },
    { name: 'Hadar', image: 'assets/Images/FashionModels/FM4.jpg' },
    { name: 'Or 1', image: 'assets/Images/FashionModels/FM5.jpg' },
    { name: 'Or 2', image: 'assets/Images/FashionModels/FM6.jpg' },

      ];
}
