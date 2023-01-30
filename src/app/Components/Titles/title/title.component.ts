import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  class: string = '';
  moving: boolean = false;

  @Input() shouldSpin: boolean = false;
  @Input() TitleText : string = "";

}
