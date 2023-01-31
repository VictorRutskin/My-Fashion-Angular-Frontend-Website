import { ShopFootWearComponent } from './Pages/Shop Pages/shop-foot-wear/shop-foot-wear.component';
import { ShopPantsComponent } from './Pages/Shop Pages/shop-pants/shop-pants.component';
import { ShopShirtsComponent } from './Pages/Shop Pages/shop-shirts/shop-shirts.component';
import { ShopHeadwearComponent } from './Pages/Shop Pages/shop-headwear/shop-headwear.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ShopPageComponent } from './Pages/Shop Pages/shop-page/shop-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'About', component: AboutPageComponent },
  { path: 'Shop', component: ShopHeadwearComponent },
  { path: 'Contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent }, //default go to home

  //Shop
  { path: 'Shop/Headwear', component: ShopHeadwearComponent },
  { path: 'Shop/Bodywear', component: ShopShirtsComponent },
  { path: 'Shop/Legwear', component: ShopPantsComponent },
  { path: 'Shop/FootWear', component: ShopFootWearComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
