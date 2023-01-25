import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Components/button/button.component';
import { TitleComponent } from './Components/title/title.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { OurModelsComponent } from './Components/our-models/our-models.component';
import { AboutUsButtonComponent } from './Buttons/about-us-button/about-us-button.component';
import { OurModelButtonComponent } from './Buttons/our-model-button/our-model-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TitleComponent,
    FooterComponent,
    ToolbarComponent,
    AboutUsComponent,
    OurModelsComponent,
    AboutUsButtonComponent,
    OurModelButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
