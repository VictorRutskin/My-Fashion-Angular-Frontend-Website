import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// Create a function to change the color of each letter
function changeColor(text: string) {
  // Create an array of colors
  const colors = ["red", "green", "blue", "yellow", "purple"];

  // Create an empty string to store the new text
  let newText = "";

  // Loop through each letter in the text
  for (let i = 0; i < text.length; i++) {
    // Get a random color from the array
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Add the letter to the new text with the color
    newText += `<span style="color: ${color}">${text[i]}</span>`;
  }

  // Return the new text
  return newText;

  const coloredText = changeColor("Hello World!");

}

function MakeVisble()
{
  document.getElementById("AboutUsText")!.style.visibility ="hidden";
}

