import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './Components/title/title.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { OurModelsComponent } from './Components/our-models/our-models.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ShopPageComponent } from './Pages/shop-page/shop-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ButtonComponent } from './Components/Buttons/button/button.component';
import { AboutUsButtonComponent } from './Components/Buttons/about-us-button/about-us-button.component';
import { OurModelButtonComponent } from './Components/Buttons/our-model-button/our-model-button.component';
import { ItemsComponent } from './Components/items/items.component';

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
    OurModelButtonComponent,
    AboutPageComponent,
    HomePageComponent,
    ShopPageComponent,
    ContactPageComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
