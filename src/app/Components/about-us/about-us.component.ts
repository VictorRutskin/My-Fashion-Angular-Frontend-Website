import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  TextLines = [
    { name: 'Text1', Text: 'Welcome to Lashaka Fashion, where we offer cutting-edge and unique clothing, shoes and accessories.'},
    { name: 'Text2', Text: 'Our flagship product is our line of "smart fabrics" that can change color, pattern, and texture in response to different stimuli.' },
    { name: 'Text3', Text: 'In addition to our smart fabrics, we also offer a wide variety of other fashion items that are designed to be both functional and stylish.' },
    { name: 'Text4', Text: 'At Lashaka Fashion, we are committed to providing our customers with the best possible shopping experience, so be sure to check back often to see whats new.' },
    { name: 'Text5', Text: 'Thank you for choosing Lashaka Fashion!' },
      ];


}

