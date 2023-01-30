import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-now-button',
  templateUrl: './buy-now-button.component.html',
  styleUrls: ['./buy-now-button.component.css']
})
export class BuyNowButtonComponent {
  Text = "Shop Now!";
  ContentID = "3";
  href ="/Shop";
}
