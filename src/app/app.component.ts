import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LASHAKA FASHION';
  MainColor='#7fc4fa'
  Semicolor='#de3c78'

  constructor(private titleService:Title) {
    this.titleService.setTitle("LASHAKA FASHION");
  }
}

