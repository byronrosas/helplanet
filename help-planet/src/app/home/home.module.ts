import { MenuComponent } from './menu/menu.component';
import { TitleLogoComponent } from './../components/title-logo/title-logo.component';
import { FooterPlanetComponent } from './../components/footer-planet/footer-planet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FooterPlanetComponent, TitleLogoComponent, MenuComponent]
})
export class HomePageModule {}
